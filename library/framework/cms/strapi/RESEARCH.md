# 技术调研

## 需求背景

想要快速搭建一个服务于 C 端产品的 CMS 服务，要求能够无代码配置。

## 调研结果

Stapi 满足基本的 CMS 服务需求，提供的字段类型能够覆盖当前的业务场景。但是在以下几个方面存在局限性：

- 支持字段界别的多语言配置

    国际化是按记录镜像实现的，无法做到字段级别的多语言实现

- 支持不同业务做类型和数据隔离

    如果不同业务都放在同一个服务上会很混乱

- 支持草稿和数据预览模式

    虽然数据有草稿和发布状态，这个状态只是表示是否是上线，上线后就没有草稿功能了，每次修改都是直接上线；
