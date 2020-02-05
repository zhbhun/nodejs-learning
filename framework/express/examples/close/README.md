测试 [`server.close([callback])`](https://nodejs.org/api/http.html#http_server_close_callback)。

总结：在调用 `server.close` 方法后，server 会等待 `server.keepAliveTimeout` 设定的毫秒数（等待额外数据的接收），达到设定事件后完成最后一个网络请求响应，然后销毁 socket。

疑问：在调用 `server.close` 方法时，必须设置 `server.keepAliveTimeout` 为一个较小的值来避免在超时期间接受新的网络请求。

## 参考

- [server.close([callback])](https://nodejs.org/api/http.html#http_server_close_callback)
- [server.keepAliveTimeout](https://nodejs.org/api/http.html#http_server_keepalivetimeout)
- [解决使用 KeepAlive Agent 遇到的 ECONNRESET](https://www.yuque.com/egg/nodejs/keep-alive-agent-econnreset)
