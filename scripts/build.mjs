#!/usr/bin/env node
// Builds the public site into dist/. No dependencies: Node 18+ only.
//
//   node scripts/build.mjs        public build (what ships)
//   node scripts/build.mjs --qa   same, plus the QA tools, so the audits can run against the built pages
//
// The source pages stay exactly as Claude Design writes them. The build only changes how they load:
//   1. Each page's <helmet> moves into the real <head>. In the source it sits in the body, so the
//      browser runs it once while parsing and the runtime runs it a second time after React boots.
//   2. React is in the <head> ahead of support.js, so the runtime never waits on a late CDN request.
//   3. The components a page imports are preloaded, instead of being found one by one during render.
//   4. Shared CSS and JS get a content hash (?v=), so they can be cached for a year and still update at once.
//   5. Only files a public page needs are copied (allowlist), so notes and tools can't ship by accident.
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'dist');
const qa = process.argv.includes('--qa');

// New pages go here (and in the QA Sweep / A11y Audit lists). Components are found from <dc-import>.
const PAGES = ['AIUXAleem Home', 'Work', 'Case Study', 'Services', 'About', 'Content', 'Guides', 'Guide', '404'];
const TOOLS = ['QA Sweep', 'QA', 'QA Cell', 'A11y Audit', 'Heuristic Evaluation', 'OG Card'];
// Loaded on demand (?audit=1, ?perf=1, the Guide download, image-slot's sidecar) or read by crawlers.
const FILES = ['a11y-audit.js', 'vitals.js', 'component-spec-template.md', '.image-slots.state.json', 'robots.txt', 'index.html'];
const DIRS = ['assets', 'vendor'];

const REACT = [
  { local: 'vendor/react.production.min.js', cdn: 'https://unpkg.com/react@18.3.1/umd/react.production.min.js', sri: 'sha384-DGyLxAyjq0f9SPpVevD6IgztCFlnMF6oW/XQGmfe+IsZ8TqEiDrcHkMLKI6fiB/Z' },
  { local: 'vendor/react-dom.production.min.js', cdn: 'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js', sri: 'sha384-gTGxhz21lVGYNMcdJOyq01Edg0jhn/c22nsx0kyqP0TxaV5WVdsSH1fSDUf5YJj1' },
];

