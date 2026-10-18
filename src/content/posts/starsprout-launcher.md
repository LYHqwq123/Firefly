---
title: "星芽 StarSprout：我做了一款星露谷启动器，欢迎来试试"
published: 2026-10-18
draft: false
description: "把游戏启动、Mod 管理、中文攻略和日志排查放在一起。介绍我的免费开源星露谷启动器 StarSprout，附界面截图与下载入口。"
image: "/assets/images/starsprout/home.png"
tags: [星露谷物语, StarSprout, 启动器, 开源]
category: "我的项目"
pinned: true
lang: "zh_CN"
author: "paris rain"
comment: false
---

最近做了一个自己的《星露谷物语》启动器，叫 **星芽 · StarSprout**，今天把它放到博客里，邀请同样喜欢星露谷的朋友来试试。

玩原版时，打开游戏就能下地干活。装上 Mod 之后，要找游戏目录、整理模组、翻攻略，偶尔还得看看 SMAPI 为什么报错。我想把这些常用操作放到一个地方，让回到农场之前的准备少一点。

**[前往官网，选择下载方式](https://lyhqwq123.github.io/StarSprout/)** · **[GitHub 最新版本](https://github.com/LYHqwq123/StarSprout/releases/latest)** · **[查看源码 / 点个 Star](https://github.com/LYHqwq123/StarSprout)**

## 把常用操作放在一起

星芽面向 **Windows 10 / 11 x64**，目前主要做了这些功能：

- **游戏启动。** 支持切换原版与 SMAPI，分别保存 Steam、Xbox / PC Game Pass 和本地离线游戏的目录。首页的启动日历与游玩时长会记录通过星芽启动的游戏。
- **Mod 管理。** 可以导入 ZIP、搜索模组、批量启用或禁用，也会检查重复 ID 与依赖。资源中心提供模组资源入口；Nexus 的浏览与下载通过官方 API，下载方式依账户权限而定。存档也能打包备份。
- **中文攻略。** 接入星露谷 BWIKI，在启动器内搜索和阅读图文攻略、收藏词条；已经打开并缓存的内容可以在本地继续阅读。
- **日志排查。** SMAPI 出问题时，可以先做本地检查。需要进一步分析时，也能选用自己的 AI 服务，查看脱敏预览后再发送日志。

外观也留了可调整的地方：浅色、深色、OLED 模式、自定义背景、强调色与卡片透明度，都可以按自己的习惯来设置。

## 邀请朋友，一起回到农场

星芽还有一个基于 **EasyTier** 的联机大厅，可以创建房间、生成星芽邀请码，再把邀请码分享给朋友加入。

![星芽的联机页面：安装联机核心、创建房间与加入好友入口](/assets/images/starsprout/multiplayer.png)

这一部分还需要更多真实异地双人游玩的反馈，连接效果也会受到网络环境影响。如果你和朋友愿意试用，欢迎把遇到的问题告诉我。

## 下载与开始使用

本文发布时，最新正式版是 **v0.4.3**，发布于 **2026 年 10 月 14 日**。官网提供国内网盘与 GitHub 下载入口，后续版本可以直接从同一个入口获取。

1. 打开 [星芽官网](https://lyhqwq123.github.io/StarSprout/)，下载 Windows ZIP 并完整解压。
2. 运行解压目录中的 `StarSprout.exe`，按提示准备运行环境。
3. 选择自己已安装的游戏目录，启动原版游戏，或继续配置 SMAPI 与 Mod。

星芽不包含游戏本体，需要先准备自己的 Windows 版《星露谷物语》。运行环境为 **.NET 10 Desktop Runtime x64** 与 **WebView2**，启动器会检测并引导安装；SMAPI 安装包下载后，仍需运行其官方安装脚本。

## 欢迎试用，也欢迎反馈

项目采用 **MIT 许可**开源，源码在 [LYHqwq123/StarSprout](https://github.com/LYHqwq123/StarSprout)。

如果你也想把启动游戏、管理 Mod 和查攻略放在一起，欢迎下载试试。觉得有用，可以给项目点一颗 **Star**；遇到问题，可以在 [GitHub Issues](https://github.com/LYHqwq123/StarSprout/issues) 留下启动器版本、Windows 版本和复现步骤，方便我继续改进。

希望下次打开星露谷时，你能少花点时间整理文件，多花点时间照顾自己的农场。
