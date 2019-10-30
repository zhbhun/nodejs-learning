const domain = require('domain')
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

function normalA(request, callback) {
  callback(null, 'A');
}

function normalB(request, callback) {
  callback(null, 'B');
}

function normalC(request, callback) {
  callback(new Error('fail'));
}

function normalHandler(request, callback) {
  // Do something.
  normalA(request, function (err, data) {
    if (err) {
      callback(err);
    } else {
      // Do something
      normalB(request, function (err, data) {
        if (err) {
          callback(err);
        } else {
          // Do something
          normalC(request, function (err, data) {
            if (err) {
              callback(err);
            } else {
              // Do something
              callback(null, data);
            }
          });
        }
      });
    }
  });
}

app.get('/normal', (request, response) => {
  normalHandler(request, function (error, data) {
    if (error) {
      console.log('--> normal');
      console.log(error);
      response.status(500);
      response.end();
    } else {
      response.writeHead(200);
      response.end(data);
    }
  });
});

app.get('/timeout', (request, response) => {
  setTimeout(() => {
    throw new Error('timeout');
  }, 0);
});


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

app.get('/domain', (request, response) => {
  var d = domain.create();
  d.add(request);
  d.add(response);
  d.on('error', (error) => {
    console.log('--> domain');
    console.log(error);
    response.status(500);
    response.send('500');
    response.end();
  });
  d.run(() => {
    setTimeout(() => {
      domainHandler(request, function (data) {
        response.writeHead(200);
        response.end(data);
      });
    }, 0);
  });
});

app.use((error, request, response) => {
  console.log('--> error');
  console.log(error);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
