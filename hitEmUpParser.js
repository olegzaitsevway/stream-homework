const fs = require('fs');
const split = require('split');
const through = require('through2');

const input = './hw.log';
const output = './parsed.log';

fs.createReadStream(input)
  .pipe(split())
  .pipe(through(function (el, _, next) {
    if (el.includes('JavaScript')) {
      this.push(el);
    }
    next();
  }))
  .pipe(fs.createWriteStream(output));
