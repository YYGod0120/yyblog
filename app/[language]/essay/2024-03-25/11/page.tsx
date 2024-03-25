
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
      YBG-第八期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp; &nbsp; 2024-03-25
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>人之所以活着，是因为活着本身而不是其他任何事物</p>
</blockquote>
<h2>Technology/Study</h2>
<ul>
<li><p><a href="https://frontendmastery.com/posts/navigating-the-future-of-frontend/">前端的发展趋势</a></p>
<p>从过去到现在，再从现在到未来</p>
</li>
<li><p><a href="https://44maker.github.io/wiki/Mac/index.html">配置你的MAC</a></p>
<blockquote>
<p>还在等我的mac</p>
</blockquote>
</li>
<li><p><a href="https://www.builder.io/blog/visual-copilot">figma转code</a></p>
</li>
</ul>
<h2>Life</h2>
<ul>
<li><p>前言来自著名作家余华的《活着》，今年要多读书。</p>
</li>
<li><p><a href="https://mp.weixin.qq.com/s/VvybP-QW3LiRcaxfcBOekA">NanUI作者被迫转行</a>
生活所迫，没得办法</p>
</li>
<li><p>周末给博客写了一个一键部署，懒得每次都手动提交了。<del>文章翻译还是懒得动</del></p>
</li>
</ul>

    </div>
    
  </div>
  <div className="mt-12 py-8 bg-white px-6">
  <Comment />
</div>
    </div>
  );
}