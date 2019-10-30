const b = require('./b');

let c;

setTimeout(() => {
  console.log(c)
}, 1000);

c = require('./c');
