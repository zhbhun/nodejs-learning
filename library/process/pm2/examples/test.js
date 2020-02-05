const fs = require("fs");
const path = require("path");
const express = require("express");

const id = Date.now(); // 服务 ID 标识
let isReloading = false; // 是否收到了 SIGINT 信号

log('start - ' + id);

process.on("SIGINT", () => {
  isReloading = true;

  log("SIGINT - " + id);

  const cleanUp = () => {
    // ignore
  };

  server.close(() => {
    log("server closed - " + id);
    // Stop after 10 secs
    setTimeout(() => {
      cleanUp();
      process.exit();
    }, 10000);
  });

  // Force close server after 15 secs
  setTimeout(e => {
    log("server forcing close !!! " + id);
    cleanUp();
    process.exit(1);
  }, 15000);
});

const app = express();

app.get("/", function(req, res) {
  setTimeout(function() {
    res.send(id + ' - ' + String(isReloading) + ' - x');
  }, 6000);
});

const server = app.listen(3001, function() {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

function log(message) {
  var filePath = path.resolve(__dirname, "test.txt");
  var current = fs.readFileSync(filePath, "utf8");
  fs.writeFileSync(filePath, current + "\n" + (new Date().toISOString()) + ' - ' + message);
}
