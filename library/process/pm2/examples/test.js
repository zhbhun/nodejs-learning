const fs = require('fs');
const path = require('path');
const express = require('express');

const id = Date.now(); // 服务 ID 标识
let isReloading = false; // 是否收到了 SIGINT 信号
let closeTime = 0;

log('start - ' + id);

process.on('SIGINT', () => {
  isReloading = true;

  log('SIGINT - ' + id);

  const cleanUp = () => {
    // ignore
  };

  closeTime = Date.now();
  const begin = Date.now();
  server.keepAliveTimeout = 1; // 停止 keep alive 机制，避免接受新的网络连接请求，但是不会影响已经存在的网络连接 —— 实际测试 close 之后还是有可能会接收新的网络请求
  server.close(() => {
    log('server closed - ' + id + ' - ' + (Date.now() - begin));
    cleanUp();
    process.exit();
  });
});

const app = express();

app.get('/', function(req, res) {
  const time = Date.now(); // closeTime - time 小于 0 的话，表示存在 close 之后的请求连接 —— 要怎样才能保证 close 之后不再处理请求呢？
  setTimeout(function() {
    res.send(id + ' - ' + String(isReloading) + ' - ' + (closeTime - time) + ' - y');
  }, 6000);
});

const server = app.listen(3001, function() {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

function log(message) {
  var filePath = path.resolve(__dirname, 'test.txt');
  var current = fs.readFileSync(filePath, 'utf8');
  fs.writeFileSync(
    filePath,
    current + '\n' + new Date().toISOString() + ' - ' + message
  );
}
