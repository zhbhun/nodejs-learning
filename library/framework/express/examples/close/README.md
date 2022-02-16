测试 [`server.close([callback])`](https://nodejs.org/api/http.html#http_server_close_callback)。

总结：在调用 `server.close` 方法后，server 会等待 `server.keepAliveTimeout` 设定的毫秒数（等待额外数据的接收），达到设定事件后等待完成最后一个网络请求响应，然后销毁 socket。

注意点：在调用 `server.close` 方法时，必须设置 `server.keepAliveTimeout` 为一个较小的值来避免在超时期间接受新的网络请求（由于 HTTP keep Alive 机制导致即使 close 了但是 socket 连接还没有断掉，仍然会有新的请求进来）。

## 参考

- [server.close([callback])](https://nodejs.org/api/http.html#http_server_close_callback)
- [server.keepAliveTimeout](https://nodejs.org/api/http.html#http_server_keepalivetimeout)
- [解决使用 KeepAlive Agent 遇到的 ECONNRESET](https://zhuanlan.zhihu.com/p/34147188)
- [Difference between keepAliveTimeout and timeout?](https://stackoverflow.com/questions/56606305/difference-between-keepalivetimeout-and-timeout)

    keepAliveTimeout 控制空闲 socket 的存活时长（HTTP Keep Alive 机制，即复用 TCP 连接），timeout 控制 socket 连接的响应超时时间（服务端在该连接的 timeout 时间内还没做出响应，认为超时）。修改 keepAliveTimeout 只会影响新的连接，不会影响已有的 socket 连接。
