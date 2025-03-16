---
title: IDE之模拟器
date: 2025-03-16
categories: Technology
excerpt: 简述一下单WebView和多WebView架构下IDE中模拟器的区别
---
> 简单沉淀一下这段时间的学习吧，先从最基本的架构图来展开

# 小程序背景

我们都知道一个小程序是双线程架构，由渲染层和逻辑层组合而成，通过Native层来进行通信操作。如下图所示：

![WX小程序](/imgs/IDE/wxxcx.png)

针对不同的手机设备，其运行环境也不大相同，拿微信小程序来举例子：
- IOS 设备其逻辑层是JavaScriptCore，渲染层是WKWebView
- Android 设备其逻辑层是V8，渲染层是chromium定制内核

而作为一个开发者工具（IDE），我们也需要去一个模拟器去模拟一个小程序，包括其简单的UI，底层API的实现以及双线程架构的模拟。

> Webview 是一个基于webkit的引擎，可以解析DOM 元素，展示html页面的控件，它和浏览器展示页面的原理是相同的。

# 单WebView
其实小程序本质上也是跑在App的WebView里面的，再加上一些App自己的一些底层功能，就构成了一个简单的小程序雏形。
所以一开始模拟器就用一个WebView来承接小程序的渲染层和逻辑层，如下图架构所示：

![单Webview](/imgs/IDE/单webview.png)

单Webview架构通过多个iframe来承接渲染层，逻辑层跑在worker上，再与native层沟通进行Api调用或者数据交换等等操作。

这样做的好处在于开发和维护的成本不高，一套架构可以同时用于Web端以及Electron端，减少了一定的开发成本。

但是这样做也存在一定的缺点，首先是iframe存在跨域的问题，其次是后期接入调试功能的时候，需要对cdf（调试前端）改造很深，开发成本很大。
这里可以简单提一下第二点问题，问题就在于cdf是与整个webview对接导致逻辑层和渲染层传递的信息很冗余，调试困难，需要进行一定的改造才可以去除其他信息。

> 具体的调试功能实现，后面可以再写一篇来细说

# 多WebView

所以这样出现了第二种架构-多Webview，请看架构图：

![多Webview](/imgs/IDE/多webview.png)

从图中可以看出来，无论是渲染层还是逻辑层，我们都通过一个webview来进行承接，这样既可以将各个层解耦，避免调试信息冗余。又可以解决跨域请求问题。更符合真机上一个页面对应一个webview的架构。

但是这样同样失去了可以同时使用在elenctron和web两端的能力，所以需要额外再开发或者直接维护v1版本的模拟器。

# 关于native层

这里可以再简单提一下native层：native层主要是用于模拟真机上的api调用，包括异步以及同步api。

异步api实现较为简单，service层直接请求native层apiManager调用相关api，收到信息后调用返回结果给service层实现异步调用。

同步api实现分为两种，一种是信息类获取，类似 getSystemInfo，可以直接采取service层直接储存一份数据，需要时直接获取。另外一些同步api可以通过同步xhr的方式，调用xhr同步调用apiManager，阻塞等待apiManager调用api结束返回消息实现同步调用。