const fail = msg => { console.error('build: ' + msg); process.exit(1); };
const read = rel => readFileSync(join(root, rel), 'utf8');
const dcFile = name => name + '.dc.html';
const isLocal = url => !/^(?:[a-z]+:)?\/\//i.test(url);
const clean = url => url.replace(/^\.\//, '');
const attr = (tag, name) => (new RegExp('\\s' + name + '\\s*=\\s*"([^"]*)"', 'i').exec(tag) || [])[1];

// vendor/ is filled by scripts/vendor.mjs. Whatever is there replaces the matching CDN; the rest stays on its CDN.
const has = rel => existsSync(join(root, rel));
const vendoredReact = REACT.every(r => has(r.local));
const FONT_CSS = 'vendor/fonts/fonts.css';
const fontsLocal = has(FONT_CSS);
const GOOGLE_FONTS = /^https:\/\/fonts\.(googleapis|gstatic)\.com/;
// The Latin face of the text font is on every page's first view: worth one preload.
const fontPreload = fontsLocal ? (/\/\* latin \*\/\s*@font-face\s*\{[^}]*'Plus Jakarta Sans'[^}]*url\(([^)]+)\)/.exec(read(FONT_CSS)) || [])[1] : null;
const gsapCdn = (/https:\/\/cdn\.jsdelivr\.net\/npm\/gsap@([\d.]+)\/dist\//.exec(read('site.js')) || []);
const gsapLocal = gsapCdn[1] && has('vendor/gsap-' + gsapCdn[1] + '/gsap.min.js') ? 'vendor/gsap-' + gsapCdn[1] + '/' : null;
const localGsap = text => gsapLocal ? text.split(gsapCdn[0]).join(gsapLocal) : text;

// Files the build rewrites before hashing them (path -> new content).
const rewritten = new Map([['site.js', Buffer.from(localGsap(read('site.js')))]]);
const hashes = new Map();
function versioned(url) {
  const [path, query] = clean(url).split('?');
  if (query !== undefined || !isLocal(path)) return url;
  if (!has(path)) fail('missing ' + path);
  if (!hashes.has(path)) hashes.set(path, createHash('sha256').update(rewritten.get(path) || readFileSync(join(root, path))).digest('hex').slice(0, 10));
  return path + '?v=' + hashes.get(path);
}

const HELMET = /[ \t]*<helmet\b[^>]*>([\s\S]*?)<\/helmet>[ \t]*\r?\n?/i;
const HEAD_ITEM = /<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>|<title\b[^>]*>[\s\S]*?<\/title>|<(?:meta|link|base)\b[^>]*>/gi;
const helmetItems = src => (localGsap((HELMET.exec(src) || [])[1] || '').match(HEAD_ITEM) || []);
const imports = src => [...new Set([...src.matchAll(/<dc-import\b[^>]*\sname="([^"{}]+)"/g)].map(m => m[1]))];

// Every component a root reaches, in the order the runtime will ask for them.
function closure(name, seen = new Set()) {
  for (const child of imports(read(dcFile(name)))) {
    if (seen.has(child)) continue;
    if (!existsSync(join(root, dcFile(child)))) fail(dcFile(name) + ' imports "' + child + '", which has no .dc.html file');
    seen.add(child);
    closure(child, seen);
  }
  return [...seen];
}

// site.js must be one module instance per page, so every import of it carries the same version.
const body = src => src.replace(/import\((['"])\.\/site\.js\1\)/g, (m, q) => 'import(' + q + './' + versioned('site.js') + q + ')');

function page(name) {
  const src = read(dcFile(name));
  if (!HELMET.test(src)) fail(dcFile(name) + ' has no <helmet>');
  const kids = closure(name);
  const srcs = [name, ...kids].map(n => read(dcFile(n)));
  const usesSiteJs = srcs.some(s => /import\((['"])\.\/site\.js\1\)/.test(s));

  const meta = [], inline = [], connect = [], preload = [], localCss = [], remoteCss = [], scripts = [];
  const seen = new Set();
  const once = key => !seen.has(key) && seen.add(key);
  const take = (tag, own) => {
    if (/^<script/i.test(tag)) {
      const s = attr(tag, 'src');
      if (!s) { if (own) inline.push(tag); return; }
      if (once('js ' + clean(s))) scripts.push(tag.replace(/(\ssrc\s*=\s*")[^"]*"/i, '$1' + versioned(s) + '"'));
      return;
    }
    if (!/^<link/i.test(tag)) { if (own) meta.push(tag); return; }
    const rel = (attr(tag, 'rel') || '').toLowerCase(), href = attr(tag, 'href') || '';
    if (rel === 'stylesheet') {
      if (fontsLocal && GOOGLE_FONTS.test(href)) { if (once('css ' + FONT_CSS)) localCss.push('<link rel="stylesheet" href="' + versioned(FONT_CSS) + '">'); return; }
      if (once('css ' + clean(href))) (isLocal(href) ? localCss : remoteCss).push(tag.replace(/(\shref\s*=\s*")[^"]*"/i, '$1' + versioned(href) + '"'));
    } else if (rel === 'preconnect' || rel === 'dns-prefetch') {
      if ((fontsLocal && GOOGLE_FONTS.test(href)) || (gsapLocal && /cdn\.jsdelivr\.net/.test(href))) return; // nothing on the first view comes from there any more
      if (once('connect ' + href)) connect.push(tag);
    } else if (rel === 'preload' || rel === 'modulepreload') {
      if (clean(href) === 'site.js') return; // added below, versioned
      if (once('preload ' + href)) preload.push(tag);
    } else if (own) meta.push(tag);
  };
  helmetItems(src).forEach(t => take(t, true));
  // A component's helmet only repeats what it needs to preview on its own. The page provides it once.
  kids.forEach(k => helmetItems(read(dcFile(k))).forEach(t => take(t, false)));

  const vendored = vendoredReact;
  if (!vendored && once('connect https://unpkg.com')) connect.push('<link rel="preconnect" href="https://unpkg.com" crossorigin="anonymous">');
  if (usesSiteJs) {
    // Every page that runs site.js pulls GSAP right after boot.
    if (!gsapLocal && once('connect https://cdn.jsdelivr.net')) connect.push('<link rel="preconnect" href="https://cdn.jsdelivr.net">');
    preload.push('<link rel="modulepreload" href="' + versioned('site.js') + '">');
  }
  if (fontPreload) preload.push('<link rel="preload" as="font" type="font/woff2" crossorigin="anonymous" href="vendor/fonts/' + fontPreload + '">');
  // Same URL the runtime builds (./ + encodeURIComponent(name) + .dc.html), so its fetch() reuses the preload.
  kids.forEach(k => preload.push('<link rel="preload" as="fetch" crossorigin="anonymous" href="./' + encodeURIComponent(k) + '.dc.html">'));

  const runtime = [
    ...REACT.map(r => vendored ? '<script src="' + versioned(r.local) + '"></script>' : '<script src="' + r.cdn + '" integrity="' + r.sri + '" crossorigin="anonymous"></script>'),
    '<script src="' + versioned('support.js') + '"></script>',
  ];
  // Order matters: the inline boot script sets the theme before anything paints; site.css comes before
  // the scripts so tokens are readable when they run; the font stylesheet comes last so a slow font
  // host can hold back the first paint but never the scripts.
  const head = ['<meta charset="utf-8">', ...meta, ...inline, ...connect, ...preload, ...localCss, ...runtime, ...scripts, ...remoteCss];
  if (!meta.some(t => /name="viewport"/i.test(t))) head.splice(1, 0, '<meta name="viewport" content="width=device-width, initial-scale=1">');

  const html = body(src).replace(HELMET, '').replace(/<head>[\s\S]*?<\/head>/i, '<head>\n' + head.join('\n') + '\n</head>');
  if (html === src || /<helmet\b/i.test(html)) fail('could not rewrite the head of ' + dcFile(name));
  return { html, kids };
}

const component = name => body(read(dcFile(name))).replace(HELMET, '');

function write(rel, content) {
  mkdirSync(dirname(join(out, rel)), { recursive: true });
  writeFileSync(join(out, rel), content);
}

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const roots = qa ? [...PAGES, ...TOOLS] : PAGES;
const components = new Set();
for (const name of roots) {
  const { html, kids } = page(name);
  write(dcFile(name), html);
  kids.forEach(k => components.add(k));
}
for (const name of components) if (!roots.includes(name)) write(dcFile(name), component(name));

// Everything a page head points at ships under its plain name; the ?v= only picks the cache entry.
for (const path of hashes.keys()) rewritten.has(path) ? write(path, rewritten.get(path)) : cpSync(join(root, path), join(out, path));
for (const f of FILES) cpSync(join(root, f), join(out, f));
for (const d of DIRS) if (existsSync(join(root, d))) cpSync(join(root, d), join(out, d), { recursive: true });

// GitHub Pages serves 404.html for unknown URLs at any depth, and a project site lives under
// /<repo>/, so the forward to the 404 page has to work out its base.
write('404.html', `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>AIUXAleem</title><meta name="robots" content="noindex"><script>(function(){var b='/';if(/\\.github\\.io$/.test(location.hostname)){var s=location.pathname.split('/')[1];if(s)b='/'+s+'/'}location.replace(b+'404.dc.html')})()</script></head><body><a href="./">Continue to AIUXAleem</a></body></html>\n`);
// Required on GitHub Pages: without it Jekyll drops folders that start with an underscore.
write('.nojekyll', '');

const count = dir => readdirSync(dir, { withFileTypes: true }).reduce((n, e) => n + (e.isDirectory() ? count(join(dir, e.name)) : 1), 0);
console.log('build: ' + count(out) + ' files in dist/ (' + roots.length + ' pages, ' + [...components].filter(c => !roots.includes(c)).length + ' components' + (qa ? ', QA tools included' : '') + '; self-hosted: ' + ([vendoredReact && 'React', gsapLocal && 'GSAP', fontsLocal && 'fonts'].filter(Boolean).join(', ') || 'nothing, all from CDNs') + ')');
