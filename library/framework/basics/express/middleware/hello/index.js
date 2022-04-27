const express = require('express')
const app = express()
const port = 3000

app.use('/api/base', (req, res, next) => {
  console.log('>>1', req.path, req.url, req.baseUrl, req.originalUrl)
  next()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
