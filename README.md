# Short URL

将长链接转为短链接的小工具，完全开源、免费、无需登录，可私有化部署，可配合免费的无服务器云平台使用，短链接可永久有效。

体验地址 👉 [缩啦 —— 简单易用的短链接生成工具，链接永久有效！](https://chuanmu.co/)

服务托管在 [fly.io](https://fly.io) 平台，此平台可通过 Docker 部署任意类型的应用，前三个应用免费，推荐使用。

## 效果演示

![Demo](./docs/demo.gif)

## 环境依赖

- NodeJS 16+
- Redis 5+

## 部署步骤

### 前置操作

1. 执行 `npm install` 安装依赖包；

2. 将 `.env.example` 文件重命名为 `.env`，并将 `YOUR_REDIS_URL` 替换为你的 Redis 连接地址，示例如下：

- 单机模式无密码：`redis://127.0.0.1:6379`
- 单机模式有密码：`redis://:yourpassword@127.0.0.1:6379`

### 方式一：前后端分离部署

1. 执行 `npm run server` 启动后端服务，占用端口 3001；

2. 执行 `npm start` 启动前端服务，占用端口 3000；

3. 访问 [http://localhost:3000](http://localhost:3000) 即可使用；

### 方式二：通过 express 打包部署（推荐）

1. 执行 `npm run build` 将前端编译为静态文件（生成的 build 目录不要删除）；

2. 执行 `npm run server` 启动服务；

3. 访问 [http://localhost:3001](http://localhost:3001) 即可使用；

### 方式三：Docker 部署（推荐）

1. 执行 `docker build -t short-url .` 打包镜像；

2. 执行 `docker run -d -p3001:3001 short-url` 启动容器；

3. 访问 [http://localhost:3001](http://localhost:3001) 即可使用；

