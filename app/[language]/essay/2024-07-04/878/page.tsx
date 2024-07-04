
  import Image from "next/image";
import dynamic from "next/dynamic";
  //@ts-ignore
import meituan from "@/public/imgs/YBG-第十二期/meituan.png"
//@ts-ignore
import gitsheet from "@/public/imgs/YBG-第十二期/gitsheet.png"
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
      YBG-第十二期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp;  2024-07-04
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>没有为结束的期末考试感到悲伤，立即来到的是暑期实习</p>
</blockquote>
<p>【✔】找个大厂实习，接受社会拷打</p>
<Image src={meituan} alt="美团实习" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} />

<h2>Technology/Study</h2>
<ol>
<li><p>一张git详解表：</p>
<Image src={gitsheet} alt="美团实习" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} />
</li>
<li><p><a href="https://indiehackertools.net/">程序员不得不爱上的工具箱合集</a></p>
</li>
<li><p>想写写小网站却又没有好用的api，这个你可能需要。<a href="https://publicapis.io/">一些公开的api集合</a></p>
</li>
<li><p>感受一下Google的CR，马上实习也将不得不被CR.<a href="https://dub.sh/crcr">googleCR指引</a></p>
</li>
<li><p>当你想稍后再看某个页面，或者单纯想做个总结摘抄。可以来看看这个<a href="https://hoarder.app/">App</a></p>
</li>
<li><p>TypeScript5.5 Beta，快来看看有什么能用上的技术。
<a href="https://devblogs.microsoft.com/typescript/announcing-typescript-5-5-beta/">Announcing TypeScript 5.5 Beta</a></p>
</li>
</ol>
<h2>Living/Watching</h2>
<ol>
<li><p>The Boys(黑袍纠察队)S4已经开播5集，集集追，只能说一样的黄暴，但是限制于原著内容少，已经不足以支撑电视剧的体量，不得不扩充原创支线内容导致节奏缓慢，看的想睡觉。但是黑色幽默和大尺度镜头还是值得一看</p>
</li>
<li><p>暑假要把平凡的世界读完，如果可以还想看看一些名人的自传</p>
</li>
</ol>
<h2>Talking</h2>
<p>其实美团实习是预料之外，四月份就学姐已经把我内推到上海美团，但是由于还没来得及准备加上外包折磨，于是我延期到5月份再说。
本以为已经没消息了，可是五月末突然又问我还在不在找工作，约了面试。</p>
<p>然而首次面试面试官就迟到，甚至还只面试了20min，是的你没听错，美团一面就面试20min。这一度让我觉得100%是kpi，但是一天后还是约了二面。</p>
<p>二面也一样抽象的就面试了40min就结束了。让我觉得不可思议也无法理解，认为100%凉了。
但是最后还是发了offer。</p>
<p>只能说找实习其实运气成分占比很大，有的是不是你的技术不行而是没有位置而已。</p>
<p>其实在美团一面结束后，我又投了字节的内推，但是很可惜，二面就凉了。一方面是自己确实答得不好，一方面可能是岗位的需求和我能力不是很匹配。只能说很可惜。</p>
<p>字节二面面试官说：<strong>其实实习生不需要什么所谓的核心竞争力，只要你把你接触的项目读懂，把代码水平提高。能读懂，写好代码，是一个实习生最需要做到的事情。</strong></p>
<p>只能说美团实习是一段新的旅程，希望能走的稳，走的远。</p>

    </div>
    
  </div>
  <div className="mt-12 py-8 bg-white px-6">
  <Comment />
</div>
    </div>
  );
}