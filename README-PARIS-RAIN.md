# paris rain 博客使用说明

本项目采用 [Firefly](https://github.com/CuteLeaf/Firefly) 博客主题，基于 Astro 构建。博客名称为 **paris rain**，使用初音未来风格背景与半透明卡片。开始搭建日期：2026-10-17。

已移除模板示例文章、项目与动态，只保留一篇明确标为示例的欢迎文章。关于页简介暂用“记录学习、生活与喜欢的旋律”，可直接修改。

## 本地运行

需要 Node.js **22.23.0 或更高版本**与 pnpm **11.25.0**。在项目根目录运行：

```powershell
pnpm install
pnpm dev
```

开发服务器启动后，打开终端显示的本地地址。

常用命令：

| 命令 | 用途 |
| --- | --- |
| `pnpm check` | 检查 Astro 页面与组件 |
| `pnpm type-check` | 检查 TypeScript 类型 |
| `pnpm build` | 构建生产站点，输出到 `dist` |
| `pnpm preview` | 本地预览已构建的站点 |
| `pnpm new-post my-first-post` | 创建 `src/content/posts/my-first-post.md` |

## 修改个人资料与图片

| 想修改的内容 | 文件或配置 |
| --- | --- |
| 站点名称、描述、域名 | `src/config/siteConfig.ts` 的 `title`、`description`、`site_url` |
| 昵称、简介、头像、社交链接 | `src/config/profileConfig.ts` 的 `name`、`bio`、`avatar`、`links` |
| 桌面与手机背景 | `src/config/backgroundWallpaper.ts` 的 `src.desktop`、`src.mobile` |
| 首页背景上的文字 | `src/config/backgroundWallpaper.ts` 的 `common.homeText` |
| 关于页 | `src/content/spec/about.md` |

当前背景文件为 `public/assets/images/paris-rain/miku-stage.jpg`，头像为 `public/assets/images/paris-rain/avatar.svg`。直接替换同名文件即可更新图片；改用其他文件名时，需同步修改上表中的配置路径。配置中的网页路径分别为 `/assets/images/paris-rain/miku-stage.jpg` 与 `/assets/images/paris-rain/avatar.svg`，不包含 `public`。手机可另准备竖图，并设置 `src.mobile`。请使用自己拥有使用权的图片。

## 写文章

1. 运行 `pnpm new-post my-first-post` 创建文件。
2. 修改文件开头的标题、日期、简介、分类与标签。
3. 在第二个 `---` 之后用 Markdown 写正文。
4. 运行 `pnpm dev` 查看效果。
5. 准备发布时设为 `draft: false`，提交到自己的 GitHub 仓库。

最小示例：

```markdown
---
title: "我的第一篇文章"
published: 2026-10-17
description: "这篇文章的简短介绍。"
tags: [生活, 随笔]
category: "随笔"
draft: false
lang: "zh_CN"
---

在这里开始写正文。
```

设为 `draft: true` 的文章在开发预览中可见，正式构建时隐藏。分类、标签和归档会根据文章内容自动生成，无需手动建页面。当前示例位于 `src/content/posts/welcome.md`，可修改或删除。

## Cloudflare Pages 自动发布

正式仓库为 [LYHqwq123/Firefly](https://github.com/LYHqwq123/Firefly)，已连接 Cloudflare Pages 项目 `paris-rain`。域名在西部数码注册，DNS 由 Cloudflare 免费套餐托管。

| 项目 | 当前设置 |
| --- | --- |
| 正式地址 | [paris-rain.top](https://paris-rain.top/) |
| 平台地址 | [paris-rain.pages.dev](https://paris-rain.pages.dev/) |
| 自动发布分支 | `master` |
| 构建命令 / 输出目录 | `pnpm build` / `dist` |
| 构建版本 | `NODE_VERSION=24.19.0`、`PNPM_VERSION=11.25.0`，生产与预览环境一致 |

发布文章时，把修改提交并推送至 `master`。Cloudflare 会自动安装依赖、构建并发布；在 Cloudflare 的「Workers 和 Pages → paris-rain → 部署」中查看结果。也可以在 GitHub 网页打开文章文件，点击编辑按钮，修改后提交到 `master`。

这里使用静态站点部署，不需要设置 `CF_WORKERS` 环境变量。`src/config/siteConfig.ts` 的 `site_url` 已设为 `https://paris-rain.top`，订阅、站点地图和文章链接使用该正式域名。

域名的 Cloudflare 名称服务器为 `arvind.ns.cloudflare.com`、`cass.ns.cloudflare.com`。根域 CNAME 指向 `paris-rain.pages.dev`；原有邮箱与 Minecraft 解析已保留。以后管理解析时，在 Cloudflare 修改记录。旧的西部数码解析表不会随 Cloudflare 的修改自动同步。
