简体中文 | [English](./README.en-US.md)

<p align="center">
<a href="https://yyblog-gamma.vercel.app/about">
  <img src="./app/favicon.ico" alt="yyblog Logo" width="350">
</a>
</p>
<div align="center">

<img alt="Static Badge" src="https://img.shields.io/badge/v21.6-gray?style=flat&logo=nodedotjs&logoColor=brightgreen&label=Node&labelColor=white">
<img alt="Static Badge" src="https://img.shields.io/badge/v14.0-gray?style=flat&logo=nextdotjs&logoColor=black&label=Next&labelColor=white">
<img alt="Static Badge" src="https://img.shields.io/badge/v3.3-gray?style=flat&logo=tailwindcss&logoColor=%2306B6D4&label=Tailwind&labelColor=white">

</div>

- [博客网址](https://yyblog-gamma.vercel.app/)

# 前言

相较于常见的博客搭建框架(如`hexo`，`wordpress`等),这些对于没搭建过博客的小白来说上手容易，只需要对着文档进行操作。但对于需要客制化自己博客的人来说，在框架里面自定义一小段内容，比如一段动画，评论系统以及流量监控等等操作会显得比较麻烦，甚至不如自己搭建一个。所以这个博客项目就此诞生。

# 特点

- ⚡ **快速**: 使用`Next`搭建，实现首屏加载快，无痛路由跳转，文章预加载。文章增删改查通过`CLI`本地操作,方便快捷。
- 🌱 **简单**: 纯前端搭建，无需后端知识,通过`Vercel`部署，部署操作简单易懂，部署时间短，速度快，学习成本极低。
- 🔮 **样式**: 响应式布局，支持移动和 PC 端。自定义 404 页面。简约风，不同设备上的选择性显示内容。

# 规划

- ~~响应式布局~~
- 评论系统
- 流量监控
- 更多有趣的东西....

# 如何使用

1. fork 这个仓库并且本地运行
2. `pnpm i ybg-cli -g` 全局安装博客 CLI
3. 通过`ybg-cli`删除全部文章文件并且写入自己文件。
4. 不喜欢样式，你可以自定义你的样式以及动画等等。
5. 上`Vercel`部署你的博客。

> 如果你喜欢全栈开发，Vercel 官网上也有相关数据库以及全栈开发的教程

## 提醒

关于 CLI，你可以到 CLI 仓库上去查看使用教程 [脚手架仓库](https://github.com/YYGod0120/YBG-cli)
