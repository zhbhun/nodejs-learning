import express from 'express';

import ariticle from '../common/pages/ariticle';

const app = express();


app.get('/article', (req, res) => {
  ariticle().then((html) => res.send(html));
});
