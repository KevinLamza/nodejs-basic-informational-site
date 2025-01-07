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
        // Attempt to serve custom 404.html if file is not found
        fs.readFile('./404.html', function (error404, errorPageData) {
          if (error404) {
            // If 404.html is missing, send a default error message
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('<h1>404 Not Found</h1>');
          }
          // Serve the custom 404.html page
          res.writeHead(404, { 'Content-Type': 'text/html' });
          return res.end(errorPageData);
        });
        return; // Ensure no further code runs after handling the error
      }
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

// vielleicht irgendwas mit readFileSync?
