#!/usr/bin/env node

const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', (number, number2) => {
  console.log(`started ${number + number2}`);
});

eventEmitter.emit('start', 23, 46);
