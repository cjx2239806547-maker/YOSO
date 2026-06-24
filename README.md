# YOSO·有所设计工作室官网

基于 Next.js + Tailwind CSS + framer-motion 构建的沉浸式黑白极简设计工作室官网，包含首页、服务、案例、关于与联系模块。

## 本地运行

```bash
npm install
npm run dev
```

打开 http://localhost:3000 查看网站。

## 生产构建

```bash
npm run build
npm run start
```

## 部署到 Vercel

1. 将项目推送到 GitHub / GitLab / Bitbucket。
2. 登录 [Vercel](https://vercel.com)，点击 **Add New Project**。
3. 导入该仓库，Framework Preset 选择 **Next.js**。
4. 保持默认构建命令 `next build` 和输出设置，点击 **Deploy**。
5. 需要替换案例图时，将图片放入 `public/images`，并在 `components/site-data.ts` 更新文件名与文字。
