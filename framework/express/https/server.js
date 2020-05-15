const path = require('path');
const app = require('express')();
const fs = require('fs');
const http = require('http');
const https = require('https');

const privateKey =  fs.readFileSync(
  path.resolve(__dirname, './private.key.pem'),
  'utf8'
);
const certificate = fs.readFileSync(
  path.resolve(__dirname, './private.cert.pem'),
  'utf8'
);

console.log(privateKey);
console.log(certificate);

const credentials = { key: privateKey, cert: certificate };

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);
const PORT = 8000;
const SSLPORT = 8001;

httpServer.listen(PORT, function () {
  console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
httpsServer.listen(SSLPORT, function () {
  console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

// Welcome
app.get('/', function (req, res) {
  if (req.protocol === 'https') {
    res.status(200).send('Welcome to Safety Land!');
  } else {
    res.status(200).send('Welcome!');
  }
});
