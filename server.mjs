import {createServer} from 'node:http';
import {readFile, stat} from 'node:fs/promises';
import {resolve, extname, sep} from 'node:path';
const root = resolve(import.meta.dirname, 'dist');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.woff2':'font/woff2'};
createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const target = resolve(root, '.' + pathname + (pathname.endsWith('/') ? 'index.html' : ''));
    if (target !== root && !target.startsWith(root + sep)) {response.writeHead(403).end(); return;}
    if (!(await stat(target)).isFile()) {response.writeHead(404).end(); return;}
    response.writeHead(200, {'Content-Type':types[extname(target)] || 'application/octet-stream','Cache-Control':'no-store'});
    response.end(await readFile(target));
  } catch {response.writeHead(404).end('Not found');}
}).listen(4173, '127.0.0.1', () => console.log('Local: http://127.0.0.1:4173'));
