const domain = require('domain');

function domainA(request, callback) {
  callback('A');
}

function domainB(request, callback) {
  callback('B');
}

function domainC(request, callback) {
  throw new Error('fail');
}

function domainHandler(request, callback) {
  // Do something.
  domainA(request, function (data) {
    // Do something
    domainB(request, function (data) {
      // Do something
      domainC(request, function (data) {
        // Do something
        callback(data);
      });
    });
  });
}

var request = {};
var response = {
  writeHead: (status) => console.log(status),
  end: () => console.log('end')
}
var d = domain.create();
d.on('error', function (error) {
  console.log('--> domain');
  console.log(error);
  response.writeHead(500);
  response.end();
});
d.run(function () {
  domainHandler(request, function (data) {
    response.writeHead(200);
    response.end(data);
  });
});
