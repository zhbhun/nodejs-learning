const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 6000);
});

app.get('/close', (req, res) => {
  const begin = Date.now();
  console.log('close start: ' + begin);
  server.keepAliveTimeout = 1; // 在关闭服务后设置 keepAliveTimeout 为较小的值，避免接受新的网络连接
  server.close(error => {
    const end = Date.now();
    console.log('close end: ' + end + ' / ' + (end - begin));
    console.log(error);
  });
  res.send('closed');
});

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
