const jsPDF = require('jspdf/dist/jspdf.node.debug');

const pdf = new jsPDF('p', 'pt', 'letter');

const html = `
<?xml version="1.0" encoding="utf-8" standalone="no"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
  "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title></title>
  <link href="../Styles/main.css" rel="stylesheet" type="text/css"/>
</head>

<body>
  <h1 class="p1">推荐序一</h1>

  <p class="ziti">我们正处于飞速发展的大数据时代。不同于以往，现如今丰富的数据信息让我们有能力更好地了解消费者、顾客和竞争对手。通过电商网站评论收集可以及时知悉顾客对于产品的看法，通过微博数据收集可以及时洞察潜在消费者的购买意向和需求，通过对手网站信息收集可以及时知晓对手的实时动态，真正做到运筹帷幄之中，决胜千里之外。</p>

  <p class="ziti">本书就是帮助你打开数据信息收集大门的钥匙！本书从最基本的Python语言讲起，完整地介绍了爬虫程序的每一个知识模块，同时附有最新案例教大家如何利用学到的知识进行实操，让不了解Python语言的人也可以在短时间内掌握爬虫程序的编写，快速成长为爬虫高手。本书条理清晰、层次分明，实用性极强。</p>

  <p class="ziti">作者唐松是一名年轻有为、经验丰富的数据分析专家。他通过这本书和读者分享多年网络爬虫和数据挖掘的经验。这本书是IT人士、企业管理人员、市场营销人员和有志于在数据分析方面有所突破的人士值得一读的好书。</p>

  <p class="you1">香港中文大学市场系教授</p>

  <p class="you1">刘建南</p>

  <p class="you1">2017年6月26日</p>
</body>
</html>
`;

// pdf.html(html, {
//   callback: function(pdf) {
//     console.log(pdf);
//   }
// });

console.log(pdf);
