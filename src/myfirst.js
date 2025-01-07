import http from 'http';
import url from 'url';
import fs from 'fs';
import { upperCase } from 'upper-case';

var rs = fs.createReadStream('./demofile1.html');
rs.on('open', function () {
  console.log('The file is open');
});
