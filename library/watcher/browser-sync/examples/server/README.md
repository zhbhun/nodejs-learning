1. `browser-sync start --server --files "css/*.css"`

    `--server` 将当前路径下的文件

2. 浏览器访问 `http://localhost:3000` 和 `http://localhost:3001`
3. 修改 [index.css](./css/index.css) 中的字体颜色，然后观察浏览器访问 `http://localhost:3000` 的页面字体颜色变化

    注意点：打开调试工具可以发现修改 CSS 时，Browsersync 动态的替换链接，而不需要刷新页面。
