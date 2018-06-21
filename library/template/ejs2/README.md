- http://ejs.co/
- https://github.com/mde/ejs
- https://segmentfault.com/a/1190000004286562

# 用法
1. 预编译

    ```javascript
    var template = ejs.compile(str, options);
    template(data);
    ```

2. 实时编译

    ```
    ejs.render(str, data, options);
    ```

3. 编译文件

    ```javascript
    ejs.renderFile(filename, data, options, function(err, str){
      // str => Rendered HTML string
    });
    ```
