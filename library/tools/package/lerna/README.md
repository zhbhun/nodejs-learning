# [Lerna](https://lerna.js.org)

> A tool for managing JavaScript projects with multiple packages.

项目结构：

```
my-lerna-repo/
  lerna.json
  lerna-debug.log
  package.json
  packages/
    package-1/
      package.json
    package-2/
      package.json
```

- [源代码](https://github.com/lerna/lerna)

## 安装使用

```bash
# 安装 lerna
$ npm install -g lerna
# 查看帮助
$ lerna --help
# 初始化项目
$ lerna init
# 安装本地模块（会安装第三方模块，如果是本地模块会以 link 的方式安装）
$ lerna bootstrap
# 发布
$ lerna publish
```

## 工作原理

两种模式

- fixed/locked
- independent

## 配置文件

[lerna.json](https://github.com/lerna/lerna#lernajson)

## 常用命令

- 初始化

    - 模式选择

        - fixed：`lerna init`
        - independent：`lerna init --independent`

    - ...

- 创建包

## 常见问题

- [FAQ.md](https://github.com/lerna/lerna/blob/master/FAQ.md)
- [Troubleshooting](https://github.com/lerna/lerna/blob/master/doc/troubleshooting.md)

### 如何发布带 Scope 的包

- [[Docs] publish fails for scoped packages as tries to make them private](https://github.com/lerna/lerna/issues/178#issuecomment-261736824)
- [No docs on how to publish public scoped packages](https://github.com/lerna/lerna/issues/914)
- [npm-publish](https://docs.npmjs.com/cli/publish)
- [Publishing a public Org scoped package](https://docs.npmjs.com/creating-and-publishing-an-org-scoped-package)

## 应用示例

- [Babel](https://github.com/babel/babel/tree/master/packages)
- [React](https://github.com/facebook/react/tree/master/packages)
- [Angular](https://github.com/angular/angular/tree/master/modules)

## 参考文献

- [lerna入门篇](https://www.jianshu.com/p/63ec67445b0f)
