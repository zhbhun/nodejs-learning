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

通常会出现以下这几种情况。

1. 引入了 jsx 或者 vue 模块时缺少扩展名，ESLint 警告找不到模块；

    ```js
    import Button from "./Button"; // Button.jsx
    // Unable to resolve path to module './Component'
    ```

    eslint-plugin-import 默认遵循 node 的模块解析方式，没有后缀名的模块会先查找是否有 .js 文件，没有的话查找是否有同名目录，查找该目录是否有 package.json 或 index.js。为了解决这个问题，我们需要修改 eslint-plugin-import 默认解析器的扩展名配置。

    ```json
    {
        "settings": {
            "import/resolver": {
                "node": {
                    "extensions": [".js", ".jsx"]
                }
            }
        }
    }
    ```

2. 使用了 webpack 等打包工具的模块别名，ESLint 提示找不到模块；

    ```js
    import Button from "@/components/Button";
    ```

    如上文所述，eslint-plugin-import 默认遵循 node 的模块解析方式，而不支持 webpack 的别名。但 eslint-plugin-import 的模块解析是可扩展的。为了解决这个问题，我们只需要安装依赖 `eslint-import-resolver-alias`，然后按如下方式配置：

    ```js
    {
      "settings": {
        "import/resolver": {
          "alias": {
            "map": [["@", "./src"]],
            "extensions": [".js", ".jsx"]
          }
        }
      }
    }
    ```

    ps：map 的路径是相对 IED 项目根目录的，如果 eslintrc 不在根目录下，建议改用 js 来配置绝对路径(`path.resolve(__dirname, 'src')`)。

3. 引入 jsx 之类非 js 扩展名的代码模块时不会进行依赖检查；

    ```js
    // Component.jsx
    export const name = "Component";

    // index.js
    import Component from "./Component.jsx";
    ```

    如上所示的代码，Component 并没有导出默认模块，而 index.js 却以默认模块的方式引入，理论上 eslint 应该警告 `No default export found in imported module "./Component.jsx"/`

    出现这个问题是因为 eslint-plugin-import 默认只会校验 js 扩展名的模块代码，可以按如下配置调整模块支持的扩展名：

    ```json
    {
        "settings": {
            "import/extensions": [".js", ".jsx"]
        }
    }
    ```

## 配置详解

### `import/extensions`

以 `import/extensions` 为扩展名的模块都会被解析为 ES Module，并检查目标模块的导出，默认 `['.js']`。

```json
{
  "settings": {
    "import/extensions": [
      ".js",
      ".jsx"
    ]
  }
}
```

如果不在该扩展名范围的模块被引入时，可以使用命名导入，也可以用默认导入，eslint-plugin-import 均不会检查，否则会检查。

```js
// Button.js
export default () => null

// Button.css
.button {}

// index.js
import ButtonCSS, { ButtonMainCSS } from './Button.css' // eslint-plugin-import ignore css module
import Button, { ButtonMain } from './Button.js' // `ButtonMain not found in './Component.jsx'`
```

### `import/ignore`

与 `import/extensions` 相反，用于配置哪些模块不要识别为 ESModule，例如：css、scss 和 less 等。

### `import/core-modules`

`import/core-modules` 用于设置当前项目使用了哪些核心模块，默认内置了 Nodejs 的 fs、path 等模块。这样在使用引入这些模块时，就不会出现 unresolve 的情况

### `import/resolver`

eslint-plugin-import 默认实现了类似 Node.js 的模块识别机制，但往往无法支撑前端各种各样的打包环境，例如：webpack 的别名模块，不同框架或语言的自定义扩展名，所以 eslint-plugin-import 开放了 resolver 的自定义配置，可由第三方扩展实现自定义的模块解析器。

- 模块别名：[eslint-import-resolver-alias](https://www.npmjs.com/package/eslint-import-resolver-alias)
- TypeScript：[eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)


