
  import Image from "next/image";
import dynamic from "next/dynamic";
  //@ts-ignore
import wxxcx from "@/public/imgs/IDE/wxxcx.png"
//@ts-ignore
import 单webview from "@/public/imgs/IDE/单webview.png"
//@ts-ignore
import 多webview from "@/public/imgs/IDE/多webview.png"
  // @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "@/app/[language]/essay/essay.css";
import { useTranslation } from "@/app/i18n";

export default async function Page({
  params: { language },
}: {
  params: { language: string };
}) {
  const { t } = await useTranslation(language, "essay-IDE之模拟器");
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      IDE之模拟器
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Technology &nbsp;  2025-03-16
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>简单沉淀一下这段时间的学习吧，先从最基本的架构图来展开</p>
</blockquote>
<h1>小程序背景</h1>
<p>我们都知道一个小程序是双线程架构，由渲染层和逻辑层组合而成，通过Native层来进行通信操作。如下图所示：</p>
<p><Image src={wxxcx} alt="WX小程序" 
      sizes="100vw"
      style={{
        marginLeft:'30%',
        marginRight:'30%',
        width: "40%",
        height: 'auto',
      }}/></p>
<p>针对不同的手机设备，其运行环境也不大相同，拿微信小程序来举例子：</p>
<ul>
<li>IOS 设备其逻辑层是JavaScriptCore，渲染层是WKWebView</li>
<li>Android 设备其逻辑层是V8，渲染层是chromium定制内核</li>
</ul>
<p>而作为一个开发者工具（IDE），我们也需要去一个模拟器去模拟一个小程序，包括其简单的UI，底层API的实现以及双线程架构的模拟。</p>
<blockquote>
<p>Webview 是一个基于webkit的引擎，可以解析DOM 元素，展示html页面的控件，它和浏览器展示页面的原理是相同的。</p>
</blockquote>
<h1>单WebView</h1>
<p>其实小程序本质上也是跑在App的WebView里面的，再加上一些App自己的一些底层功能，就构成了一个简单的小程序雏形。
所以一开始模拟器就用一个WebView来承接小程序的渲染层和逻辑层，如下图架构所示：</p>
<p><Image src={单webview} alt="单Webview" 
      sizes="100vw"
      style={{
        marginLeft:'30%',
        marginRight:'30%',
        width: "40%",
        height: 'auto',
      }} /></p>
<p>单Webview架构通过多个iframe来承接渲染层，逻辑层跑在worker上，再与native层沟通进行Api调用或者数据交换等等操作。</p>
<p>这样做的好处在于开发和维护的成本不高，一套架构可以同时用于Web端以及Electron端，减少了一定的开发成本。</p>
<p>但是这样做也存在一定的缺点，首先是iframe存在跨域的问题，其次是后期接入调试功能的时候，需要对cdf（调试前端）改造很深，开发成本很大。
这里可以简单提一下第二点问题，问题就在于cdf是与整个webview对接导致逻辑层和渲染层传递的信息很冗余，调试困难，需要进行一定的改造才可以去除其他信息。</p>
<blockquote>
<p>具体的调试功能实现，后面可以再写一篇来细说</p>
</blockquote>
<h1>多WebView</h1>
<p>所以这样出现了第二种架构-多Webview，请看架构图：</p>
<p><Image src={多webview} alt="多Webview" 
      sizes="100vw"
      style={{
        marginLeft:'30%',
        marginRight:'30%',
        width: "40%",
        height: 'auto',
      }}/></p>
<p>从图中可以看出来，无论是渲染层还是逻辑层，我们都通过一个webview来进行承接，这样既可以将各个层解耦，避免调试信息冗余。又可以解决跨域请求问题。更符合真机上一个页面对应一个webview的架构。</p>
<p>但是这样同样失去了可以同时使用在elenctron和web两端的能力，所以需要额外再开发或者直接维护v1版本的模拟器。</p>
<h1>关于native层</h1>
<p>这里可以再简单提一下native层：native层主要是用于模拟真机上的api调用，包括异步以及同步api。</p>
<p>异步api实现较为简单，service层直接请求native层apiManager调用相关api，收到信息后调用返回结果给service层实现异步调用。</p>
<p>同步api实现分为两种，一种是信息类获取，类似 getSystemInfo，可以直接采取service层直接储存一份数据，需要时直接获取。另外一些同步api可以通过同步xhr的方式，调用xhr同步调用apiManager，阻塞等待apiManager调用api结束返回消息实现同步调用。</p>
    </div>
    
  </div>
    </div>
  );
}