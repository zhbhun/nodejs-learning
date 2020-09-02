# NPM

- [npm 模块管理器](http://javascript.ruanyifeng.com/nodejs/npm.html)
- [npm 中文文档](https://www.gitbook.com/book/chenyiqiao/documentation_for_npm/details)
- [npm 模块安装机制简介](http://www.ruanyifeng.com/blog/2016/01/npm-install.html)
- [如何使用 NPM 来管理你的 Node.js 依赖](http://www.infoq.com/cn/articles/msh-using-npm-manage-node.js-dependence)
- [8-npm-tricks-you-can-use-to-impress-your-colleagues](https://medium.com/@adiramsalem/8-npm-tricks-you-can-use-to-impress-your-colleagues-dbdae1ef5f9e)
- [如何知道 npm 模块的资源消耗？](http://cost-of-modules.herokuapp.com/)
- [通过 .npmrc 打磨你的 Node.js 开发环境](https://nodesource.com/blog/configuring-your-npmrc-for-an-optimal-node-js-environment)

## 用法

### link

- [npm link](http://javascript.ruanyifeng.com/nodejs/npm.html#toc18)

### 发布

- [如何发布 Node 模块到 NPM 社区](http://weizhifeng.net/how-to-publish-a-node-module.html)

## 配置

### 代理服务器

- [为npm设置代理](http://www.cnblogs.com/walkerwang/p/3624909.html)
- [npm 淘宝镜像配置](https://gist.github.com/52cik/c1de8926e20971f415dd)

### 切换服务

- https://github.com/Pana/nrm
- [Easy Switching Between Public and Private npm Registries](https://strongloop.com/strongblog/switch-between-configure-public-and-private-npm-registry/)

### 配置多服务

- https://github.com/npm/npm/issues/100
- [Associating a scope with a registry](https://docs.npmjs.com/misc/scope#associating-a-scope-with-a-registry)
- [Is there any way to configure multiple registries in a single npmrc file](https://stackoverflow.com/questions/32633678/is-there-any-way-to-configure-multiple-registries-in-a-single-npmrc-file)
- [Installing private npm modules](Installing private npm modules)

### 依赖

- http://semver.org/
- https://docs.npmjs.com/misc/semver
- https://docs.npmjs.com/files/package.json#dependencies
- https://docs.npmjs.com/files/package.json#devdependencies
- [npm 安装git项目的几种方式](http://blog.csdn.net/yiifaa/article/details/53784427)
- [你需要知道的几类npm依赖包管理](https://segmentfault.com/a/1190000011442391)
- https://docs.npmjs.com/files/package.json#dependencies

### 限定版本

- [How to Lock down Your Project’s Node Version Using .Nvmrc Or engines.](https://medium.com/@faith__ngetich/locking-down-a-project-to-a-specific-node-version-using-nvmrc-and-or-engines-e5fd19144245)
- [How can I specify the required Node.js version in package.json?](https://stackoverflow.com/questions/29349684/how-can-i-specify-the-required-node-js-version-in-package-json)

## NPX

1. 调用项目安装的模块
2. 避免全局安装模块
3. 使用不同版本的 node
4. 执行 GitHub 源码

参考文献

- [npx 使用教程](https://www.ruanyifeng.com/blog/2019/02/npx.html)
- [Introducing npx: an npm package runner](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
- [Speed Up Your npm Workflow With npx](https://alligator.io/workflow/npx/)

## 问题

- [Installing a local module using npm?](http://stackoverflow.com/questions/8088795/installing-a-local-module-using-npm)
- [how to specify local modules as npm package dependencies](http://stackoverflow.com/questions/15806241/how-to-specify-local-modules-as-npm-package-dependencies)
- [Local dependency in package.json](http://stackoverflow.com/questions/14381898/local-dependency-in-package-json)
- [Build modular application with npm local modules](https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc#.rlpdl9lkw)
- [INCLUDING AND EXCLUDING FILES FROM DEPLOYMENT](https://claudiajs.com/tutorials/packaging.html)
- [Update of local dependencies does not work](https://github.com/npm/npm/issues/7426)
- [npm login 输入正确的用户名和密码时仍出现 Incorrect username or password](https://segmentfault.com/q/1010000003876273)
- [使用淘宝 NodeJS 镜像加速 Electron Node-Sass 的安装速度](http://zqlu.github.io/2016/05/10/taobao-nodejs-mirror/)

### shrinkwrap 提示 `extraneous` 错误

- [npm shrinkwrap complaints about extraneous and missing packages](https://github.com/JamieMason/shrinkpack/issues/14)
- [Why does npm-shrinkwrap.json change when running npm install](https://stackoverflow.com/questions/48895076/why-does-npm-shrinkwrap-json-change-when-running-npm-install)
- [Updating a package when you’re using NPM Shrinkwrap](https://gist.github.com/alanhogan/a32889830384f4e190fa)

### 区分不同的依赖类型

- [What's the difference between dependencies, devDependencies and peerDependencies in npm package.json file?](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies)

### `gyp ERR! stack Error: `make` failed with exit code: 2`

- [gyp ERR! stack Error: `make` failed with exit code: 2](https://github.com/nodejs/node-gyp/issues/1694#issuecomment-503067241)

## 如何并发执行脚本

- [better-npm-run](https://github.com/benoror/better-npm-run)
- [npm-run-all](https://github.com/mysticatea/npm-run-all)

### 区分 `~` 和 `^`
- What's the difference between tilde(~) and caret(^) in package.json?

### 并发执行脚本
- [concurrently](https://github.com/kimmobrunfeldt/concurrently)
- [npm-run-all](https://github.com/mysticatea/npm-run-all)
- [better-npm-run](https://github.com/benoror/better-npm-run)

### 版本锁

- [package-lock.json 需要写进 .gitignore 吗？](https://www.zhihu.com/question/264560841)
- [透过 js-beautify@1.7.0 的 Bug 来看，npm 默认的 lock 机制是否重要？](https://www.zhihu.com/question/65536076)
- [为什么我不使用 shrinkwrap（lock）](https://zhuanlan.zhihu.com/p/22934066)

### npm link 导致 peerDependency 的模块找不到

- [`npm install` after `npm link` will "steal" dependencies from linked packages](https://github.com/npm/npm/issues/10343)
- [rfc: new npm link command](https://github.com/npm/rfcs/pull/3)
- [Testing npm packages before publishing](https://medium.com/m/signin)
- [You can finally "npm link" packages that contain peer dependencies!](http://www.codetunnel.io/you-can-finally-npm-link-packages-that-contain-peer-dependencies/)
- [NPM: After “npm link” module is not found](https://stackoverflow.com/questions/24550515/npm-after-npm-link-module-is-not-found)
- [你所不知道的模块调试技巧 - npm link](https://github.com/atian25/blog/issues/17)

### `nodejs “npm ERR! code SELF_SIGNED_CERT_IN_CHAIN”`

- [nodejs “npm ERR! code SELF_SIGNED_CERT_IN_CHAIN”](https://stackoverflow.com/questions/29141153/nodejs-npm-err-code-self-signed-cert-in-chain)

---

- [【原】npm 常用命令详解](https://www.cnblogs.com/PeunZhang/p/5553574.html#npm-update)
- [Install npm packages globally without sudo on macOS and Linux](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md)
