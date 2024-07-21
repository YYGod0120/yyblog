---
title: YBG-第十四期
date: 2024-07-21
categories: Weekly
excerpt: 这里是每周总结，记录每一周的趣事，技术分享以及学习生活。
---

## Technology/Study

1. Charles，又认识到一个抓包工具，感觉和fiddler差不多

   https://www.charlesproxy.com/

2. 关于灰度，一般大公司都有自己的灰度发布策略，不过稍微了解一些也不是不行

   https://juejin.cn/post/7152695802509393951

3. rust，最近挺火的一个语言，以快著称。许多前端打包工具以此为主要语言

   https://github.com/Dhghomon/easy_rust

   顺便学学英语（英语更是程序员第二语言）

## Living

- 上周给博客上了一个免费的监控流量，就在Vercel上。

<img src="/imgs/YBG-第十四期/analytics.png" alt="流量监控" />

如果你也有使用Vercel部署的Next项目，只需三步也可以获取免费的流量监控：

1.  在Vercel的仪表盘（dashboard）上启用 Analytics

2.  使用你的包管理器下载 `@vercel/analytics`，并且加入到你的项目根布局中

    ```typescript
       import { Analytics } from '@vercel/analytics/react';
       export default function RootLayout({
       children,
       }: {
       children: React.ReactNode;
       }) {
       return (
          <html lang="en">
             <head>
             <title>Next.js</title>
             </head>
             <body>
             {children}
             <Analytics />
             </body>
          </html>
       );
       }
    ```

3.  重新部署你的项目

- 周末带女朋友去了一下外滩，吃了一顿自助炒菜，体验sososobad，菜品少等菜慢服务态度差。
  <img src="/imgs/YBG-第十四期/shanghai.png" alt="流量监控" />

> 一座座高楼里的人看着我们，我们望着他们。我们想进去，他们想出来

- Apple TV出品，必属精品，小众高品质美剧《Severance》
  > 在美国的虚构城市基尔市坐落着一家超级大公司路曼工业（Lumon Industries）。该公司开发出一种俗称“分离”（Severance）的记忆分割手术，在内部对员工进行试验。接受手术的员工拥有两种独立的记忆：他们在上班时会忘记外面的一切日常生活与身份，只接受公司严格管理并为其工作；当下班时，员工会恢复日常生活的记忆，对公司内的工作事务一概不知。
