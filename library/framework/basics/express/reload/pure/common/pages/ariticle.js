import ejs from 'ejs';

import ariticle from './ariticle.html';

export default () => {
  return fetch('')
  .then((data) => {
    return ejs(ariticle, data);
  });
};
