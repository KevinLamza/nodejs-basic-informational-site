#!/usr/bin/env node

import http from 'http';
import url from 'url';
import fs from 'fs';

http
  .createServer(function (req, res) {
    const query = url.parse(req.url, true);
    let filename = '.' + query.pathname;
    if (query.pathname === '/') {
      filename = './index.html';
    }
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-type': 'text/html' });
        // fs.readFile('./404.html', function (err, data) {
        //   if (err) {
        //     return res.end('Something went wrong');
        //   }
        //   res.write(data);
        //   return res.end();
        // });
        return res.end('404 Not Found');
      }
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

// vielleicht irgendwas mit readFileSync?
