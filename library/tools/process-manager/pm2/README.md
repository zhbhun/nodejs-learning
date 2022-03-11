# [PM2](https://pm2.keymetrics.io)

PM2 是守护进程管理工具，管理并保证应用永久在线。

功能特性：

- 集群模式
- 热重启
- 监听重启
- 最大内存重启
- 日志管理
- 监控管理
- 可编程 API
- source map
- Docker 容器集成

- [源代码](https://github.com/Unitech/pm2)
- [文档](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)

## 安装

全局安装：

```bash
$ npm install pm2 -g
```

本地安装

```bash
$ npm install pm2 -D
```

## 用法

下面这行命令以最简单的方式启动了一个守护进程应用：

```bash
$ pm2 start app.js
```

### 基本功能

- 启动

    ```bash
    $ pm2 start app.js # The simplest way to start
    $ pm2 start app.js --name <app_name> # Specify an app name
    $ pm2 start app.js --watch # Watch and Restart app when files change
    $ pm2 start app.js --max-memory-restart <200MB> # Set memory threshold for app reload
    $ pm2 start app.js --log <log_path> # Specify log file
    $ pm2 start app.js -- arg1 arg2 arg3 # Pass extra arguments to the script
    $ pm2 start app.js --restart-delay <delay in ms> # Delay between automatic restarts
    $ pm2 start app.js --time # Prefix logs with time
    $ pm2 start echo.coffee
    $ pm2 start echo.php
    $ pm2 start echo.py
    $ pm2 start echo.sh
    $ pm2 start echo.rb
    $ pm2 start echo.pl --interpreter=perl
    ```

- 查看

    ```bash
    $ pm2 list # Display all processes status
    $ pm2 list --sort name:desc
    $ pm2 jlist # Print process list in raw JSON
    $ pm2 prettylist # Print process list in beautified JSON
    $ pm2 describe <id> # Display all informations about a specific process
    ```

    每个进程都有 id|任务标识、name|任务名称、namespace|命名空间、version|版本、mode|模式、pid|进程 ID、uptime、status|状态、cpu|CPU 占用率、mem|内存使用率、user|所属用户、watching|是否监听

    mode 分为 fork 和 clutter 两种模式。

    status 有 online、stopped、errored 这几种状态。

- 重启

    ```bash
    $ pm2 restart app_name
    ```

- 重载

    ```bash
    $ pm2 reload app_name
    ```

- 关闭

    ```bash
    $ pm2 stop app_name
    ```

- 销毁

    ```bash
    $ pm2 delete app_name
    ```

- 日志

    ```bash
    $ pm2 logs app_name
    ```

- 监控

    ```bash
    $ pm2 monit
    ```

p：app_name 可以使用 all 表示全部，id 表示特定的进程

参考文献

- [Quick Start](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [managing applications states](https://pm2.keymetrics.io/docs/usage/process-management/)

### 集群模式

```bash
# Cluster mode
pm2 start app.js -i 0        # Will start maximum processes with LB depending on available CPUs
pm2 start app.js -i max      # Same as above, but deprecated.
pm2 scale app +3             # Scales `app` up by 3 workers
pm2 scale app 2              # Scales `app` up or down to 2 workers total
```

- [Cluster Mode](https://pm2.keymetrics.io/docs/usage/cluster-mode/)

### 热重启

- [Graceful Stop/Shutdown](https://pm2.keymetrics.io/docs/usage/signals-clean-restart/)

### 监听重启

- [Auto restart apps on file change](https://pm2.keymetrics.io/docs/usage/watch-and-restart/)

### 最大内存重启

- [Max Memory Restart](https://pm2.keymetrics.io/docs/usage/process-management/)
- [Max Memory Threshold Auto Reload](https://pm2.keymetrics.io/docs/usage/memory-limit/)

### 日志管理

```bash
# Logs
pm2 logs [--raw]       # Display all processes logs in streaming
pm2 flush              # Empty all log files
pm2 reloadLogs         # Reload all logs
```

- [Log management](https://pm2.keymetrics.io/docs/usage/log-management/)

### 监控管理

- [Monitoring CPU/Memory](https://pm2.keymetrics.io/docs/usage/monitoring/)

## 进阶

### Ecosystem 配置

- [Ecosystem File](https://pm2.keymetrics.io/docs/usage/application-declaration/)
- [Environment variables](https://pm2.keymetrics.io/docs/usage/environment/)

### 开机启动

- [Startup Script Generator](https://pm2.keymetrics.io/docs/usage/startup/)

### 消息通信

```bash
pm2 sendSignal SIGUSR2 my-app # Send system signal to script
```

### 可编程 API

- [PM2 API](https://pm2.keymetrics.io/docs/usage/pm2-api/)

### Source Map

- [Source map](https://pm2.keymetrics.io/docs/usage/source-map-support/)

### Docker 容器集成

TODO

### 部署

- [Deployment](https://pm2.keymetrics.io/docs/usage/deployment/)

## 常见问题

### 如何保证热重载时不会丢失网络连接

- [如何让pm2优雅的重启,不断掉tcp ip链接](https://cnodejs.org/topic/586ee5da3ffc84e30620e30e)

### 参考文献

- [PM2 介绍](https://www.douban.com/note/314200231/)
- http://pm2.keymetrics.io/
- https://segmentfault.com/a/1190000002539204
- [关于nodejs的热重启](https://cnodejs.org/topic/555999a415447cf10909100e)
- [pm2进程管理工具使用总结](http://blog.51cto.com/7490142/1858720)
- [nodejs写后端的时候如果需要添加功能是不是只能将nodejs服务停止才行？](https://www.zhihu.com/question/29851457)
- [为什么不推荐使用 PM2 管理进程](https://juejin.im/entry/5aed72636fb9a07ab508c918)
- [egg编写入口文件，pm2启动。](https://github.com/eggjs/egg/issues/345)
- [egg.js 如何做热部署或者 egg-scripts 有没有类似pm2的0秒重启。](https://segmentfault.com/q/1010000012067376)
- [node.js cluster多进程、负载均衡和平滑重启](https://www.cnblogs.com/kenkofox/p/5431643.html)
- [Node.js cluster 踩坑小结](https://zhuanlan.zhihu.com/p/27069865)
- [如何让pm2优雅的重启,不断掉tcp ip链接](https://cnodejs.org/topic/586ee5da3ffc84e30620e30e)
- [A Complete Guide to Node.js Process Management with PM2](https://blog.appsignal.com/2022/03/09/a-complete-guide-to-nodejs-process-management-with-pm2.html)
