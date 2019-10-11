# link

## 示例1

- `cd hello && npm link`
- `cd say-hello && npm link hello && node index.js`


## 示例2

- `cd peer-dep && npm link`
- `cd test-peer-dep && npm link peer-dep`
- `cd test-peer-dep && node index.js`

    失败

- `cd test-peer-dep && node --preserve-symlinks index.js`

    成功
