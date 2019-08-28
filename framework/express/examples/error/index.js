const express = require('express')
const app = express()

app.get('/', (req, res) => {
  throw new Error('Unkown!');
  res.send('Hello World!');
});

app.use((req, res, next) => {
  console.log(404);
  res.status(404).send("Sorry can't find that!")
});

app.use((err, req, res, next) => {
  console.error(500, err.stack)
  res.status(500).send('Something broke!')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
