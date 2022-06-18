# [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)

eslint-plugin-import 用于检查 ES Module 的导入和导出代码，防止文件路径和导入名称拼写错误的问题。

## 安装使用

1. 安装

    ```shell
    npm install --save-dev eslint eslint-plugin-import
    ```

2. 配置：`.eslintrc`

    - 推荐：

        ```json
        {
          "extends": ["plugin:import/recommended"],
          "plugins": "eslint-plugin-import"
        }
        ```

    - TypeScript：

        ```json
        {
          "extends": [
            "plugin:import/recommended",
            "plugin:import/typescript"
          ],
          "plugins": "eslint-plugin-import"
        }
        ```

        ps：需要额外安装 `@typescript-eslint/parser` 和 `eslint-import-resolver-typescript`

## 模块解析

我们在引入 eslint-plugin-import 插件后经常会遇到模块无法解析的问题。

```
Unable to resolve path to module '.../xxx'  import/no-unresolved
```

出现这个问题的几种情况

1. 引入了 json、jsx 或者 vue 模块时缺少扩展名


