潜在需求：大项目重启服务器耗时较长，websocket 等长连接被销毁重建。

# 技术难点
- 如何更新模块代码
- 如何使用新模块处理请求
- 如何释放老模块的资源

    - 释放旧模块
    - 释放旧模块的监听事件
    - 释放旧模块定时器的占用资源


# 解决方案
- nodemon [+ babel]

    - 优点：支持自动刷新 + 可以使用新语法
    - 缺点：需要重启进程

- webpack
    
    - 优点：支持自动刷新 + 可以使用新语法 + 支持非 JS 文件模块化
    - 缺点：需要特殊处理动态引入模块 + 增加了调试难度（ + 可能导致内存泄露？）

- [nodejs-hot-swapping](http://fex.baidu.com/blog/2015/05/nodejs-hot-swapping/)
- [node-hotswap](https://github.com/rlidwka/node-hotswap)

# 开源项目
- [pm2](https://github.com/Unitech/PM2)
- [nodemon](https://github.com/remy/nodemon/)
- [forever](https://github.com/foreverjs/forever)
- [node-supervisor](https://github.com/petruisfan/node-supervisor)
- [node-dev](https://github.com/fgnass/node-dev)
- [node-hotswap](https://github.com/rlidwka/node-hotswap)

# 对比

- https://npmcompare.com/compare/forever,node-supervisor,nodemon,pm2
- https://codeburst.io/dont-use-nodemon-there-are-better-ways-fc016b50b45e
- [使用 nodemon 或者 Supervisor 监控 Express 4.x 代码改动进行开发](https://segmentfault.com/a/1190000000603336)

# 参考文献
- [How to HMR on server side? ](https://github.com/webpack/docs/issues/45#issuecomment-149793458)
- [Webpack 做 Node.js 代码热替换, 第一步](https://segmentfault.com/a/1190000003888845)
- [用 webpack 构建 node 后端代码，使其支持 js 新特性并实现热重载](https://zhuanlan.zhihu.com/p/20782320)
- [Node.js Web应用代码热更新的另类思路](http://fex.baidu.com/blog/2015/05/nodejs-hot-swapping/)
- [需要添加一下 Node.js 模块热替换方面的机制](https://cnodejs.org/topic/5627045be570e3f6488fa40c    )
- [Backend Apps with Webpack (Part I)](http://jlongster.com/Backend-Apps-with-Webpack--Part-I)
- [Webpack for back-end?](https://stackoverflow.com/questions/37788142/webpack-for-back-end)
- [hot-node-example](https://github.com/webpack/hot-node-example)
