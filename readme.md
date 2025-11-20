## qiankun 接入 vue 2 实现

### 主应用启动
npm start

### vue2子应用启动
npm run dev

### react子应用启动
qiankun 接入 React + Vite 的子应用时，必须使用静态服务器（如 serve -s dist），
是因为 qiankun 需要通过 HTTP 请求获取子应用的 index.html 文件，并从中解析出 JS/CSS 资源路径。
而 Vite 的开发服务器（vite dev）返回的是“动态 HTML”，不适用于微前端场景。

npm run build

npx serve -s dist -l 3001 --cors

### 注意：本地启动必须多个项目同时启动，才能进行访问

## 后续会引入 monorepo 方案，适配更多的项目