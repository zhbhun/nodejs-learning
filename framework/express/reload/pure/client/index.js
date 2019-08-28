import ariticle from '../common/pages/ariticle';

const iframe = document.getElementsByTagName('iframe');

iframe.src = article();

if (module.hot) {
  iframe.src = article();
}
