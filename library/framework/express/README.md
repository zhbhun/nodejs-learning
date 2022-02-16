Express
=======

## 教程

### 运行

- [app.listen](http://expressjs.com/en/4x/api.html#app.listen)

### 配置

[Application Settings](http://expressjs.com/en/4x/api.html#app.settings.table)

- [app.disable](http://expressjs.com/en/4x/api.html#app.disable) / [app.disabled](http://expressjs.com/en/4x/api.html#app.disabled)
- [app.enable](http://expressjs.com/en/4x/api.html#app.enable) / [app.enabled](http://expressjs.com/en/4x/api.html#app.enabled)
- [app.engine](http://expressjs.com/en/4x/api.html#app.engine)
- [app.locals](http://expressjs.com/en/4x/api.html#app.locals)
- [app.set](http://expressjs.com/en/4x/api.html#app.settings.table)

### 路由

- [app.all](http://expressjs.com/en/4x/api.html#app.all)
- [app.delete](http://expressjs.com/en/4x/api.html#app.delete.method)
- [app.get](http://expressjs.com/en/4x/api.html#app.get)
- [app.METHOD](http://expressjs.com/en/4x/api.html#app.METHOD)

### 中间件

#### 自定义中间件

...

#### 内置中间件

- [express.json](http://expressjs.com/en/4x/api.html#express.json)
- [express.static](http://expressjs.com/en/4x/api.html#express.static)
- [express.Router](http://expressjs.com/en/4x/api.html#express.router)
- [express.urlencoded](http://expressjs.com/en/4x/api.html#express.urlencoded)


## 中间件

- 校验

    - [express-validator](https://github.com/ctavan/express-validator)

- 日志

    - [morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for node.js.
    - [winston](https://github.com/winstonjs/winston) - A multi-transport async logging library for node.js.

- 解析

    - [cookie-parser](https://www.npmjs.com/package/cookie-parser) - https://github.com/expressjs/cookie-parser.
    - [body-parser](https://github.com/expressjs/body-parser) - Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
    - [multer](https://github.com/expressjs/multer) - Node.js middleware for handling `multipart/form-data`.
    - [busboy](https://github.com/mscdex/busboy) - A node.js module for parsing incoming HTML form data.
    - [multiparty](https://github.com/pillarjs/multiparty) - Parse http requests with content-type multipart/form-data, also known as file uploads.

- 代理

    - [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware) - Node.js proxying made simple. Configure proxy middleware with ease for connect, express, browser-sync and many more.

- 其他

    - [serve-favicon](https://github.com/expressjs/serve-favicon)

## 模板

- https://github.com/expressjs/generator
- [Express application generator](https://expressjs.com/en/starter/generator.html)
- [hackathon-starter](https://github.com/sahat/hackathon-starter)
- [express-es6-rest-api](https://github.com/developit/express-es6-rest-api)

## 实践

- [Best practices for Express app structure](https://www.terlici.com/2014/08/25/best-practices-express-structure.html)
- [Get an isomorphic web app up and running in 5 minutes](https://hackernoon.com/get-an-isomorphic-web-app-up-and-running-in-5-minutes-72da028c15dd)
- [Best Code Components for Node.js](https://www.datree.io/blog/best-code-components-for-node.js?utm_source=social&utm_medium=fb&utm_campaign=apr23&utm_content=nodejs)

## 常见问题

- [Removing all headers from express.js](https://stackoverflow.com/questions/18740504/removing-all-headers-from-express-js)

### 重定向

- [express-urlrewrite](https://github.com/kapouer/express-urlrewrite)
- [In App redirect in expressjs using middleware](https://stackoverflow.com/questions/19079497/in-app-redirect-in-expressjs-using-middleware)


# TODO

- https://hackernoon.com/hot-reload-all-the-things-ec0fed8ab0
- https://github.com/ericclemmons/start-server-webpack-plugin
- https://www.airpair.com/node.js/posts/top-10-mistakes-node-developers-make
- https://stackoverflow.com/questions/24750395/reload-express-js-routes-changes-without-restarting-server
- [frontexpress](https://github.com/camelaissani/frontexpress)
- [How do Express.js Sessions work?](https://medium.com/dailyjs/techniques-for-decomposing-react-components-e8a1081ef5da)
