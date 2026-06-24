# YOSO 项目交接说明

本文件用于说明当前 `YOSO·有所设计工作室` 官网项目的目录结构、主要脚本、数据路径、结果文件以及后续维护方式，方便后续开发者或自动化 Agent 快速接手。

## 1. 项目概览

- 项目名称：`yoso-studio-site`
- 项目类型：设计工作室官网 / 单页落地页
- 技术栈：Next.js App Router + React + TypeScript + Tailwind CSS
- 视觉方向：黑白灰极简、现代高级、留白充足，使用暖金色作为局部点缀
- 当前页面模块：首页首屏、服务 Services、案例 Works、关于 About、联系 Contact

## 2. 当前目录结构

```text
/workspace/YOSO
├── AGENT.md                     # 当前交接说明文件
├── README.md                    # 面向使用者的运行与部署说明
├── app/
│   ├── globals.css              # 全局样式、Tailwind 指令、通用动画与工具类
│   ├── layout.tsx               # 根布局、字体、站点 metadata
│   └── page.tsx                 # 官网主页面：首页、服务、案例、关于、联系
├── components/
│   ├── Header.tsx               # 顶部导航组件
│   ├── SectionTitle.tsx         # 通用区块标题组件
│   └── site-data.ts             # 服务、案例、联系方式等可替换数据
├── public/
│   └── images/                  # 官网图片资源目录
│       ├── work-01.svg
│       ├── work-02.svg
│       ├── work-03.svg
│       ├── work-04.svg
│       ├── work-05.svg
│       └── work-06.svg
├── next-env.d.ts                # Next.js TypeScript 环境声明
├── next.config.mjs              # Next.js 配置
├── package.json                 # npm 脚本与依赖配置
├── postcss.config.js            # PostCSS 配置
├── tailwind.config.ts           # Tailwind 主题、颜色、字体与动画配置
└── tsconfig.json                # TypeScript 配置与路径别名
```

## 3. 主要脚本

脚本定义在 `package.json` 中：

| 命令 | 用途 |
| --- | --- |
| `npm install` | 安装项目依赖 |
| `npm run dev` | 启动本地开发服务器，默认访问 `http://localhost:3000` |
| `npm run build` | 生成生产环境构建 |
| `npm run start` | 启动生产环境服务，需先执行 `npm run build` |
| `npm run lint` | 执行 Next.js lint 检查 |

> 注意：如果当前环境无法访问 npm registry，需要在网络正常的本地或 CI 环境中执行依赖安装与构建验证。

## 4. 关键数据路径

### 4.1 可维护内容数据

主要内容数据集中在：

```text
components/site-data.ts
```

该文件当前包含：

- `services`：服务模块数据，如品牌视觉、包装设计、IP形象等
- `works`：案例模块数据，包括标题、分类与图片路径
- `contacts`：联系模块数据，包括微信、邮箱、社媒入口

后续如需替换文案、增加服务项、调整案例标题，优先修改此文件。

### 4.2 图片资源目录

官网图片统一放在：

```text
public/images
```

在 Next.js 中，`public` 目录会作为网站根路径暴露，因此：

```text
public/images/work-01.svg
```

对应页面中的访问路径为：

```text
/images/work-01.svg
```

如果要替换案例图片，可以直接替换 `public/images` 下的同名文件；如果文件名变更，需要同步修改 `components/site-data.ts` 中 `works` 数组的 `image` 字段。

## 5. 结果文件说明

当前项目生成或维护的主要结果文件包括：

- `app/page.tsx`：最终官网页面结构与模块布局
- `app/globals.css`：最终全局视觉样式、滚动淡入动画、基础背景效果
- `components/site-data.ts`：可复用数据源，决定服务、案例、联系方式展示内容
- `public/images/work-*.svg`：当前案例瀑布流使用的占位作品图
- `README.md`：给使用者的运行、构建、部署说明
- `AGENT.md`：给后续 Agent / 开发者的项目交接说明

生产构建时，Next.js 会生成 `.next/` 目录；该目录属于构建产物，不应手动编辑，也不应提交到 Git。

## 6. 后续使用说明

### 6.1 本地开发

```bash
npm install
npm run dev
```

打开浏览器访问：

```text
http://localhost:3000
```

### 6.2 替换案例图片

1. 将新图片放入 `public/images`。
2. 如果沿用旧文件名，例如 `work-01.svg`，直接覆盖即可。
3. 如果使用新文件名，例如 `brand-case-01.jpg`，需要修改 `components/site-data.ts`：

```ts
{ title: "案例标题", category: "Brand Identity", image: "/images/brand-case-01.jpg" }
```

### 6.3 修改首页文案

首页结构在：

```text
app/page.tsx
```

常改区域包括：

- 首屏标题：`YOSO·有所设计工作室`
- 首屏副标题：`让品牌有所表达，让设计有所回应`
- About 理念文案
- Contact 标题文案

### 6.4 修改服务、案例、联系方式

优先修改：

```text
components/site-data.ts
```

这样可以避免直接改页面结构，便于后续维护。

### 6.5 调整视觉风格

全局视觉变量和 Tailwind 扩展配置主要位于：

```text
tailwind.config.ts
app/globals.css
```

可在这些文件中调整：

- 黑白灰与暖金色值
- 字体族
- 淡入动画
- 全局背景
- 通用区块容器 `.section-shell`
- 通用小标题 `.eyebrow`

### 6.6 部署到 Vercel

1. 将项目推送到 GitHub / GitLab / Bitbucket。
2. 登录 Vercel 并选择 **Add New Project**。
3. 导入仓库，Framework Preset 选择 **Next.js**。
4. 使用默认构建命令 `next build`。
5. 点击 **Deploy** 完成部署。

## 7. 维护建议

- 保持图片继续从 `public/images` 读取，便于非技术人员替换资源。
- 服务、案例、联系方式等结构化内容尽量维护在 `components/site-data.ts`。
- 页面组件已经拆分为 Header、SectionTitle 与数据文件，后续可继续拆分 `Hero`、`Services`、`Works`、`About`、`Contact` 组件。
- 如果未来案例内容增多，建议将 `works` 拆成独立 JSON 或 CMS 数据源。
- 如果要上线真实品牌官网，请将占位 SVG 图片替换为真实作品图，并更新联系方式。
