const child_process = require('child_process');
const p = child_process.fork('child.js', ['a', 'b'], {});
console.log('child pid:', p.pid);

p.on('exit', code => {
  console.log('exit:', code);
});
p.on('message', m => {
  console.log('message from child: ', m);
});
p.send('send from parent');
