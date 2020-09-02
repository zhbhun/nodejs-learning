const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
const port = 3000

app.use(cookieParser())

app.get('/', (req, res) => {
  res.send(JSON.stringify(req.cookies));
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
