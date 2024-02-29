
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
      YBG-第三期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp; &nbsp; 2024-02-19
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>这里是每周总结，记录每一周的趣事，技术分享以及学习生活。</p>
</blockquote>
<p><del>开工</del>开学大吉</p>
<h2>Technology</h2>
<ol>
<li><p>每个前端开发者都需要知道的五个CSS2024最新用法：</p>
<p><a href="https://web.dev/articles/5-css-snippets-every-front-end-developer-should-know-in-2024?hl=zh-cn#csshaspotential-beyond-being-a-parent-selector">https://web.dev/articles/5-css-snippets-every-front-end-developer-should-know-in-2024?hl=zh-cn#csshaspotential-beyond-being-a-parent-selector</a></p>
</li>
<li><p>一行CSS升级或者增强你的项目:</p>
<p><a href="https://moderncss.dev/12-modern-css-one-line-upgrades/">https://moderncss.dev/12-modern-css-one-line-upgrades/</a></p>
</li>
<li><p>React19尚未发布，但是其中的一些Hooks我们先来看看：</p>
<p><a href="https://sorrycc.com/react-19-new-hooks/">https://sorrycc.com/react-19-new-hooks/</a></p>
</li>
</ol>
<h2>Study</h2>
<ol>
<li><a href="https://peacockindia.mintlify.app/resources/essential-resources">Better Code Practices</a>：每一段代码被写出来都需要花费精力去维护，我们能做的就是减少维护的代价</li>
</ol>
<h2>Life</h2>
<ol>
<li><p>上周去看了一部电影《飞驰人生2》， 没看过1其实影响也不大，总体评价还是不错的，值得一看的春节档</p>
</li>
<li><p>染上了德州扑克，甚至有点想去澳门实地ALL in一把。</p>
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