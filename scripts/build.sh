#!/usr/bin/env bash
# Builds the public site into dist/: the shipping files listed in DEPLOY.md,
# without the QA tools, notes and source material. No compile step, copy only.
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
out="$root/dist"

rm -rf "$out"
mkdir -p "$out"

cd "$root"
tar -cf - \
  --exclude=./dist \
  --exclude=./.git \
  --exclude=./.github \
  --exclude=./.gitignore \
  --exclude=./.gitattributes \
  --exclude=./.vercelignore \
  --exclude=./.vercel \
  --exclude=./.claude \
  --exclude=./.thumbnail \
  --exclude=./vercel.json \
  --exclude=./scripts \
  --exclude=./uploads \
  --exclude=./node_modules \
  --exclude='./*.zip' \
  --exclude='./QA Sweep.dc.html' \
  --exclude='./QA.dc.html' \
  --exclude='./QA Cell.dc.html' \
  --exclude='./A11y Audit.dc.html' \
  --exclude='./Heuristic Evaluation.dc.html' \
  --exclude='./OG Card.dc.html' \
  --exclude=./aiuxaleem.css \
  --exclude='./*.md' \
  . | tar -xf - -C "$out"

# The one note that ships: the Guide page offers it as a download.
cp "$root/component-spec-template.md" "$out/"

# GitHub Pages serves 404.html for unknown URLs at any depth, and a project site
# lives under /<repo>/, so the forward to the 404 page has to work out its base.
cat > "$out/404.html" <<'HTML'
<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>AIUXAleem</title><meta name="robots" content="noindex"><script>(function(){var b='/';if(/\.github\.io$/.test(location.hostname)){var s=location.pathname.split('/')[1];if(s)b='/'+s+'/'}location.replace(b+'404.dc.html')})()</script></head><body><a href="./">Continue to AIUXAleem</a></body></html>
HTML

# Required on GitHub Pages: without it Jekyll drops the _ds/ folder.
touch "$out/.nojekyll"

for f in index.html 404.html 404.dc.html "AIUXAleem Home.dc.html" support.js site.css site.js i18n.js cases.js image-slot.js .image-slots.state.json .nojekyll robots.txt assets/favicon.svg; do
  [ -e "$out/$f" ] || { echo "build: missing $f" >&2; exit 1; }
done
ds="$(find "$out/_ds" -name _ds_bundle.js | head -n 1)"
[ -n "$ds" ] || { echo "build: missing _ds bundle" >&2; exit 1; }

echo "build: $(find "$out" -type f | wc -l) files in dist/"
