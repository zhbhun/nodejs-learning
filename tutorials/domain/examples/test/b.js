const d = require('domain').create();
d.on('error', (error) => {
  console.log(error);
});
d.enter();
