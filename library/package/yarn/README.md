- [yarn config](https://yarnpkg.com/en/docs/cli/config/)

## 配置

### 缓存设置


- 修改缓存路径

    ```bash
    # 全局配置
    yarn config set cache-folder <path>
    # flag
    yarn <command> --cache-folder <path>
    # 环境变量
    YARN_CACHE_FOLDER=<path> yarn <command>
    # npmrc 配置
    # .npmrc > cache=<path>
    ```

    参考 [Change the cache path for yarn](https://classic.yarnpkg.com/en/docs/cli/cache#toc-change-the-cache-path-for-yarn)

### 版本锁定

- [What is the closest to `npm ci` in yarn](https://stackoverflow.com/questions/58482655/what-is-the-closest-to-npm-ci-in-yarn)
