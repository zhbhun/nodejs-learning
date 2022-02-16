# [Browsersync](https://browsersync.io)

- [源码仓库](https://github.com/BrowserSync/browser-sync)
- [Twitter](https://twitter.com/browsersync)
- [Community](https://browsersync.herokuapp.com)
- [Document](https://browsersync.io/docs)
- [Recipes](https://github.com/Browsersync/recipes)

功能特性：

- 跨平台
- 开源免费
- 兼容其他构建工具
- 网络限速
- 交互同步
- 文件同步
- UI 或者命令行控制
- 同步定制
- 历史记录

## [安装](https://browsersync.io/docs#installation)

```bash
$ npm install -g browser-sync
$ browser-sync --help
```

- [示例1](./examples/server)：监听所有 CSS 文件的变化，再 CSS 变化时更新连接的所有浏览器；
- [示例2](./examples/proxy)：如果你的网页运行在其他服务器上，可以使用代理模式。

## [CLI](https://browsersync.io/docs/command-line)

- 配置文件

    ` browser-sync init` 初始化一个 Browsersync 配置文件

- 脚手架

    - `browser-sync recipe ls`：查看可用的脚手架模板
    - `browser-sync recipe <name>`：基于指定模板初始化项目
    - `browser-sync recipe <name> -o <path>`：项目输出到指定目录

- 热加载

    - `browser-sync -w`：从当前路径启动一个服务，并监听所有文件的变化，与下列命令等价

        - `browser-sync start --server ./ --files ./`
        - `browser-sync start -s ./ -f ./`

    - `browser-sync 'http://mylocal.dev' 'public' -w`：代理指定服务器，并监听 public 目录下的所有文件变化，与下列命令等价

        `browser-sync start --proxy 'mylocal.dev' --files 'public`
    
    - `browser-sync start --config 'conf/browser-sync.js'`：基于指定配置文件启动 Browsersync

        `browser-sync start --config 'conf/browser-sync.js' --port 4000`

## [API](https://browsersync.io/docs/options#option-ui)

TODO

## [配置](https://browsersync.io/docs/recipes)

TODO

## 集成

- https://browsersync.io/docs/gulp
- https://browsersync.io/docs/grunt

## [脚手架](https://browsersync.io/docs/recipes)

TODO

## 插件

- [browser sync plugin](https://www.npmjs.com/search?q=browser%20sync%20plugin)

## 参考文献

- [BrowserSync — 你值得拥有的前端同步测试工具](https://segmentfault.com/a/1190000003787713#articleHeader6)
