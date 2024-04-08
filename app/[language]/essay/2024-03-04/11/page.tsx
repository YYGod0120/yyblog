
  import Image from "next/image";
import dynamic from "next/dynamic";
  //@ts-ignore
import nodejs from "@/public/imgs/YBG-第五期/nodejs.png"
  // @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "@/app/[language]/essay/essay.css";
export default function Page() {
  const Comment = dynamic(() => import("@/app/[language]/components/Comment"), {
    ssr: false,
  });
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      YBG-第五期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp; &nbsp; 2024-03-04
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>傲不可长，志不可满</p>
</blockquote>
<h2>Technology</h2>
<ol>
<li><p>为每个开发人员以及IT工作者来说非常有用的工具集合网站，包括不仅限于TOKEN生成器,hash文本,加密等等工具。</p>
<p><a href="https://it-tools.tech/">https://it-tools.tech/</a></p>
</li>
<li><p>一些能提升效率的vscode插件。</p>
<p><a href="https://www.freecodecamp.org/news/best-vscode-extensions/?ref=dailydev">https://www.freecodecamp.org/news/best-vscode-extensions/?ref=dailydev</a></p>
</li>
<li><p>React从类组件到Hook，马上又要到compile时代</p>
<p><a href="https://reacttraining.com/blog/react-19-will-be-compiled?ref=dailydev">https://reacttraining.com/blog/react-19-will-be-compiled?ref=dailydev</a></p>
</li>
<li><p>React 2024年的趋势</p>
<p><a href="https://mp.weixin.qq.com/s/s0-7yD_gspgNX7RYvn_wxA">https://mp.weixin.qq.com/s/s0-7yD_gspgNX7RYvn_wxA</a></p>
</li>
<li><p>Vue十年回顾，来自Even You的演讲</p>
<p><a href="https://mp.weixin.qq.com/s/s0-7yD_gspgNX7RYvn_wxA">https://mp.weixin.qq.com/s/s0-7yD_gspgNX7RYvn_wxA</a></p>
</li>
<li><p>Node.js，2023年回顾。</p>
<p><a href="https://blog.rafaelgss.dev/nodejs-2023-year-in-review">https://blog.rafaelgss.dev/nodejs-2023-year-in-review</a></p>
</li>
</ol>
<h2>Study</h2>
<ol>
<li><p><a href="https://typescript-book.vercel.app/zh-cn/?ref=dailydev">《Concise TypeScript Book》</a>: 一本完全开源免费，全面简洁的涵盖了TypeScript功能的电子书，无论你是新手还是经验丰富的开发人员，本书都是增强您对 TypeScript 的理解和熟练程度的宝贵资源。</p>
</li>
<li><p><a href="https://interview.poetries.top/">前端进阶之旅</a>: 不免费，但是内容多，范围广的面试宝典。要说缺点可能就是内容有些比较老，网页优化不行。但总体来说对于准备面试是必不可少的。</p>
</li>
</ol>
<h2>Life</h2>
<ol>
<li><p>本周又接到了一个VUE项目，没使用过VUE，但从这一周的体验来说，至少说还能依葫芦画瓢，不愧是适用于没学过前端的快速上手框架</p>
</li>
<li><p>闲下来的功夫给博客改了点bug以及新增了英语语言，只是翻译还没完全。</p>
<p><a href="https://react.i18next.com/">React-i8next</a> 官方网站居然不支持中文😥</p>
<p><a href="https://locize.com/blog/next-app-dir-i18n/">Next13及以上配置教程</a></p>
</li>
<li><p>NodeJS新官网：<a href="https://beta-node-js-org.vercel.app/en">https://beta-node-js-org.vercel.app/en</a></p>
<Image src={nodejs} alt="nodejs新官网" 
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }} /></li>
</ol>

    </div>
    
  </div>
  <div className="mt-12 py-8 bg-white px-6">
  <Comment />
</div>
    </div>
  );
}