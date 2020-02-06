const express = require('express');

console.log('start - ' + process.pid);

let serverCloseTime = 0;

process.on('SIGINT', () => {
  console.log('close - ' + process.pid);
  serverCloseTime = Date.now();
  server.close(() => {
    console.log(
      'closed - ' + process.pid + ' - ' + (Date.now() - serverCloseTime)
    );
    process.exit();
  });
});

const app = express();

app.get('/', function(req, res) {
  const id = req.query.id;
  const requesTime = Date.now();
  console.log(
    `request - ${id} - ${process.pid} - ${
      serverCloseTime > 0 ? serverCloseTime - requesTime : 0
    }`
  );
  setTimeout(function() {
    console.log(`response - ${id} - ${process.pid}`);
    res.send(`${id} - ${process.pid} - ${Date.now() - requesTime}`);
  }, 6000);
});

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
