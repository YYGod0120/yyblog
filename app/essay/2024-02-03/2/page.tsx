
  
import "../../essay.css";
import Image from "next/image";
// @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
export default function Page() {
  return (
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
      <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
        NewBlog
      </span>
      <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
        Categories: Project &nbsp; &nbsp; 2024-02-03
      </span>
      <div className="flex text-start flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
        <h1>前言</h1>
<p>原本，我利用 Hexo 搭建了一个个人博客，刚开始还挺新鲜的，但慢慢就觉得样式单调，而且我想加入评论以及流量监控很麻烦。所以想着要不自己手写一个，更好控制也能自定义样式。于是 yyblog 就孕育而生</p>
<h1>结构</h1>
<p>整个博客，不仅仅由 yyblog 组成，还有 ybg-cli 脚手架，用于自动创建删除文章以及编译文章。</p>
<ul>
<li><p><strong>yyblog</strong></p>
<ul>
<li>Nextjs</li>
<li>typescript</li>
<li>tailwind</li>
<li>react-syntax-highlighter</li>
</ul>
</li>
<li><p><strong>ybg-cli</strong></p>
<ul>
<li>cac</li>
<li>gray-matter</li>
<li></li>
</ul>
</li>
</ul>

      </div>
    </div>
  );
}