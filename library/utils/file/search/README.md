| 方案 | 常驻内存 | 自动闲置回收 | 重启同项目 | 适合场景 |
|------|----------|--------------|------------|----------|
| ripgrep/fd/fzf 实时扫描 | 否 | 进程退出即回收 | 全盘重扫 | 命令行一次性搜索 |
| fff 单项目常驻daemon | 是 | 不自动，需手动/关编辑器 | 增量加载 | Neovim 高频弹窗找文件 |
| Everything/mlocate 全局系统索引 | 长期后台 | LRU自动卸冷数据 | 秒查所有项目 | 系统全盘找文件 |
| fzf-lua 短时缓存 | 短时占用 | 超时自动释放 | 全盘重扫 | 中小型项目，不想长期占内存 |
| git ls-files组合 | 不常驻 | 每次进程销毁 | 读Git index（快） | 只需要已追踪代码文件 |

- [rg](https://github.com/BurntSushi/ripgrep) - ripgrep
- [fff](https://github.com/dmtrKovalenko/fff) - 底层 Rust 索引库
- [fd](https://github.com/sharkdp/fd) - find 替代工具
- [fzf](https://github.com/junegunn/fzf) - 通用模糊查找器
- [fzf-lua](https://github.com/ibhagwan/fzf-lua) - Neovim fzf 封装
- [mlocate /locate](https://pagure.io/mlocate) - Linux 系统自带，无独立 GitHub 仓库
- [Everything](https://www.voidtools.com/zh-cn/) - Windows 闭源软件，官网
- [git ls-files](https://github.com/git/git) - Git 内置命令
