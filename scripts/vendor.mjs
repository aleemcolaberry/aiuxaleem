#!/usr/bin/env node
// Downloads the third-party files the site would otherwise fetch from CDNs into vendor/, so every
// request on the critical path goes to our own host. Run it again only to change a version; the
// result is committed. The build (scripts/build.mjs) uses whatever it finds in vendor/.
//
//   node scripts/vendor.mjs
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const vendor = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'vendor');

// Same versions and integrity hashes as support.js (src/cdn.ts) and site.js (GSAP).
const REACT = [
  ['react.production.min.js', 'https://unpkg.com/react@18.3.1/umd/react.production.min.js', 'DGyLxAyjq0f9SPpVevD6IgztCFlnMF6oW/XQGmfe+IsZ8TqEiDrcHkMLKI6fiB/Z'],
  ['react-dom.production.min.js', 'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js', 'gTGxhz21lVGYNMcdJOyq01Edg0jhn/c22nsx0kyqP0TxaV5WVdsSH1fSDUf5YJj1'],
];
const GSAP_VERSION = '3.13.0'; // keep in step with the CDN constant in site.js
const GSAP_BASE = 'https://cdn.jsdelivr.net/npm/gsap@' + GSAP_VERSION + '/dist/';
const GSAP = ['gsap.min.js', 'ScrollTrigger.min.js', 'SplitText.min.js', 'CustomEase.min.js'];
// Every family and weight any page asks for. Faces carry unicode-range, so a browser only downloads the subsets it renders.
const FONTS = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Noto+Kufi+Arabic:wght@700;800&display=swap';
// Google serves woff2 with unicode-range subsets only to a browser it recognises as current.
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

async function get(url, headers) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(url + ' returned ' + res.status);
  return Buffer.from(await res.arrayBuffer());
}
function save(rel, buf) {
  mkdirSync(dirname(join(vendor, rel)), { recursive: true });
  writeFileSync(join(vendor, rel), buf);
  return buf.length;
}

rmSync(vendor, { recursive: true, force: true });
let bytes = 0, files = 0;

for (const [name, url, sri] of REACT) {
  const buf = await get(url);
  if (createHash('sha384').update(buf).digest('base64') !== sri) throw new Error(name + ' does not match its integrity hash');
  bytes += save(name, buf); files++;
}
for (const name of GSAP) { bytes += save('gsap-' + GSAP_VERSION + '/' + name, await get(GSAP_BASE + name)); files++; }

let css = (await get(FONTS, { 'User-Agent': UA })).toString('utf8');
const urls = [...new Set([...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/g)].map(m => m[1]))];
if (!urls.length) throw new Error('the font stylesheet lists no woff2 files');
for (const url of urls) {
  // The gstatic path is already unique per family, version and subset: keep it as the file name.
  const name = url.replace('https://fonts.gstatic.com/s/', '').replace(/\//g, '-');
  bytes += save('fonts/' + name, await get(url)); files++;
  css = css.split(url).join(name);
}
if (/https?:\/\//.test(css)) throw new Error('the font stylesheet still points at another host');
bytes += save('fonts/fonts.css', css); files++;

console.log('vendor: ' + files + ' files, ' + Math.round(bytes / 1024) + ' KB (' + urls.length + ' font files)');
