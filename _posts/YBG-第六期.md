---
title: YBG-第六期
date: 2024-03-12
categories: Weekly
excerpt: 这里是每周总结，记录每一周的趣事，技术分享以及学习生活。
---

> 本来这周打算鸽了，想了想还是记录一下吧

## Technology/Study

1. 这周在写i18的时候遇到了一个bug，i18切换语言的时候Header的小幽灵卡住。排查原因后发现是Script组件不会再次执行脚本导致小幽灵卡住。
   但是Next的Script组件官方的解释是：

   > This script will load and execute when any route in your application is accessed. Next.js will ensure the script will only load once, even if a user navigates between multiple pages.

   > 当访问应用程序中的任何路由时，该脚本将加载并执行。 Next.js 将确保脚本仅加载一次，即使用户在多个页面之间导航也是如此。

   我在next仓库中也找到了类似的[issue](https://github.com/vercel/next.js/issues/62303)

   于是乎我放弃了Script的组件，直接将脚本写入了JSX。

2. 一个好用的chrome插件，用来判断你的网页seo的好坏
   https://chromewebstore.google.com/detail/meta-seo-inspector/ibkclpciafdglkjkcibmohobjkcfkaef

3. 前段时间发现的一个讲述RSC的博客，内容优质，只是更新太慢了，n久了就更新了一章
   https://jessedit.tech/articles/react-server-components/1-background/

4. Rolldown正式发布： https://github.com/rolldown/rolldown

## Life

1. ["为什么往往都是技术合伙人被踢出局"](https://mp.weixin.qq.com/s/wnOl4iTkVY3HI2wysZck5Q)

2. 上周去弄了个外服的AppleId，下了个MK-mobile，好像有点上头。

   [教程](https://zhuanlan.zhihu.com/p/101024418)
   <img src="/imgs/YBG-第六期/mkmobile.png" alt="游戏" />

3. 一个比赛项目最近准备完工，到时候看看写一下技术要点什么的。

   [ai-qa](https://github.com/YYGod0120/ai-qa)
   <img src="/imgs/YBG-第六期/aiqa.png" alt="网站截图" />
