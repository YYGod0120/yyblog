---
title: NewBlog
date: 2024-02-03
categories: Project
excerpt: 有一个由自己打造的博客，是每个前端开发必备项目。我通过半个月时间，尝试Next搭建了一个博客。
---

# 前言

原本，我利用 Hexo 搭建了一个个人博客，刚开始还挺新鲜的，但慢慢就觉得样式单调，而且我想加入评论以及流量监控很麻烦。所以想着要不自己手写一个，更好控制也能自定义样式。于是 yyblog 就孕育而生

# 结构

整个博客，不仅仅由 yyblog 组成，还有 ybg-cli 脚手架，用于自动创建删除文章以及编译文章。

- **yyblog**

  - Nextjs
  - typescript
  - tailwind
  - react-syntax-highlighter

- **ybg-cli**
  - cac
  - gray-matter
  -
