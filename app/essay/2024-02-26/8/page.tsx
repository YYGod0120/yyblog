
  import Image from "next/image";
import dynamic from "next/dynamic";
  
  // @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "@/app/essay/essay.css";
export default function Page() {
  const Comment = dynamic(() => import("@/components/Comment"), {
    ssr: false,
  });
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      YBG-第四期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp; &nbsp; 2024-02-26
    </span>
    <div className="flex text-start flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>这里是每周总结，记录每一周的趣事，技术分享以及学习生活。</p>
</blockquote>
<p>开学第一周，不知道是寒假太短还是什么，感觉昨天自己还在准备从学校回家，现在却还躺在学校床上。</p>
<h2>Techology</h2>
<ol>
<li><p>Electron 29.0 发布</p>
<p><a href="https://www.electronjs.org/zh/blog/electron-29-0">https://www.electronjs.org/zh/blog/electron-29-0</a></p>
</li>
<li><p>ECMAScript 2024(ES15)将带来哪些新特性
<a href="https://medium.com/@yourfuse/javascript-whats-new-with-ecmascript-2024-es15-ef056d2f4bf1">https://medium.com/@yourfuse/javascript-whats-new-with-ecmascript-2024-es15-ef056d2f4bf1</a>
其中包括新时间api，流水线操作，类元组数据类型等等。</p>
</li>
</ol>
<h2>Study</h2>
<ol>
<li><p><a href="https://juejin.cn/post/7100830429405511710">CSS画多边形及clip-path: polygon()属性原理</a>: 我在项目中遇到了需要多边形，甚至需要圆角多边形的需求，比如说如何画一个<a href="https://juejin.cn/post/7100830429405511710">圆角三角形</a>。</p>
</li>
<li><p><a href="https://www.freecodecamp.org/chinese/news/css-scrollbar-tutorial/">自定义你的滚动条</a>: 同样是项目推动学习，值得注意的是从chrome121开始也同时支持scrollbar-width 和 scrollbar-color 属性。</p>
</li>
</ol>
<h2>Life</h2>
<ol>
<li><p>写了半年多的react，最近接手了一个vue的项目，还是已经停止维护的vue2的项目。ui样式逻辑全部写在一个文件里感觉怪怪的，三四百行找起来也不太舒服。</p>
</li>
<li><p>一个寒假结束，东西没学多少，麻将倒是学了不少，福麻川麻，感觉娱乐活动又要+1了。</p>
</li>
<li><p>TGA2022年度大作-艾尔登法环DLC发布(2024 年 6 月 21 日)。</p>
<p><a href="https://www.bilibili.com/video/BV1YJ4m1s7Na/?spm_id_from=333.337.search-card.all.click&vd_source=274f48b6b0611e27b3026270d8c916a2">https://www.bilibili.com/video/BV1YJ4m1s7Na/?spm_id_from=333.337.search-card.all.click&amp;vd_source=274f48b6b0611e27b3026270d8c916a2</a></p>
</li>
</ol>

    </div>
    
  </div>
  <div className="mt-12 py-8 bg-white px-6">
  <Comment />
</div>
    </div>
  );
}