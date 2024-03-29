# [Yarn](https://yarnpkg.com/)

- [yarn config](https://yarnpkg.com/en/docs/cli/config/)

## 变更

yarn2

- [Yarn 2 使用体验](https://ocavue.com/yarn-2-first-impression-zh/)
- [Yarn 2 的安装与使用](https://liuwenzhuang.github.io/2020/08/07/Yarn2-install-and-usage.html)
- [初识 yarn2](https://segmentfault.com/a/1190000023215360)

## 用法

### [Workspace(工作区间)](https://classic.yarnpkg.com/en/docs/workspaces/)

- 搭建环境

    根目录下 `package.json` 配置如下所示，各个 package 放置在 packages 目录下。

    ```json
    {
      "private": true,
      "workspaces": [
        "packages/*"
      ]
    }
    ```

    在根目录下运行下面的命令，yarn 会自动将 package 不冲突的依赖放置在根目录下安装，如果遇到 package 相互引用且能够兼容，会以 link 的方式实现，否则从 npm 下载对应版本的模块。

    ```sh
    $ yarn install
    ```

    ps：如果遇到两个 package 的公同依赖版本冲突问题，优先在根目录安装低版本（？）的第三方依赖，版本高的在 package 目录下安装。

    总结：公共依赖、相互依赖、冲突依赖。

- 运行脚本：

    - 运行所有 package 的脚本：`yarn workspaces run xxx`
    - 运行某个 package 的脚本：`yarn workspace xxx run yyy`

    ps：workspaces 表示在所有 pacakge 下执行某个 yarn 命令，workspace 制定某个 pakcage 执行某个 yarn 命令

用法

- 清理环境：yarn workspaces run clean

    ps：执行所有 package 的 clean 操作

- 安装/删除依赖

    - 给所有 package 安装依赖：`yarn workspaces add lodash` / `yarn workspaces remove lodash`
    - 给 package 安装相互依赖：`yarn workspace package1 add package2` / `yarn workspace package1 remove package2`
    - 给 root 安装依赖（一般的公用的开发工具都是安装在 root 里）：`yarn add -W -D typescript` / `yarn remove -W -D typescript`

- 项目构建：yarn 不支持按照依赖顺序依次构建各个 package，可以考虑使用 lerna 实现 —— `lerna run --stream --sort build`
- 项目测试：同上
- 版本升级与发布：规范提交（ Conventional commit）=》条件校验（是否存在未提交代码、是否在主分支）=》升级版本（规范提交记录 + 版本语义化规则）=》变更日志=》Git Tag=》Git Push=》NPM Publish

    ps：yarn 不支持自动化的版本升级命令，需要借助 lerna 实现

总结：yarn 对比 lerna 只提供了多 package 的依赖管理和脚本运行，在一些特定领域还是需要借助 lerna 去完成，例如：项目构建和版本升级等。

问题

- nohoist

    - [nohoist in Workspaces](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/)

参考文献

- [Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
- [基于lerna和yarn workspace的monorepo工作流](https://zhuanlan.zhihu.com/p/71385053)

    [hardfist/monorepo-starter](https://github.com/hardfist/monorepo-starter)

- [如何管理前端项目中的复杂依赖关系](https://zhuanlan.zhihu.com/p/53112563)
- [使用Lerna & Yarn Workspaces 构建mono-repo项目](https://zhuanlan.zhihu.com/p/108118011)
- [【译】配置 Monorepo 的几种工具 lerna、npm、yarn 及其性能对比](https://zhuanlan.zhihu.com/p/350317373)
- [工程化:基于yarn和lerna的workspace工作流](https://blog.staleclosure.com/monorepo-yarn-workspace/)

### pnp

- [Plug'n'Play](https://yarnpkg.com/features/pnp)
- [Yarn 的 Plug'n'Play 特性](https://loveky.github.io/2019/02/11/yarn-pnp/)
- [Yarn Plug'n'Play可否助你脱离node_modules苦海?](https://juejin.cn/post/6844903814038831118)

## 问题

### 安装了重复依赖的问题

- 问题描述：在升级项目某个第三方模块的版本时，如果另外一个第三方模块也依赖该模块，这时候可能会出现该第三方模块安装多个版本的现象（即使这些版本是相互兼容的）
- 问题原因：yang v1 的 bug，参考 [Yarn upgrade creates duplicate dependency resolution](https://github.com/yarnpkg/yarn/issues/3967)
- 解决方案

    1. 手动删除 yarn.lock 里相关模块的版本锁，然后重新安装依赖
    2. 等待 yarn v2 发布

## 配置

### 缓存设置


- 修改缓存路径

    ```bash
    # 全局配置
    yarn config set cache-folder <path>
    # flag
    yarn <command> --cache-folder <path>
    # 环境变量
    YARN_CACHE_FOLDER=<path> yarn <command>
    # npmrc 配置
    # .npmrc > cache=<path>
    ```

    参考 [Change the cache path for yarn](https://classic.yarnpkg.com/en/docs/cli/cache#toc-change-the-cache-path-for-yarn)

### 版本锁定

- [What is the closest to `npm ci` in yarn](https://stackoverflow.com/questions/58482655/what-is-the-closest-to-npm-ci-in-yarn)
