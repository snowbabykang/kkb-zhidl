
## 目录结构
```js
|-- .eslintignore ----------------------- eslint屏蔽文件
|-- .eslintrc.js ------------------------ eslint配置
|-- .gitignore  ------------------------- git屏蔽文件
|-- .prettierignore --------------------- 格式化屏蔽文件
|-- .prettierrc.js ---------------------- 格式化配置
|-- README.md --------------------------- 项目介绍文档
|-- package.json ------------------------ 依赖插件
|-- tsconfig.json ----------------------- ts配置文件
|-- typings.d.ts ------------------------ 模块ts文件声明
|-- config ------------------------------ umi项目配置
|   |-- config.ts ----------------------- umi配置入口
|   |-- layout.ts ----------------------- antd-layout布局配置
|   |-- proxy.ts ------------------------ 接口代理配置
|   |-- route.ts ------------------------ 路由配置
|-- mock -------------------------------- mock接口文件
|   |-- .gitkeep
|-- src --------------------------------- 源文件开发
    |-- access.ts ----------------------- 角色权限变量 （作用与 config/route.ts ）
    |-- app.tsx ------------------------- umi运行时配置文件
    |-- global.less --------------------- 全局样式
    |-- @types -------------------------- 项目声明ts
    |   |-- server ---------------------- 接口相关
    |       |-- index.d.ts -------------- 接口泛型封装
    |       |-- home.d.ts --------------- 首页接口
    |       |-- login.d.ts -------------- 登录接口
    |       |-- ... .d.ts
    |-- assets -------------------------- 静态资源
    |   |-- img
    |   |-- svg ------------------------- svg图片
    |       |-- logo.svg
    |-- components ---------------------- 项目全局组件
    |   |-- Footer
    |   |   |-- index.less
    |   |   |-- index.tsx
    |   |-- RightContent
    |       |-- index.less
    |       |-- index.tsx
    |-- pages --------------------------- 页面路由 config/route 会使用
    |   |-- 403.tsx
    |   |-- 404.tsx
    |   |-- Home ------------------------ 首页
    |   |   |-- index.less
    |   |   |-- index.tsx
    |   |   |-- components -------------- 首页组件
    |   |-- Login ----------------------- 登录页
    |   |   |-- api.ts
    |   |   |-- index.less
    |   |   |-- index.tsx
    |   |-- Packages -------------------- 模块文件
    |       |-- index.tsx --------------- 入口承接
    |       |-- ChangeLog --------------- 子路由页面
    |       |   |-- index.tsx
    |       |-- History
    |       |   |-- index.tsx
    |       |-- OppBuild
    |       |   |-- index.tsx
    |       |-- Query
    |           |-- index.tsx
    |-- utils --------------------------- 公共方法 (独立方法，独立文件)
        |-- request.ts ------------------ 请求方法
        |-- tool.ts --------------------- 其他方法
        |-- ... .ts ---------------------- 更多
```
## 快速开始

项目使用 [ant-design-pro v5](https://beta-pro.ant.design/) 搭建，基本上就是 `umi` 那套东西，开发之前建议看一下文档，熟悉一下配置和目录结构。

- 状态管理不推荐使用 `dva`，直接使用 [useModel](https://beta-pro.ant.design/docs/simple-model-cn) 就可以了。项目内置了 mook、权限管理和登录，针对具体场景自己调整，写法就按照官方文档来。
- 推荐使用 [ahooks](https://ahooks.js.org/zh-CN) 提升开发效率。

### 本地开发

```bash
npm start
```

### 构建

```bash
npm run build
```