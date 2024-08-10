
  import Image from "next/image";
import dynamic from "next/dynamic";
  
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
      YBG-第十六期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp;  2024-08-10
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>又双叒拖更了🤗</p>
</blockquote>
<h2>Technology/Study</h2>
<ol>
<li><p>关于弱网环境，上上周mt让我调研：</p>
<p><a href="https://cloud.tencent.com/developer/article/1940381">直播环境的弱网优化</a></p>
<p><a href="https://juejin.cn/post/7075254037431451662">小程序离线方案</a></p>
<p><a href="https://m.book118.com/html/2022/0117/5300301240004140.shtm">腾讯TQUIC方案</a></p>
</li>
<li><p>关于低代码平台：最近在用低代码，感觉挺有意思的</p>
<p><a href="https://lowcode-engine.cn/site/docs/specs/lowcode-spec">《低代码引擎搭建协议规范》</a></p>
<p>其实感觉低代码就是画板+组件库</p>
</li>
</ol>
<h2>Life</h2>
<p>上周看完了一部电视剧《人生复本》,是关于多元宇宙的，核心内容其实是选择。人生就是由无数个选择构成的，你选择上大学，选择结婚，选择科研，每一个选择都是不同的人生。你的选择也许不是最完美的选择，但是也正是这种不完美造就了你的完美。</p>
<p>《平凡的世界》算是今年第二本读完的书，和《活着》相比，我觉得他更真实，并没有刻意去对为了体现悲惨而迫害主人公。
《平凡的世界》是一部长篇小说，时间跨度有半个世纪那么大。最让我觉得震撼的是你能清楚的感受到时代浪潮下不同人的变化，少安就是踩到的浪头上改变了孙家的命运。而不管是草民还是领导，你都能感受到时代带给他们的冲击。</p>
<p>对了，这周还领到了人生的第一桶金✌</p>

    </div>
    
  </div>
  <div className="mt-12 py-8 bg-white px-6">
  <Comment />
</div>
    </div>
  );
}