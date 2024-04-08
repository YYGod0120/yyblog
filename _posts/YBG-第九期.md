---
title: YBG-第九期
date: 2024-04-08
categories: Weekly
excerpt: 这里是每周总结，记录每一周的趣事，技术分享以及学习生活。
---

> “一个终日思考的人，得不到除了思想以外的任何东西”

## Technology/Study

1. 做前端开发，难免要与各种APP（qq微信）内置浏览器打交道，如何调试不同的WEBVIEW成了一个难题。

   正常的移动端页面只需要打开控制台转化为手机视窗即可，但是不同APP内置的WebView是魔改的引擎，需要真机调试。这个时候就有几种办法进行调试

   1. 远程调试页面WEBVIEW，Chrome提供了内置的办法[远程调试 WebView](https://developer.chrome.com/docs/devtools/remote-debugging/webviews?hl=zh-cn)
   2. 想要手机查看本地开发环境的页面，起一个本机服务器让手机端访问。

      如果你使用vite的话，可以用`vite dev --host`起一个服务器。
      <img src="/imgs/YBG-第九期/host.png" alt="本地服务器" />
      访问172即可。

2. [vitepress发布1.0](https://blog.vuejs.org/posts/vitepress-1.0)：vitepress是近几年来很火的博客框架，如果你是一个不想动手自定义一个个人博客的话，vitepress是一个很好的上手博客框架

3. [require esm in nodejs](https://joyeecheung.github.io/blog/2024/03/18/require-esm-in-node-js/): 本该早几年就实现的功能，最近才发出实现性功能，作者表示很无奈。

## Reading

1. 来自少数派的一篇文章-[现代打工人如何获得幸福？](https://sspai.com/post/86697)

   在这个卷到窒息的时代，我们是否已经忘记怎么去寻求内心的幸福。

   > 渴望财富自由的穷人，对财富自由的幻想，来自一部分财富自由的富人在过自己想过的生活。富人并不是因为做这些事一定能获得快乐，而是因为他刚好做这件事快乐，而他又很有钱

2. 同样一篇来自少数派的文章-[也许学校根本没有教你如何学习：论什么是真正的自学](https://sspai.com/post/87551)

   不管是学习编程，绘画，唱歌，95%的时间你都要靠你自己自学。中国的应试教育只教会了你对付考试，没教会你如何去学习。

3. 来自陈皓大佬的两篇文章：

   [1. 何为三观](https://coolshell.cn/articles/19085.html)

   [2. 对绩效制度的批判](https://coolshell.cn/articles/17972.html)
