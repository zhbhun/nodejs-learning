var path = require('path');
var child = require('child_process');
var du = child.exec('du -sh ' + path.resolve(__dirname, '..'));
du.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});
du.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});
du.on('exit', function (code) {
  console.log('child process exited with code ' + code);
});
