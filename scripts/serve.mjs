#!/usr/bin/env node
// Local preview of dist/ with the same cache rules as production (see vercel.json).
//
//   node scripts/serve.mjs                  http://localhost:8000
//   node scripts/serve.mjs --port 8080
//   node scripts/serve.mjs --latency 150    wait 150 ms before each response, to see the load order on a slow link
//   node scripts/serve.mjs --dir .          serve the unbuilt source instead
import { createServer } from 'node:http';
import { createReadStream, statSync } from 'node:fs';
import { dirname, extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const arg = (name, fallback) => { const i = process.argv.indexOf('--' + name); return i > -1 ? process.argv[i + 1] : fallback; };
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', arg('dir', 'dist'));
const port = Number(arg('port', 8000)), latency = Number(arg('latency', 0));
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.md': 'text/markdown; charset=utf-8', '.txt': 'text/plain; charset=utf-8' };

createServer((req, res) => setTimeout(() => {
  const url = new URL(req.url, 'http://localhost');
  let path;
  try { path = normalize(join(root, decodeURIComponent(url.pathname))); } catch (e) { path = ''; }
  if (path !== root && !path.startsWith(root + sep)) { res.writeHead(400).end(); return; }
  let stat = null;
  try { stat = statSync(path); if (stat.isDirectory()) { path = join(path, 'index.html'); stat = statSync(path); } } catch (e) { stat = null; }
  const send = (status, file, st, cache) => {
    const etag = '"' + st.size + '-' + Math.round(st.mtimeMs) + '"';
    const headers = { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream', 'Cache-Control': cache, ETag: etag };
    if (status === 200 && req.headers['if-none-match'] === etag) { res.writeHead(304, headers).end(); return; }
    res.writeHead(status, { ...headers, 'Content-Length': st.size });
    createReadStream(file).pipe(res);
  };
  if (!stat) {
    const missing = join(root, '404.html');
    try { send(404, missing, statSync(missing), 'no-cache'); } catch (e) { res.writeHead(404).end('Not found'); }
    return;
  }
  const forever = url.searchParams.has('v') || /^\/(assets|vendor)\//.test(url.pathname);
  send(200, path, stat, forever ? 'public, max-age=31536000, immutable' : 'public, max-age=0, must-revalidate');
}, latency)).listen(port, () => console.log('serve: ' + root + ' at http://localhost:' + port + '/' + (latency ? ' (+' + latency + ' ms per request)' : '')));
