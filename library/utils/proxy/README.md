# 代理

## Proxy Agent

所有的网络请求都通过指定代理的 Agent 发送

- [TooTallNate/node-proxy-agent](https://github.com/TooTallNate/node-proxy-agent) - Maps proxy protocols to `http.Agent` implementations.
- [TooTallNate/node-https-proxy-agent](https://github.com/TooTallNate/node-https-proxy-agent) - An HTTP(s) proxy `http.Agent` implementation for HTTPS endpoints.
- [TooTallNate/node-http-proxy-agent](https://github.com/TooTallNate/node-http-proxy-agent) - An HTTP(s) proxy `http.Agent` implementation for HTTP endpoints.
- [TooTallNate/socks-proxy-agent](https://github.com/TooTallNate/node-socks-proxy-agent)- A SOCKS (v4/v5) proxy `http.Agent` implementation for HTTP and HTTPS
- [TooTallNate/node-pac-proxy-agent](https://github.com/TooTallNate/node-pac-proxy-agent) - A PAC file proxy `http.Agent` implementation for HTTP and HTTPS

## Reverse Proxy

反向代理中间件，将发送给指定路径的请求反向代理给目标服务器。

- [node-http-proxy](https://github.com/http-party/node-http-proxy) - node-http-proxy is an HTTP programmable proxying library that supports websockets. It is suitable for implementing components such as reverse proxies and load balancers.
- [chimurai/http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) - The one-liner node.js http-proxy middleware for connect, express and browser-sync
- [express-http-proxy](https://github.com/villadora/express-http-proxy) - Proxy middleware for express/connect
- [fastify-http-proxy](https://github.com/fastify/fastify-http-proxy) - Proxy your http requests to another server, with hooks.

## 客户端代理

客户端支持设置代理服务器

HTTP

- [proxy-from-env](https://github.com/Rob--W/proxy-from-env#readme) - A Node.js library to get the proxy URL for a given URL based on standard environment variables (http_proxy, no_proxy, ...).
- [needle](https://github.com/tomas/needle#more-advanced-proxy-support) - 
- [TooTallNate/superagent-proxy](https://github.com/TooTallNate/superagent-proxy) - `Request#proxy(uri)` superagent extension.

Socks

- [JoshGlazebrook/socks](https://github.com/JoshGlazebrook/socks/) - Fully featured SOCKS proxy client supporting SOCKSv4, SOCKSv4a, and SOCKSv5. Includes Bind and Associate functionality.

## 代理服务器

- [TooTallNate/proxy](https://github.com/TooTallNate/proxy) - An HTTP proxy written with Node.js (think Squid)
- [anyproxy](https://github.com/alibaba/anyproxy/blob/master/docs/cn/src_doc.md) - AnyProxy是一个开放式的HTTP代理服务器。
- [avwo/whistle](https://github.com/avwo/whistle) - HTTP, HTTP2, HTTPS, Websocket debugging proxy.
- [用 Node.JS 搭转发代理服务器 (Forward Proxy Server)](https://www.starlite.me/zh-Hans/Network/%E7%94%A8-Node-JS-%E6%90%AD%E8%BD%AC%E5%8F%91%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8-Forward-Proxy-Server/)
- [（原创）Node.JS实战17：开发一个正向代理服务器](https://zhuanlan.zhihu.com/p/97291270)



---

- [http-proxy-to-socks](https://github.com/oyyd/http-proxy-to-socks) - hpts(http-proxy-to-socks) is a nodejs client to convert socks proxy into http proxy.
