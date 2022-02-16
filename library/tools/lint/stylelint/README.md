# [Stylelint](https://stylelint.io/)

## 生态

- [awesome-stylelint](https://github.com/stylelint/awesome-stylelint)

### 插件

#### [stylelint-order](https://github.com/hudochenkov/stylelint-order)

- 简介：检查 css 样式属性的排序
- 修复：支持
- 用法

    - [stylelint-config-rational-order](https://github.com/constverum/stylelint-config-rational-order)
    - [stylelint-config-idiomatic-order](https://github.com/ream88/stylelint-config-idiomatic-order) / [idiomatic-css](https://github.com/necolas/idiomatic-css/tree/master/translations/zh-CN)
    - [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order) / [recess](https://github.com/twitter/recess/blob/29bccc870b7b4ccaa0a138e504caf608a6606b59/lib/lint/strict-property-order.js)
    - [stylelint-config-property-sort-order-smacss](https://github.com/cahamilton/stylelint-config-property-sort-order-smacss) / [smacss](http://smacss.com/)

- 问题

    - prettier 配合 styelint-order 完成自动的格式化

        - [Feature suggestion: reorder class methods?](https://github.com/prettier/prettier/issues/1684)
        - [[Prettier CSS] Sort declaration properties in consistent manner](https://github.com/prettier/prettier/issues/1963)

#### [stylelint-prettier](https://github.com/prettier/stylelint-prettier)

- 简介：将 Prettier 作为 Stylelint 插件的方式运行
- 修复：支持
- 用法：使用 [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier) 关闭 stylelint 中存在和 prettier 格式冲突的规则。
- 问题：

    - [Prettier for CSS](https://github.com/stylelint/stylelint/issues/2532)

### 配置

#### [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)

- 简介：推荐的 stylelint 规则

#### [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

- 简介：标准的 stylelint 规则，集成了社区推荐的样式规范

    - [Principles of writing consistent, idiomatic CSS](https://github.com/necolas/idiomatic-css)
    - [Google's CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#CSS_Formatting_Rules)
    - [@mdo's Code Guide](https://codeguide.co/#css)
    - [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css#css)

#### [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)

关闭了多余的和 prettier 冲突的 stylelint 规则。
