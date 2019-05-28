const express = require('express')
const app = express()
const port = 3002

app.set('trust proxy', false);

app.get('/', (req, res) => res.send('Hello World!' + req.ip))

app.get('/api', (req, res) => res.send('Hello World!' + req.ip + '|' + req.headers['x-forwarded-for'] + '|' + (req.connection && req.connection.remoteAddress) + '|' + (req.socket && req.socket.remoteAddress) + '|' + (req.connection && req.connection.socket && req.connection.socket.remoteAddress)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
