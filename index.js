const http = require('http');
const url = require('url');
const fs = require('fs/promises');

http
  .createServer(async (req, res) => {
    const q = url.parse(req.url, true);
    const filename = `.${q.pathname}${q.pathname === '/' ? 'index' : ''}.html`;

    try {
      const data = await fs.readFile(filename);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
    } catch {
      const data = await fs.readFile('./404.html');
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write(data);
    } finally {
      res.end();
    }
  })
  .listen(8080);
