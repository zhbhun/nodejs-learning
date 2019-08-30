const path = require('path')
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res, next) => res.send('Hello World!'))

const file = express.static(__dirname);

// app.get('/static/*', (req, res, next) => {
//   console.log('xxx');
//   file(req, res, next);
// })

// app.use('/static/*', (req, res, next) => {
//   console.log('xxx');
//   file(req, res, next);
// })


// app.use('/static', file)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
