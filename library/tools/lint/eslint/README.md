# ESLint

## 生态

### 解析

### @typescript-eslint/parser

- 4.x：eslint >= 5

    https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md#400-2020-08-31

- 3.x：eslint >= 5

### [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)

- 7.x：@babel/core >= 7.x、eslint >= 7
- babel-eslint@10.x：eslint >= 4.x
- ...

#### [vue-eslint-parser](https://github.com/vuejs/vue-eslint-parser)

...

### 插件

#### @typescript-eslint/eslint-plugin

```js
{
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/all',
    'plugin:@typescript-eslint/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ]
}
```

Changelog

- 4.x：@typescript-eslint/parser >= 4、eslint >= 5

    https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md#400-2020-08-31

- 3.x：@typescript-eslint/parser >= 3、eslint >= 5


#### [@babel/eslint-plugin](https://www.npmjs.com/package/@babel/eslint-plugin)

...

#### eslint-plugin-prettier

```
{
  plugins: ['prettier'],
  extends: [
    'plugin:prettier/recommended'
  ]
}
```

实现原理：把 prettier 作为 eslint 的插件来运行。

#### [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

```
{
  plugins: ['vue'],
  extends: [
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/no-layout-rules',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended'
  ]
}
```

实现原理：针对 vue 定制的 lint 规则，并且提供了一些推荐的预定义配置。

底层依赖

- 7.x：eslint >= 6

    https://github.com/vuejs/eslint-plugin-vue/releases/tag/v7.0.0

- 6.x：eslint >= 5
- 5.x：eslint >= 5
- 4.x：eslint >= 3

### 配置

#### [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

```js
{
  extends: [
    'prettier'
  ]
}
```

实现原理：关闭了所有与 prettier 存在冲突或者不需要的 ESLint 规则。

#### [eslint-config-standard](https://github.com/standard/eslint-config-standard)

...

#### @vue/eslint-config-prettier

```js
{
  extends: [
    '@vue/prettier',
    '@vue/prettier/recommended'
  ]
}
```

实现原理：使用了插件 `eslint-plugin-prettier`，并继承了配置 `eslint-config-prettier/vue`。

```js
{
  plugins: ['prettier'],
  extends: [
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/vue')
  ],
  rules: {
    'prettier/prettier': 'warn'
  }
}
```

#### @vue/eslint-config-typescript

```js
{
  extends: [
    '@vue/typescript',
    '@vue/typescript/recommended'
  ]
}
```

实现原理：使用了 `@typescript-eslint/eslint-plugin` 和 `@typescript-eslint/parser`。

```js
{
  plugins: ['@typescript-eslint'],
  // Prerequisite `eslint-plugin-vue`, being extended, sets
  // root property `parser` to `'vue-eslint-parser'`, which, for code parsing,
  // in turn delegates to the parser, specified in `parserOptions.parser`:
  // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  overrides: [{
    files: ['*.ts', '*.tsx'],
    rules: {
      // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
      // does not work with type definitions
      'no-unused-vars': 'off',
    }
  }]
}
```


## Changelog

### v4.0.0

- [Migrating to v4.0.0](https://eslint.org/docs/user-guide/migrating-to-4.0.0)


---

# eslint-plugin-import
- [Resolvers](https://github.com/benmosher/eslint-plugin-import/wiki/Resolvers)

    - [eslint-import-resolver-react-native](https://github.com/LeadingLight/eslint-import-resolver-react-native)

# eslint-plugin-compat
https://github.com/amilajack/eslint-plugin-compat
