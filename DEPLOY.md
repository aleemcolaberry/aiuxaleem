# Deploying aiuxaleem.com

The site ships from `dist/`, which `node scripts/build.mjs` builds from the source files. Never publish the repository root: the source pages load slower than the built ones and the root holds notes and QA tools.

## What the build does
The source pages stay exactly as Claude Design writes them. The build only changes how they load:
1. **Head hoisting.** Each page's `<helmet>` moves into the real `<head>`. In the source it sits in the body, so the browser runs it once while parsing and the runtime runs it again after React boots (site.css, the design-system bundle, i18n.js and image-slot.js were each requested twice). Share cards also need this: crawlers read `og:` tags from `<head>` only.
2. **React first.** React and ReactDOM are plain `<script>` tags ahead of `support.js`, so the runtime starts as soon as the page is parsed instead of waiting on a late CDN request.
3. **Component preload.** Every component a page imports (found from `<dc-import>`, nested ones included) gets `<link rel="preload" as="fetch">`, so they download with the page instead of one by one during render.
4. **Content hashes.** Shared CSS and JS are referenced as `file?v=<hash>`. They cache for a year and still update the moment the file changes.
5. **Allowlist.** Only the pages in `PAGES`, the components they import, the files their heads reference, `assets/` and a short list of on-demand files are copied. Anything new stays out until a page uses it.

## What ships
Public pages: AIUXAleem Home, Work, Case Study, Services, About, Content, Guides, Guide, 404. New pages go in `PAGES` in `scripts/build.mjs`.
Components: whatever those pages import. Nothing to list by hand.
On-demand files (`FILES` in the build): `a11y-audit.js` (only with `?audit=1`), `vitals.js` (only with `?perf=1`), `component-spec-template.md` (the Guide download), `.image-slots.state.json` (keep it as `{}`: image-slot.js fetches it on every page, and a missing file means a 404 per view), `robots.txt`, `index.html`.

## What stays out
QA Sweep, QA, QA Cell, A11y Audit, Heuristic Evaluation, OG Card (`TOOLS` in the build), Reel Card and Video Facade (only the QA page imports them), `aiuxaleem.css` (source for site.css), the unused design-system token files, every `.md` note, `docs/`, `uploads/`.
`node scripts/build.mjs --qa` adds the tools, so QA Sweep and A11y Audit can run against the built pages. Never deploy a `--qa` build.

## Hosting
- **Vercel (recommended):** import the repo. `vercel.json` sets the build command, the output directory and the cache headers. Brotli is automatic.
- **GitHub Pages:** push to `main`; `.github/workflows/pages.yml` builds and publishes `dist/`. Settings → Pages → Source must be "GitHub Actions". Gzip is automatic. Cache headers can't be set (everything is 10 minutes), so the content hashes do nothing there; prefer Vercel for speed.
- Both: add the custom domain aiuxaleem.com in the host's settings and turn on HTTPS.

## Cache rules (vercel.json, mirrored by scripts/serve.mjs)
- Any URL with `?v=`, plus `assets/*` and `vendor/*`: one year, immutable. An asset or vendor file that changes gets a new file name.
- Everything else (pages, components, `site.js` imports without a hash): `max-age=0, must-revalidate`, so a deploy shows at once.

## Preview locally
```sh
node scripts/build.mjs
node scripts/serve.mjs                # http://localhost:8000, production cache rules
node scripts/serve.mjs --latency 150  # adds 150 ms to every response, to see the load order on a slow link
```
Don't preview with `python -m http.server`: it sends no cache headers, so the browser keeps showing old files.

## Budgets (check before each release)
- First view JS on any page, Brotli sizes: React 45 KB, support.js 17 KB, `_ds_bundle.js` 32 KB, i18n.js 8 KB, site.js 4 KB, image-slot.js 19 KB where a page has images. Home adds GSAP (~50 KB). three.js loads only when the node field will actually run (not reduced motion, not low-power, after first paint).
- No request twice. In DevTools → Network, a first load of any page shows each file once.
- Images: covers 1,600 px JPEG/WebP under 120 KB; avatars at 2× their display size. No inline data-URL images.
- Fonts: Plus Jakarta Sans 400 to 800 (no italics), JetBrains Mono 400 to 600; Arabic families download only when Arabic text renders (unicode-range).
- No third-party host on the first view: Network shows only this site's origin until three.js loads on Home.
- Measure with `QA Sweep` `AIUXPerf()` or Lighthouse: LCP under 2.5 s on 4G, CLS under 0.1, no long task over 200 ms.

## Self-hosted libraries and fonts (vendor/)
React, GSAP and the four font families are served from this site, so a first visit opens one connection instead of five. `node scripts/vendor.mjs` downloads them into `vendor/` (React is checked against the integrity hashes in `support.js`); the result is committed, so builds never touch the network. Run it again only to change a version.
- The source pages still name the CDNs, because Claude Design previews them without a build. The build swaps in the local copies: Google Fonts links become `vendor/fonts/fonts.css`, the GSAP URL in `site.js` becomes `vendor/gsap-<version>/`, and preconnects to hosts that are no longer used are dropped. If a file is missing from `vendor/`, that library falls back to its CDN.
- Changing the GSAP version: update the URL in `site.js` and `GSAP_VERSION` in `scripts/vendor.mjs`, then run the vendor script. The version is in the folder name because `vendor/` is cached for a year.
- A page that needs a new font family or weight: add it to `FONTS` in `scripts/vendor.mjs` and run it, or the built page won't have it.
- The Latin face of Plus Jakarta Sans is preloaded on every page. Other faces load when text needs them (`unicode-range`).
- Still on a CDN: three.js on Home (cdn.jsdelivr.net). It is optional and loads after first paint, so it is left out of the repo.
