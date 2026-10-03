# AIUXAleem

Portfolio site of Mohammad Abdul Aleem, AI-first Senior Product Designer. Static files built on the AgentCory design system. A dependency-free Node script turns the source pages into the fast-loading `dist/` that ships.

## Layout

| Path | What it is |
|---|---|
| `AIUXAleem Home.dc.html`, `Work`, `Case Study`, `Services`, `About`, `Content`, `Guides`, `Guide`, `404` | Public pages |
| `Site Header`, `Site Footer`, `Case Card`, `Post Card`, … `.dc.html` | Components the pages import by name |
| `support.js`, `site.css`, `site.js`, `i18n.js`, `cases.js`, `image-slot.js` | Shared runtime, styles, copy and data |
| `assets/` | Images, favicon, share image |
| `_ds/` | AgentCory design system (tokens and component bundle) |
| `QA Sweep`, `QA`, `QA Cell`, `A11y Audit`, `Heuristic Evaluation`, `OG Card` `.dc.html` | Internal tools, not published |
| `scripts/build.mjs` | Builds `dist/`: the only thing that is ever deployed |
| `scripts/serve.mjs` | Local preview of `dist/` with production cache rules |
| `vendor/`, `scripts/vendor.mjs` | Self-hosted React, GSAP and fonts, and the script that downloads them |
| `docs/` | Design briefs and audits, not published |
| `CLAUDE.md`, `DEPLOY.md`, `github.md` | Project rules, deploy notes, repo sync log |
| `.github/workflows/pages.yml`, `vercel.json` | GitHub Pages and Vercel deploys; both run the build |

Pages and components stay together at the root on purpose: the runtime loads a component from `./<Name>.dc.html` next to the page, and the layout mirrors the Claude Design project. The build is what keeps tools and notes out of the public site.

## Preview locally

```sh
node scripts/build.mjs
node scripts/serve.mjs
```

Open http://localhost:8000/. Needs Node 18 or newer, nothing to install.

## Deploy

- **Vercel:** import the repository. `vercel.json` has the build command and output directory.
- **GitHub Pages:** push to `main`. Repository Settings → Pages → Source must be "GitHub Actions".

What the build changes, cache rules and performance budgets are in [DEPLOY.md](DEPLOY.md). Design and accessibility rules are in [CLAUDE.md](CLAUDE.md).
