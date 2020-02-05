const express = require('express');
const app = express();

console.log('starting');

app.get('/', function (req, res) {
  console.log('/');
  res.send(String(Date.now()));
});

app.get('/404', function (req, res) {
  console.error('404');
  res.send(String(Date.now()));
});

const server = app.listen(3000, function () {
  console.log('started');

  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
