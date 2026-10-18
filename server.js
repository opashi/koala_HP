const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};
const port = Number(process.env.PORT || 3000);

http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    res.writeHead(400).end('Bad request');
    return;
  }
  const file = path.resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
  const extension = path.extname(file);
  if (!file.startsWith(root + path.sep) || !types[extension] || file.endsWith(`${path.sep}server.js`)) {
    res.writeHead(404).end('Not found');
    return;
  }
  fs.readFile(file, (error, content) => {
    if (error) {
      res.writeHead(error.code === 'ENOENT' || error.code === 'EISDIR' ? 404 : 500).end('Unable to load page');
      return;
    }
    res.writeHead(200, { 'Content-Type': types[extension], 'X-Content-Type-Options': 'nosniff' });
    res.end(content);
  });
}).listen(port, '127.0.0.1', () => {
  console.log(`Koala website: http://localhost:${port}`);
});
