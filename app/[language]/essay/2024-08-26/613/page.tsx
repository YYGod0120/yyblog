
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
      YBG-第十八期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp;  2024-08-26
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>春有百花秋有月，夏有凉风冬有雪。若无闲事挂心头，便是人间好时节。</p>
</blockquote>
<h2>Technology/Study</h2>
<ol>
<li><p><a href="https://github.com/remarkjs/remark">remark</a>:不同于之前YBG-cli解析md使用的marked，remark支持更多插件进行md解析，更重要的是remark底层对md文件进行的AST解析，形成更大上层操作空间供我们进行md文件分析。</p>
</li>
<li><p><a href="https://juejin.cn/post/7405239837939548160">关于AST</a></p>
</li>
<li><p><a href="https://github.com/LibreTranslate/LibreTranslate">LibreTranslate</a>:免费和开源的机器翻译 API，完全自托管。与其他 API 不同，它不依赖 Google 或 Azure 等专有提供商来执行翻译。相反，它的翻译引擎由开源的 Argos Translate 库提供支持。</p>
</li>
<li><p><a href="https://blog.glyphdrawing.club/font-with-built-in-syntax-highlighting/">Syntax Highlighting in Hand-Coded Websites</a>:不同于Hightlight.js或者Prism.js的语法高亮库，这个语法高亮是基于字体而非利用js修改dom实现的。</p>
</li>
</ol>
<h2>Game</h2>
<ol>
<li><p>《黑神话·悟空》引爆各大社交平台，几乎全直播平台各大主播都在玩。但似乎有小部分“黑粉”以及外国的无端唱衰粉。只能说树大招风，作为国产的第一款3A大作，值得大力支持。甚至连我家里人都有所耳闻想玩一下，可惜配置不够。</p>
</li>
<li><p>《人狼村之谜》，作为一款老游戏，非常充分的把日本神话历史和当时不出名的狼人杀结合在一起，称之为神作。</p>
</li>
</ol>
<h2>Work/Life</h2>
<p>上班上不停，代码敲不断。</p>
<p>这周主要是对脚手架的底层解析框架给他重构一下，一方面是因为后面估计得在解析文章（md）的基础上做更多事情，比如翻译，文本修改等等。另一方面是觉得之前的marked解析库扩展性太低，年纪太大，用法很不友好甚至有点蠢。所以决定换成remark，支持更多插件，支持分解AST进行解析。
所以先利用remark进行翻译工作的进行，然后再一步一步替换。</p>

    </div>
    
  </div>
  <div className="mt-12 py-8 bg-white px-6">
  <Comment />
</div>
    </div>
  );
}