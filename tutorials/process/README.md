# 进程

- 线程是程序执行的最小单元，进程是任务调度的最小单元；
- 一个进程由一个或多个线程组成（至少一个），线程间可以共享进程的内存空间，进程间互相独立（有各自的内存空间）；
- 操作系统使用 CPU 时间分片来调度进程、线程的执行，从而实现多任务；
- 线程间的切换比进程间切换开销小；

## [Process](https://nodejs.org/dist/latest-v12.x/docs/api/process.html)

### 进程信息

- 命令行参数

    - `process.argv`：命令行参数数组
    - `process.execPath`：node 程序运行的绝对路径
    - `process.argv0`：命令行首个参数，通常是指 nodejs 程序所在路径


## 参考文献

- [Node.js进程通信模块child_process](http://blog.fens.me/nodejs-child-process/)
- [你可能想知道的 Node 子进程模块](https://segmentfault.com/a/1190000005004946)
- [Node.js cluster 踩坑小结](https://zhuanlan.zhihu.com/p/27069865)
- [NodeJS在cluster模式下内存超限重启](http://yunlaiwu.github.io/blog/2016/12/21/cluster-memory/)
- http://www.alloyteam.com/2015/08/nodejs-cluster-tutorial/
