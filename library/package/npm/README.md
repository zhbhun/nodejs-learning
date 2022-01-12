# NPM

- [npm 模块管理器](http://javascript.ruanyifeng.com/nodejs/npm.html)
- [npm 中文文档](https://www.gitbook.com/book/chenyiqiao/documentation_for_npm/details)
- [npm 模块安装机制简介](http://www.ruanyifeng.com/blog/2016/01/npm-install.html)
- [如何使用 NPM 来管理你的 Node.js 依赖](http://www.infoq.com/cn/articles/msh-using-npm-manage-node.js-dependence)
- [8-npm-tricks-you-can-use-to-impress-your-colleagues](https://medium.com/@adiramsalem/8-npm-tricks-you-can-use-to-impress-your-colleagues-dbdae1ef5f9e)
- [如何知道 npm 模块的资源消耗？](http://cost-of-modules.herokuapp.com/)
- [通过 .npmrc 打磨你的 Node.js 开发环境](https://nodesource.com/blog/configuring-your-npmrc-for-an-optimal-node-js-environment)

## 用法

### create / init

- [你不知道的 npm init](https://zhuanlan.zhihu.com/p/45151808)
- [npm create 命令](https://juejin.cn/post/6844903909958352909)

### link

- [npm link](http://javascript.ruanyifeng.com/nodejs/npm.html#toc18)

### 发布

- [如何发布 Node 模块到 NPM 社区](http://weizhifeng.net/how-to-publish-a-node-module.html)

### NPX

1. 调用项目安装的模块

    ```bash
    # node-modules/.bin/mocha --version
    npx mocha --version
    ```

2. 避免全局安装模块

    ```bash
     npx create-react-app my-react-app
    ```

3. 使用不同版本的 node

    ```bash
    npx node@0.12.8 -v
    npx -p node@0.12.8 node -v
    npx -p lolcatjs -p cowsay 'cowsay hello'
    npx -p lolcatjs -p cowsay -c 'cowsay hello | lolcatjs'
    ```

4. 执行 GitHub 源码

    ```bash
    npx github:piuccio/cowsay hello
    ```

参考文献

- https://github.com/npm/npx#readme
- [npx 使用教程](https://www.ruanyifeng.com/blog/2019/02/npx.html)
- [Introducing npx: an npm package runner](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
- [Speed Up Your npm Workflow With npx](https://alligator.io/workflow/npx/)
- [前端利器之 npx 使用纪要](https://www.jeffjade.com/2019/12/11/160-how-to-use-npm-npx-tutorial/)

### 版本语义化

- [npm semver calculator](https://semver.npmjs.com/)
- [About semantic versioning](https://docs.npmjs.com/about-semantic-versioning)

### 版本锁

- [如何正确使用package-lock.json](https://blog.lishunyang.com/2021/01/how-to-use-package-lock-correctly.html)

#### 是否要使用版本锁？

- [透过 js-beautify@1.7.0 的 Bug 来看，npm 默认的 lock 机制是否重要？](https://www.zhihu.com/question/65536076)
- [package-lock.json 需要写进 .gitignore 吗？](https://www.zhihu.com/question/264560841)
- [npm install 生成的package-lock.json是什么文件？有什么用？](https://www.zhihu.com/question/62331583)
- [为什么我不使用 shrinkwrap（lock）](https://zhuanlan.zhihu.com/p/22934066)

#### 如何解决版本锁冲突问题？

冲突原因

- 不同分支增加了新的包，在合并时会产生冲突
- 不同的开发者使用了不同的系统，不同的系统之间使用了不同的可选依赖
- 使用了不稳定的镜像源地址，导致按照原 package-lock.json 中的 resolved 信息无法下载安装，npm 会 fallback 到其他源继续尝试安装相同版本，安装完毕后，npm 会更新 package-lock，将 resolved 更新成最新安装的地址。

    参考 [npm 源问题](https://cnodejs.org/topic/61405b76fe0c5109a7aea0ed)

解决办法

1. 先手动解 package.json 的冲突
2. 然后运行 `npm install --package-lock-only`，让 npm 自动帮你解冲突。

参考文献

- [Resolving lockfile conflicts](https://docs.npmjs.com/cli/v6/configuring-npm/package-locks#resolving-lockfile-conflicts)
- [npm-merge-driver](https://github.com/npm/npm-merge-driver)
- [npm "resolved"-fields in package-lock.json change constantly with JFrog artifactory](https://stackoverflow.com/questions/58030867/npm-resolved-fields-in-package-lock-json-change-constantly-with-jfrog-artifact)
- [package-lock.json and optional packages](https://github.com/npm/npm/issues/17722)

## 配置

### 代理服务器

- [为npm设置代理](http://www.cnblogs.com/walkerwang/p/3624909.html)
- [npm 淘宝镜像配置](https://gist.github.com/52cik/c1de8926e20971f415dd)

ps：如果遇到淘宝镜像不同步的问题，可以访问 https://npmmirror.com/，找到对应的包进行手动同步。

### 切换服务

- https://github.com/Pana/nrm
- [Easy Switching Between Public and Private npm Registries](https://strongloop.com/strongblog/switch-between-configure-public-and-private-npm-registry/)

### 配置多服务

- https://github.com/npm/npm/issues/100
- [Associating a scope with a registry](https://docs.npmjs.com/misc/scope#associating-a-scope-with-a-registry)
- [Is there any way to configure multiple registries in a single npmrc file](https://stackoverflow.com/questions/32633678/is-there-any-way-to-configure-multiple-registries-in-a-single-npmrc-file)
- [Installing private npm modules](Installing private npm modules)

### 依赖类型

- http://semver.org/
- https://docs.npmjs.com/misc/semver
- https://docs.npmjs.com/files/package.json#dependencies
- https://docs.npmjs.com/files/package.json#devdependencies
- [npm 安装git项目的几种方式](http://blog.csdn.net/yiifaa/article/details/53784427)
- [你需要知道的几类npm依赖包管理](https://segmentfault.com/a/1190000011442391)
- https://docs.npmjs.com/files/package.json#dependencies

### 版本锁定

- [Why does “npm install” rewrite package-lock.json?](https://stackoverflow.com/questions/45022048/why-does-npm-install-rewrite-package-lock-json)
- [Introducing `npm ci` for faster, more reliable builds](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)
- [Clarify documentation for package-lock.json behaviour](https://github.com/npm/npm/issues/18103)
- [npm依赖版本变动引发的惨案](https://segmentfault.com/a/1190000024520174)
- [npm ci命令](https://www.zhuyuntao.cn/npm-ci%E5%91%BD%E4%BB%A4)
- [How to Lock down Your Project’s Node Version Using .Nvmrc Or engines.](https://medium.com/@faith__ngetich/locking-down-a-project-to-a-specific-node-version-using-nvmrc-and-or-engines-e5fd19144245)
- [How can I specify the required Node.js version in package.json?](https://stackoverflow.com/questions/29349684/how-can-i-specify-the-required-node-js-version-in-package-json)

#### 为什么需要版本锁定

npm 遵循[版本语义化规范](https://semver.org/lang/zh-CN/)，`npm install` 时会按照 package.json 的 dependencies 配置安装依赖。

- 符号^：表示主版本固定的情况下，可更新最新版。例如：vuex: "^3.1.3"，3.1.3 及其以上的 3.x.x 都是满足的。
- 符号~：表示次版本固定的情况下，可更新最新版。如：vuex: "~3.1.3"，3.1.3 及其以上的 3.1.x 都是满足的。
- 无符号：无符号表示固定版本号，例如：vuex: "3.1.3"，此时一定是安装 3.1.3 版本。

在开源世界里，通常来说主版本号不变，代码库都是应该能够向后兼容的，当有不兼容变更出现时需要升级主版本号。而次版本号的变更表示能够向后兼容，但是增加了新的功能，小版本号的变更用于问题修复。所以，npm 在遵循版本语义化规范下会自动帮我们安装对应符合规则的最新版本。但现实是很多开源库的开发者并没有严格遵守这个发布原则，导致应用出现 bug。

案例：A 新建了一个项目，安装了依赖 a，此时 a 的最新版本是 2.1.0（^2.1.0），该版本与代码兼容，没有出现 bug。后来 B 克隆了 A 的项目，在安装依赖时 a 的最新版本是 2.2.0，那么根据语义 npm 会去安装 2.2.0 的版本，但 2.2.0 版本的 API 可能发生了改动，导致代码出现 bug。 

思考：为什么不直接写死版本号呢？

#### npm 版本锁定方案变更历史

1. npm5.0 之前可以通过 npmshrinkwrap 实现。通过运行 npm shrinkwrap，会在当前目录下生成一个 npm-shrinkwrap.json 文件，里面包含了通过当前 node_modules 计算出的模块的依赖树及版本。只要目录下有 npm-shrinkwrap.json ，则运行 npm install 的时候会优先使用 npm-shrinkwrap.json 进行安装，没有则使用 package.json 进行安装；
2. 在 npm 5.0 之后，npm 自带了 package-lock.json 文件，通过 npm 安装依赖，每当 node_modules 目录或者 package.json 发生变化时就会生成或者更新这个文件。
3. 在 npm 5.0.x 版本，不管 package.json 中依赖是否有更新，npm i 都会根据 package-lock.json 下载，这导致 pacakge.json 更新了 package-lock.json 不会同步更新，参考 [package-lock.json file not updated after package.json file is changed](https://github.com/npm/npm/issues/16866)。
3. 在 npm 5.1.0 版本后，当 package.json 中的依赖项有新版本时，npm install 会无视 package-lock.json 去下载新版本的依赖项并且更新 package-lock.json，这又导致 package-lock.json 失效，参考 [why is package-lock being ignored?](https://github.com/npm/npm/issues/17979)。
4. 在 npm 5.4.2 版本后，如果只有一个 package.json 文件，运行 npm i 会根据它生成一个 package-lock.json 文件，这个文件相当于本次 install 的一个快照，它不仅记录了 package.json 指明的直接依赖的版本，也记录了间接依赖的版本。如果 package.json 的 semver-range version 和 package-lock.json 中版本兼容，即使此时 package.json 中有新的版本，执行 npm i 也还是会根据package-lock.json 下载。如果手动修改了 package.json 的 version ranges，且和 package-lock.json 中版本不兼容，那么执行 npm i 时 package-lock.json 将会更新到兼容 package.json 的版本。
5. 在 npm 5.7.0 版本后，npm 提供了一个新的命令 `npm ci`，该命令完全按照 package-lock.json 的记录进行按照，这个命令通常用于自动化测试和持续集成。

    目前 npm 还是会存在不更改 package.json 的情况下，会出现 package-lock.json 变动的情况，所以持续集成环境建议使用 `npm ci`。

    - [package-lock.json changes from one `npm install` to the next](https://github.com/npm/npm/issues/20926)
    - [[BUG] when using npm install, package.json has no change, but package-lock.json automatically changed ](https://github.com/npm/cli/issues/2351)

#### 最佳实践

- 升级 npm 至 npm 5.7.0 版本以上，尽量使用最新版
- 开启版本所功能，在业务项目中需要提交版本锁文件（package-lock.json）
- 持续集成环境使用 `npm ci` 按照依赖

### 缓存应用

```bash
npm ci --cache .npm --prefer-offline
```

## 实践

### 检查更新依赖

- [pkg-updater](https://github.com/KohPoll/pkg-updater) - A simple updater which use in your cli tool.

    [Introducing Package Updater](https://medium.com/@PackageUpdater/introducing-package-updater-d334f2415bd)

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

### 修改第三方依赖包

- https://github.com/ds300/patch-package
- [使用“黑魔法”优雅的修改第三方依赖包](https://fe.zhuanzhuan.com/detail/616013d2abc425a40c9197af)

### 如何并发执行脚本

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
