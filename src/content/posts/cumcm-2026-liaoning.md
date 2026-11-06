---
title: "2026 数模 A 题：药材烘干建模资料整理"
published: 2026-11-07
draft: false
description: "整理药材热湿耦合烘干与收缩边界模型的论文、Python 代码、计算结果和复现入口，供学习与交流。"
tags: [数学建模, Python, 数值计算, 学习资料]
category: "我的项目"
lang: "zh_CN"
author: "paris rain"
comment: false
---

把这次数学建模的资料整理到了 GitHub，主题是 **2026 数模 A 题：药材的烘干问题**。论文题为《圆柱形中药材热湿耦合烘干与收缩边界模型》，仓库保留了论文、Python 程序、题给附件、计算结果和 LaTeX 源稿，方便回顾建模过程，也方便交流。

按[仓库 README 中的作者说明](https://github.com/LYHqwq123/cumcm-2026-liaoning/blob/main/README.md)，本项目获 2026 年全国高教杯数学建模比赛辽宁省三等奖。

模型围绕圆柱形药材的温度和水分变化展开：先分析预热，再处理物性变化下的热湿耦合过程，随后判断固定半径时的烘干终点，最后加入径向收缩。程序包含圆环有限体积离散、隐式推进和迭代求解，也保留了敏感性分析与验证代码。

可以从下面几个入口开始：

- [论文 PDF](https://github.com/LYHqwq123/cumcm-2026-liaoning/blob/main/paper.pdf)：阅读模型、假设与分析。
- [Python 源码](https://github.com/LYHqwq123/cumcm-2026-liaoning/tree/main/A%E9%A2%98/workspace/code)：查看四问的求解、导出和验证程序。
- [计算结果](https://github.com/LYHqwq123/cumcm-2026-liaoning/tree/main/A%E9%A2%98/workspace/outputs)：查看结果工作簿和过程记录。

只想了解思路，可以先读论文和已有结果；准备复现时，再按 README 核对依赖与目录位置。重新计算会覆盖部分结果，建议在副本中操作。

这些计算依赖题给经验物性、有效边界和均匀收缩等假设，仍需独立实验验证。引用时请注明来源，并核验适用条件。完整资料与后续更新都放在[项目仓库](https://github.com/LYHqwq123/cumcm-2026-liaoning)。
