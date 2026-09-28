# 黄盛宝｜产品经理个人作品集

面向产品经理与用户运营岗位的个人求职网站，视觉风格参考简洁的蓝白卡片式作品集，并针对桌面端和移动端进行了响应式适配。

## 本地预览

环境要求：Node.js 22、pnpm 11。

```bash
pnpm install
pnpm dev
```

打开 <http://localhost:3000>。

## 部署到 GitHub Pages

项目已包含 `.github/workflows/pages.yml`。推送到 GitHub 后：

1. 在仓库的 **Settings → Pages** 中，将 **Source** 设为 **GitHub Actions**。
2. 推送到 `main` 分支，工作流会自动构建并发布静态网站。
3. 项目仓库的默认访问地址为 `https://<GitHub用户名>.github.io/<仓库名>/`。

工作流会自动处理项目仓库所需的路径前缀，不需要手动修改图片、简历或站内链接。

## 常用命令

```bash
pnpm dev          # 本地开发
pnpm build        # 常规构建
pnpm build:github # GitHub Pages 静态构建
```

## 主要文件

- `app/page.tsx`：作品集内容与页面结构
- `app/globals.css`：视觉样式与响应式布局
- `public/huang-shengbao-portrait.png`：职业头像
- `public/huang-shengbao-resume-2026.pdf`：下载版简历
- `public/og.png`：社交分享封面

> 本仓库包含求职联系方式和简历文件。公开仓库会使这些信息可被互联网访问与搜索。
