const fs = require('fs');
const split = require('split');
const through = require('through2');

const file = './hw.log';

fs.createReadStream(file)
  .pipe(split())
  .pipe(through(function (el, _, next) {
    if(el.includes('JavaScript')) {
      this.push(el);
    }
    next();
  }))
  .pipe(fs.createWriteStream('./parsed.log'));
