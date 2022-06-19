# eslint-plugin-import

- 支持配置模块化方案: ES6 Module，CommonJS 和 AMD

    ```
    /*eslint import/no-unresolved: 2*/
    /*eslint import/no-unresolved: [2, { commonjs: true }]*/
    /*eslint import/no-unresolved: [2, { amd: true }]*/
    /*eslint import/no-unresolved: [2, { commonjs: true, amd: true }]*/
    ```

- 支持配置大小写敏感

    ```
    /*eslint import/no-unresolved: [2, { caseSensitive: true (default) | false }]*/
    ```

- 支持自定义的模块处理器

    ```
    {
        "settings": {
            "import/resolver": {
                "node": {
                    "extensions": [".js", ".json", ".jsx"]
                }
            }
        }
    }
    ```

# 误区
- 区分配置 `import/resolver` 的 extension 和 `import/extensions`

    后者配置表示可以解析为模块的后缀（会检查 export），前者配置用于 `import/resolver` 查找模块。


# 参考文献
- [Resolvers](https://github.com/benmosher/eslint-plugin-import#resolvers)
- [Resolver spec](https://github.com/benmosher/eslint-plugin-import/blob/master/resolvers/README.md)
- [Resolve Plugins](https://github.com/benmosher/eslint-plugin-import/wiki/Resolvers)
- [no-unresolved](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)
