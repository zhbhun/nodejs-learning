- [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit) - Basic rate-limiting middleware for express
- [node-rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible) - Count and limit requests by key with atomic increments in single process or distributed environment.
- [express-brute](https://github.com/AdamPflug/express-brute) - Brute-force protection middleware for express routes by rate limiting incoming requests
- [express-limiter](https://github.com/ded/express-limiter) - Rate limiting middleware for Express
- [express-slow-down](https://github.com/express-rate-limit/express-slow-down) - Slow down repeated requests; use as an alternative (or addition) to express-rate-limit

---

服务端可以对客户端 IP 地址调用接口的频率进行限制。这可以通过在服务器端实现限流措施来完成。

以下是一些常见的限流技术：

- 令牌桶算法：将一定数量的令牌放入令牌桶中，并以固定速率添加新的令牌。每当请求到达时，如果令牌桶中有可用的令牌，则可以处理请求，同时从令牌桶中移除一个令牌。否则，请求将被拒绝。这种算法可以控制请求的速率，从而保护服务免受过度使用。
- 滑动窗口算法：将请求速率视为滑动窗口中的窗口大小。每当请求到达时，将其添加到窗口中，并计算窗口中的请求数量。如果请求数超过了窗口大小，则可以拒绝请求。该算法可以保护服务免受瞬时流量峰值。
