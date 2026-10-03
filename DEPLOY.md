# Deploying aiuxaleem.com

## What ships
Public pages: AIUXAleem Home, Work, Case Study, Services, About, Content, Guides, Guide, 404 (`.dc.html`), plus the child components they import (Site Header, Site Footer, Case Card, Post Card, Bento Tile, Email Copy, Section Nav, Metric Tile, Step Row, Pull Quote, Service Link Card, Reel Card, Video Facade).
Shared files: `support.js`, `site.css`, `site.js`, `i18n.js`, `cases.js`, `image-slot.js`, `a11y-audit.js` (only loaded with `?audit=1`), `vitals.js` (only with `?perf=1`), `component-spec-template.md` (the Guide download), `.image-slots.state.json` (keep it as `{}`: image-slot.js fetches it on every page, and a missing file means a 404 per view), `robots.txt`, `assets/`, `_ds/`.

## Keep out of the public build
QA Sweep, QA, QA Cell, A11y Audit, Heuristic Evaluation, OG Card (export artboard), `aiuxaleem.css` (source for site.css), `CLAUDE.md`, `github.md`, `*.md` briefs and audits, `uploads/`. `robots.txt` already disallows the tools if they do ship.

## Hosting: Vercel (recommended) or GitHub Pages
Both serve the project as static files, no build step.
- **Vercel:** import the repo, framework preset "Other", no build command, output directory `.`. `vercel.json` sends `/` to the Home page and sets cache headers; `.vercelignore` keeps the QA tools, uploads and notes out. Brotli is automatic.
- **GitHub Pages:** Settings → Pages → deploy from branch, root folder. `.nojekyll` is required (without it Jekyll drops the `_ds/` folder and every page breaks). `index.html` forwards to the Home page, `404.html` to the 404 page. Gzip is automatic; cache headers can't be set (10 minutes), so prefer Vercel for speed. Delete `uploads/` and the QA files from the branch you publish.
- Both: add the custom domain aiuxaleem.com in the host's settings and turn on HTTPS.

## Server settings that matter most
- Brotli or gzip on `.js`, `.css`, `.html`, `.json`. `_ds_bundle.js` is 546 KB raw and roughly 90 KB compressed; this is the single biggest win.
- Cache: `assets/*`, `_ds/*` and the CDN libraries for a year (`Cache-Control: public, max-age=31536000, immutable`), renaming a file when it changes. HTML, `site.css`, `site.js`, `i18n.js`, `cases.js`: `no-cache` (revalidate) so updates show at once.
- HTTP/2 or HTTP/3, so the many small component files load in parallel.
- Serve `404.dc.html` for unknown URLs with status 404.

## Budgets (check before each release)
- First view JS on any page except Home: support.js + _ds_bundle.js + site.js + i18n.js. Home adds GSAP (~80 KB). three.js (257 KB) loads only when the node field will actually run (not reduced motion, not low-power, after first paint).
- Images: covers 1,600 px JPEG/WebP under 120 KB; avatars at 2× their display size. No inline data-URL images.
- Fonts: Plus Jakarta Sans 400 to 800 (no italics), JetBrains Mono 400 to 600; Arabic families download only when Arabic text renders (Google Fonts unicode-range).
- Measure with `QA Sweep` `AIUXPerf()` or Lighthouse: LCP under 2.5 s on 4G, CLS under 0.1, no long task over 200 ms.
