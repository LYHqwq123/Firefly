---
title: "LiteGuard：给 dsh-Go 准备的手机 AI 工具沙箱"
published: 2026-11-13
draft: false
description: "介绍我做的开源手机 Agent 工具沙箱 LiteGuard：在虚拟工作区处理文件，查看变更、撤回操作，并与 dsh-Go 联动。"
image: "https://lyhqwq123.github.io/liteguard-agent-sandbox/assets/poster.jpg"
tags: [LiteGuard, dsh-Go, AI, 沙箱, 开源]
category: "我的项目"
lang: "zh_CN"
author: "paris rain"
comment: false
---

最近做了一个手机上的 AI 工具沙箱，叫 **LiteGuard Agent Sandbox**。它可以与 dsh-Go 联动，让明确调用 LiteGuard 工具的 Agent 在虚拟工作区里处理文件；处理后可以查看变更，必要时撤回，再由自己决定是否导出。

**[项目网站与介绍视频](https://lyhqwq123.github.io/liteguard-agent-sandbox/) · [下载 v0.2.0 测试版](https://github.com/LYHqwq123/liteguard-agent-sandbox/releases/tag/v0.2.0) · [GitHub 源码](https://github.com/LYHqwq123/liteguard-agent-sandbox)**

## 给操作留一条回头路

让 AI 帮忙整理文件很方便，但我也想在动手前后看清楚发生了什么。LiteGuard 为此准备了一个虚拟工作区：真实文件需要主动导入，再创建可编辑副本；操作过程中可以查看文件变更、快照和 Diff，也可以撤回部分操作。处理完之后，由用户确认是否导出。

![LiteGuard 工作台与 dsh-Go 连接入口](https://lyhqwq123.github.io/liteguard-agent-sandbox/assets/workbench.png)

目前的主要功能包括：

- **虚拟文件与回滚：** 使用 SQLite 管理虚拟文件、快照和历史，支持查看变更与撤销。
- **工具执行：** 提供常见命令子集的虚拟 Shell，以及 QuickJS 和 MicroPython 脚本运行环境。
- **操作审批：** 对部分高风险操作请求用户批准，并提供超时、取消和失败熔断机制。
- **上手练习：** 首次使用时可以跟随引导创建并撤回一份练习文件，熟悉工作方式。
- **界面设置：** 提供六套主题色，以及浅色、深色和跟随系统模式。

## 和 dsh-Go 一起使用

LiteGuard 的 **v0.2.0 测试版**提供 dsh-Go 本机插件。连接流程大致是：

1. 安装 LiteGuard，并在 dsh-Go 中完成本机运行环境与模型设置。
2. 在 LiteGuard 的「联动」页面开启连接，复制安装命令。
3. 把命令粘贴到 dsh-Go 手机本机的「终端」中运行，随后新建对话。
4. 先明确调用 `liteguard_status` 检查连接，再使用 `liteguard_shell` 等工具，并回到 LiteGuard 查看结果和 Diff。

安装命令包含配对凭据，请只粘贴到自己的本机终端，不要发到聊天对话或公共日志。完整步骤和排查方式见 [dsh-Go 联动指南](https://github.com/LYHqwq123/liteguard-agent-sandbox/blob/main/docs/dsh-go-integration.md)。

只有明确调用 `liteguard_*` 工具的请求会进入 LiteGuard；它不会替换或接管 dsh-Go 原有的 bash、Linux 或 PRoot 环境。两款 App 的文件也不会自动共享，需要先在 LiteGuard 中导入。

## 下载与当前进度

发布时提供的 **v0.2.0 是测试版**：Android 安装包适用于 Android 8.0 及以上的 ARM64 设备，使用开发测试签名。发布页还提供 Windows x64 命令行版本、源码包和介绍视频。

项目已经在开发机完成自动化测试和插件到沙箱的链路检查，但**尚未完成 Android 真机双应用验收**；后台服务、不同 ROM、无障碍和文件导出等行为仍需要设备验证。iOS 和 HarmonyOS NEXT 也尚未验收。

LiteGuard 不需要 Root，也不在自己的沙箱里运行 Ubuntu 或宿主 Shell。Python 使用的是 MicroPython，不提供 pip、NumPy 或 CPython 扩展；QuickJS 是进程内引擎，不能视作抵御原生引擎漏洞的强隔离容器。更多细节可以查看 [架构说明](https://github.com/LYHqwq123/liteguard-agent-sandbox/blob/main/docs/architecture.md) 和 [验证记录](https://github.com/LYHqwq123/liteguard-agent-sandbox/blob/main/docs/verification.md)。

项目采用 MIT 许可开源。如果你愿意体验，欢迎在 [GitHub Issues](https://github.com/LYHqwq123/liteguard-agent-sandbox/issues) 分享设备型号、系统版本和遇到的问题。
