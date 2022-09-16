# [pnpm](https://github.com/pnpm/pnpm)

## why

- 解决”幽灵依赖“问题
- 解决“分身依赖“问题


参考文献

- [实践篇：pnpm 解决我哪些痛点？](https://juejin.cn/post/7036319707590295565)

## 问题

### 如何升级 workspaces 的关联依赖

```shell
pnpm --recursive update xxx # 升级指定的包
pnpm prune # 清除旧版本依赖
```
