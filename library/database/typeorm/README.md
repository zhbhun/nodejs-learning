# [TypeORM](https://typeorm.io/#/)

- [Roadmap](https://typeorm.io/#/roadmap)
- [Changelog](https://typeorm.io/#/changelog)

## 安装

- [Samples](https://typeorm.io/#/undefined/samples)
- [Extensions](https://typeorm.io/#/undefined/extensions)

### 手动

1. 依赖

    - `npm install typeorm -g`
    - `npm install reflect-metadata --save`

        需要在全局引入该模块：`import 'reflect-metadata';`

    - `npm install @types/node --save`
    - dataase driver

        - mysql: `npm install mysql --save`
        - PostgreSQL: `npm install pg --save`
        - SQLite: `npm install sqlite3 --save`
        - Microsoft SQL Server: `npm install mssql --save`
        - Oracle: `npm install oracledb --save`

2. 配置

    - TypeScript

        ```json
        { 
          "emitDecoratorMetadata": true,
          "experimentalDecorators": true
        }
        ```

ps：TypeORM 除了可以在 Node.js 上运行，也可以在 Browser、Cordova、PhoneGap、Ionic、React Native、NativeScript、Expo 和 Electron 上运行，怎么使用可以参考 [Supported platforms](https://typeorm.io/#/supported-platforms/)。

参考文献

- [Installation](https://typeorm.io/#/undefined/installation)
- [Supported platforms](https://typeorm.io/#/supported-platforms/)

### 脚手架

1. 安装脚手架：`npm install typeorm -g`
2. 初始化新项目：`typeorm init --name MyProject --database mysql`

    ```
    MyProject
    ├── src              // place of your TypeScript code
    │   ├── entity       // place where your entities (database models) are stored
    │   │   └── User.ts  // sample entity
    │   ├── migration    // place where your migrations are stored
    │   └── index.ts     // start point of your application
    ├── .gitignore       // standard gitignore file
    ├── ormconfig.json   // ORM and database connection configuration
    ├── package.json     // node module dependencies
    ├── README.md        // simple readme file
    └── tsconfig.json    // TypeScript compiler options
    ```

3. 安装依赖：`cd MyProject && npm install`
4. 配置数据库：`ormconfig.json`
5. 启动运行：`npm start`

ps：`typeorm init --help` 查看脚手架初始化项目的更多用法。

参考文献

- [Quick Start](https://typeorm.io/#/undefined/quick-start)

## 入门

- [Step-by-Step Guide](https://typeorm.io/#/undefined/step-by-step-guide)

### [连接](https://typeorm.io/#/connection)

### [实体](https://typeorm.io/#/entities)

### [关系](https://typeorm.io/#/relations)

### [实体管理](https://typeorm.io/#/working-with-entity-manager)

### [查询构建器](https://typeorm.io/#/select-query-builder)

## 进阶

### [迁移](https://typeorm.io/#/migrations)

### [事务](https://typeorm.io/#/transactions)

- [Transactions across tables](https://github.com/typeorm/typeorm/issues/185)
- [Support transaction per request with TypeORM](https://github.com/nestjs/nest/issues/560)
- [typeorm-transactional-cls-hooked](https://github.com/odavid/typeorm-transactional-cls-hooked)
- [nestjs / TypeOrm database transaction](https://stackoverflow.com/questions/53680665/nestjs-typeorm-database-transaction)
- [Transactions and Concurrency](https://www.doctrine-project.org/projects/doctrine-orm/en/2.6/reference/transactions-and-concurrency.html#transactions-and-concurrency)

### [索引](https://typeorm.io/#/indices)

### [订阅](https://typeorm.io/#/listeners-and-subscribers)

### [日志](https://typeorm.io/#/logging)

### [CLI](https://typeorm.io/#/using-cli)

## 问题

- [FAQ](https://typeorm.io/#/faq)
