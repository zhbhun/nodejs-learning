# Package

## export

用法

- 语法

    - `{ ".": "./main.js" }`：默认导出
    - `{ "./sub/path": "./secondary.js" }`：导出模块
    - `{ "./prefix/": "./directory/" }`：导出前缀（Node.js 已经废弃）
    - `{ "./other-prefix/*": "./yet-another/*/*.js" }`：导出前缀（Node.js 推荐写法）

- 可选

    `{ "./things/": ["./good-things/", "./bad-things/"] }`

    按顺序查找有效的导出模块

- 条件

    ```json
    {
      "exports": {
        ".": {
          "node": "./main.js",
          "default": "./main.mjs"
        }
      }
    }
    ```

    node 通过 -C 来设置条件。
    
    ```shell
    node -C=development app.js
    ```

- 顺序：默认按对象 key 值的声明顺序查找，如果遇到两个路径都符合，更加精准的优先级更高

    - `{ "red": "./stop.js", "green": "./drive.js" }` != `{ "green": "./drive.js", "red": "./stop.js" }`
    
        声明在前的属性优先级更高
    
    - `{ "./a/": "./x/", "./a/b/": "./y/", "./a/b/c": "./z" }` == `{ "./a/b/c": "./z", "./a/b/": "./y/", "./a/": "./x/" }`

        `./a/b/c` > `./a/b/` > `./a/`

- 兼容性：https://webpack.js.org/guides/package-exports/#conditions


问题

- 样式导出是否支持混用后缀

    import 'xxx/style' => xxx/index.less

- ...

参考

- [Package entry points](https://nodejs.org/api/packages.html#package-entry-points)
- [Package exports](https://webpack.js.org/guides/package-exports/#target-environment)
- [Node 最新 Module 导入导出规范](https://juejin.cn/post/6972006652631318564)
- [package.json 中的 exports、main、module 字段](https://juejin.cn/post/7132326156329549838)
