const express = require('express');
const app = express();

app.get('/', function (req, res) {
  setTimeout(function () {
    res.send('e: ' + Date.now());
  }, 6000);
});

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
