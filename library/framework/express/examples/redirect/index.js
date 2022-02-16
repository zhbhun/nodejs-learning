const express = require('express');
const app = express();

app.get('/', (req, res) => res.redirect(301, 'http://m.baidu.com'));

app.listen(5000, () => console.log('Example app listening on port 3000!'))
;
