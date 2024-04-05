# manage-system

> 一个基于 Vue 2.0 + Element-UI + Axios 的最基本的后台管理系统模版。包含功能有：路由、接口封装、登录、主页分侧边栏和右侧展示、面包屑（待定）、Search 组件、Table 组件、Navigation 组件、Form 组件。以上就是一个后台项目最基本的几个模块，因此抽成一个项目模版供后续快速搭建。 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 项目里程碑

- [x] 使用 vue 2.0 搭建 vue 项目
- [x] 导入一些常用库： axios、element-ui、vue-router
- [x] 封装接口相关的方法：axios 二次封装、不同的请求模版
- [x] 成功配置 less 、less-loader 预处理器
- [x] 成功导入并且使用 element-ui
- [ ] 配置页面路由
  - [x] 主页路由
  - [ ] 登录路由
  - [x] 404 路由器
- [x] 设置好了路由层级以及 NavMenu 中 点击跳转路由的功能
- [ ] 在主页路由中设置好侧边栏
  - [ ] 侧边栏需要随屏幕自适应，并且缩小到一定宽度后隐藏侧边栏文字
  - [ ] 侧边栏点击能跳转对应的路由
- [ ] 配置路由面包屑
  - [ ] 点击侧边栏展开右侧路由时，面包屑也会随之弹出，点击 叉叉 可以删除面包屑
  - [ ] 点击面包屑也会跳转对应的路由
- [ ] 封装好 Search 组件
  - [ ] 父组件中传入 form 给 Search 组件绑定数据
  - [ ] 点击 Search 组件的 查询 按钮时，向父组件触发事件，父组件可以监听这个事件做处理
  - [ ] 点击 Search 组件的 查询 按钮时，会修改传入的 form 对象，并且将这个 form 对象存入缓存，更新 路由参数，重新 push 路由
- [ ] 封装好 Table 组件
  - [ ] 父组件设置好 tableColumn对象 和 tableData 对象，传入 Table 组件。建议通过 v-bind 直接绑定一个对象
  - [ ] Table 组件可以根据 tableColumn 渲染 普通列、特殊列
  - [ ] Table 组件根据 tableData 和 tableColumn 渲染表格数据
  - [ ] Table 组件根据 在操作事件中监听点击事件，将一行的参数携带着传递给父组件进行事件触发，由 父组件进行处理
- [ ] 封装好 Navigation 组件
  - [ ] 父组件设置好 initPagination 对象，传递给 Navigation 组件
  - [ ] Navigation 组件 拿到 props 对象，传递给分页器属性进行绑定
  - [ ] Navigation 组件 在触发对应的事件（如change-size、change-page）时，对 props 进行重新赋值，并且向外触发事件，由父组件监听
  - [ ] 父组件监听到对应的 change 事件时，使用 分页器参数对 路由参数 进行修改，并且刷新页面
- [ ] 封装好 Form 组件
  - [ ] 父组件设置好 form 对象，传递给 Form 组件
  - [ ] Form 组件拿到 props 对象，绑定给对应的表单
  - [ ] Form 组件内部封装了多个函数，用于校验一些常用的表单特性
  - [ ] Form 组件内部对 submit 按钮进行了监听，当点击时会进行一次校验。若不通过则拦截，若通过则向父组件触发 事件，由父组件进行监听
  - [ ] 父组件监听到 submit 事件后，进行一些接口请求的操作，完成对应的行为。这里的行为包括成功和失败都要监听，还需要控制弹窗之类的
  - [ ] 每次进入 Form 组件 时，对上一次的校验进行清空
  - [ ] 每次进入 Form 组件 时，判断是 回显还是新建，如果是新建则执行 reset 方法，回显则调用对应的方法赋值数据
- [ ] 在 父组件 中，自行选择地使用以上的组件
  - [ ] 一旦进入父组件，在 mounted 中从 缓存中 获取 search 参数；从路由中获取 pagination 参数，对本地的 相关对象进行初始化
  - [ ] 初始化数据后，调用 getTableList 获取对应的页面数据。此方法中拿到本地的 参数，封装好 params 后调用后端接口拿到数据
- [ ] 封装通用方法，如时间格式化、日期格式化、时间日期格式化、校验函数、节流、防抖、对本地缓存的操作优化
- [ ] 提供 vscode 对于 vue2 的好用的 模版片段
- [ ] 本地的一些配置，如 env 环境配置、国际化、打包优化等工程化的东西（这部分暂时不太熟悉）

## 二期功能记录

- [ ] 目前如果要新增路由，需要两步。到 router.js 中添加路由，还得到 NavMenu 中添加对应的侧边栏和对应的路由index。第二步后续应该可以用算法实现自动生成，这里后续再研究。
