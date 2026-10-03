# AIUXAleem

Portfolio site of Mohammad Abdul Aleem, AI-first Senior Product Designer. Static files, no compile step, built on the AgentCory design system.

## Layout

| Path | What it is |
|---|---|
| `AIUXAleem Home.dc.html`, `Work`, `Case Study`, `Services`, `About`, `Content`, `Guides`, `Guide`, `404` | Public pages |
| `Site Header`, `Site Footer`, `Case Card`, `Post Card`, … `.dc.html` | Components the pages import by name (must sit next to them) |
| `support.js`, `site.css`, `site.js`, `i18n.js`, `cases.js`, `image-slot.js` | Shared runtime, styles, copy and data |
| `assets/` | Images, favicon, share image |
| `_ds/` | AgentCory design system (tokens and component bundle) |
| `QA Sweep`, `QA`, `QA Cell`, `A11y Audit`, `Heuristic Evaluation`, `OG Card` `.dc.html` | Internal tools, not published |
| `CLAUDE.md`, `DEPLOY.md`, `github.md`, other `.md` | Project rules and notes, not published |
| `scripts/build.sh` | Copies the public files into `dist/` |
| `.github/workflows/pages.yml` | Builds and publishes to GitHub Pages on every push to `main` |
| `vercel.json`, `.vercelignore` | Vercel routing, cache headers and excludes |

The file layout mirrors the Claude Design project, so pages and components stay at the root.

## Preview locally

```sh
bash scripts/build.sh
python -m http.server 8000 --directory dist
```

Open http://localhost:8000/. The pages need a web server; opening them from disk does not work.

## Deploy

- **GitHub Pages:** push to `main`. The workflow builds `dist/` and publishes it. Repository Settings → Pages → Source must be "GitHub Actions".
- **Vercel:** import the repository, framework preset "Other", no build command, output directory `.`.

Details, cache settings and performance budgets are in [DEPLOY.md](DEPLOY.md). Design and accessibility rules are in [CLAUDE.md](CLAUDE.md).
