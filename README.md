# 安装依赖

### 项目依赖

使用 `npm i` | `pnpm i` | `yarn` 安装项目所有依赖。

### 可执行的命令与脚本

1. `analytics` 用图形化方式显示当前编译结果的模块组成，编译后访问 `localhost:3000`。
2. `version-tag:major` 提升主版本号，并生成 git tag，tag 名称为版本号。
3. `version-tag:minor` 提升次版本号，并生成 git tag，tag 名称为版本号。
4. `version-tag:patch` 提升修订号，并生成 git tag，tag 名称为版本号。
5. `version-tag:premajor` 提升主版本号，将先行版本号置 0，并生成 git tag，tag 名称为版本号。
6. `version-tag:preminor` 提升次版本号，将先行版本号置 0，并生成 git tag，tag 名称为版本号。
7. `version-tag:prepatch` 提升修订号，将先行版本号置 0，并生成 git tag，tag 名称为版本号。
8. `version-tag:prerelease` 提升先行版本号，并生成 git tag，tag 名称为版本号。

### 版本号升级规则

- `premajor, preminor, prepatch, prerelase` 用于预发布环境
- `major, minor, patch` 用于生产环境

|            | v1.0.0-0 | v1.0.0   | v1.0.1-0 | v1.0.1   | v1.1.0-0 | v1.1.0   |
| ---------- | -------- | -------- | -------- | -------- | -------- | -------- |
| premajor   |          | v2.0.0-0 |          | v2.0.0-0 |          | v2.0.0-0 |
| preminor   |          | v1.1.0-0 |          | v1.1.0-0 |          | v1.2.0-0 |
| prepatch   |          | v1.0.1-0 |          | v1.0.2-0 |          | v1.1.1-0 |
| prerelease | v1.0.0-1 |          | v1.0.1-1 |          | v1.1.0-1 |          |
| major      | v1.0.0   |          |          |          |          |          |
| minor      |          |          |          |          | v1.1.0   |          |
| patch      |          |          | v1.0.1   |          |          |          |

# 目录结构

```bash
|-- src
    |-- App.tsx                 // 程序入口文件
    |-- index.tsx               // 项目入口文件
    |-- react-app-env.d.ts      // react-app 环境变量引入文件
    |-- typings.d.ts            // 全局type类型定义
    |-- api                     // api接口定义
    |   |-- services.ts         // axios封装
    |-- constants               // 常量配置
    |-- features                // 全局状态管理Slice
    |-- hooks                   // 自定义hooks
    |-- pages                   // page页面
    |-- routes                  // 路由配置
    |-- stores                  // 全局状态管理配置
```

# GIT

1. feat: 新功能、新特性
2. fix: 修改 bug
3. locale: 为国际化做了微小的贡献
4. ui: 修改了一下样式
5. perf: 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）
6. refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
7. docs: 文档修改
8. style: 代码格式修改, 注意不是 css 修改（例如分号修改）
9. test: 测试用例新增、修改
10. build: 影响项目构建或依赖项修改
11. revert: 恢复上一次提交
12. ci: 持续集成相关文件修改
13. chore: 其他修改（不在上述类型中的修改）
14. release: 发布新版本

## 分支与环境说明

项目有三个基础分支，以下是三个基础分支的说明

1. `dev` 对应开发环境
2. `sit` 对应测试环境
3. `super` 对应预发布环境
4. `main` 预发布环境与生产环境使用的分支，使用 tag 来区分预发布环境与生产环境，此分支受保护
