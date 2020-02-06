## 测试热重载

- pm2 start test.js -i 2 -k 15000
- pm2 reload test
- pm2 stop test
- pm2 delete test

原理：pm2 reload 时会启动一个新的 process，然后向其中一个的旧 process 发送 SIGINT 信号，通知其释放资源和关闭进程（如果超出了 pm2 的设定时间，那么强制关闭）。在关闭一个旧 process 后，再重复该流程依次创建关闭所有旧 process，并同时创建新的 process。

问题：process 收到 SIGINT 时，调用 nodejs 提供的 server.close，虽然可以保证现有连接能够正常响应，但是仍然有可能再 close 之后接收到新的网络请求，然后导致超出 pm2 设定的超时时间，强制杀掉进程，导致网络请求失败。

## 测试日志

- pm2 start log.js -l log.txt -o log.out.txt -e log.error.txt --time --log-date-format "YYYY-MM-DD HH:mm:ss Z"
