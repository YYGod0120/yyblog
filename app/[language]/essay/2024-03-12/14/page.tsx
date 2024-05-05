
  import Image from "next/image";
import dynamic from "next/dynamic";
  //@ts-ignore
import mkmobile from "@/public/imgs/YBG-第六期/mkmobile.png"
//@ts-ignore
import aiqa from "@/public/imgs/YBG-第六期/aiqa.png"
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
      YBG-第六期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp; &nbsp; 2024-03-12
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>本来这周打算鸽了，想了想还是记录一下吧</p>
</blockquote>
<h2>Technology/Study</h2>
<ol>
<li><p>这周在写i18的时候遇到了一个bug，i18切换语言的时候Header的小幽灵卡住。排查原因后发现是Script组件不会再次执行脚本导致小幽灵卡住。
但是Next的Script组件官方的解释是：</p>
<blockquote>
<p>This script will load and execute when any route in your application is accessed. Next.js will ensure the script will only load once, even if a user navigates between multiple pages.</p>
</blockquote>
<blockquote>
<p>当访问应用程序中的任何路由时，该脚本将加载并执行。 Next.js 将确保脚本仅加载一次，即使用户在多个页面之间导航也是如此。</p>
</blockquote>
<p>我在next仓库中也找到了类似的<a href="https://github.com/vercel/next.js/issues/62303">issue</a></p>
<p>于是乎我放弃了Script的组件，直接将脚本写入了JSX。</p>
</li>
<li><p>一个好用的chrome插件，用来判断你的网页seo的好坏
<a href="https://chromewebstore.google.com/detail/meta-seo-inspector/ibkclpciafdglkjkcibmohobjkcfkaef">https://chromewebstore.google.com/detail/meta-seo-inspector/ibkclpciafdglkjkcibmohobjkcfkaef</a></p>
</li>
<li><p>前段时间发现的一个讲述RSC的博客，内容优质，只是更新太慢了，n久了就更新了一章
<a href="https://jessedit.tech/articles/react-server-components/1-background/">https://jessedit.tech/articles/react-server-components/1-background/</a></p>
</li>
<li><p>Rolldown正式发布： <a href="https://github.com/rolldown/rolldown">https://github.com/rolldown/rolldown</a></p>
</li>
</ol>
<h2>Life</h2>
<ol>
<li><p><a href="https://mp.weixin.qq.com/s/wnOl4iTkVY3HI2wysZck5Q">&quot;为什么往往都是技术合伙人被踢出局&quot;</a></p>
</li>
<li><p>上周去弄了个外服的AppleId，下了个MK-mobile，好像有点上头。</p>
<p><a href="https://zhuanlan.zhihu.com/p/101024418">教程</a></p>
<Image src={mkmobile} alt="游戏" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} />
</li>
<li><p>一个比赛项目最近准备完工，到时候看看写一下技术要点什么的。</p>
<p><a href="https://github.com/YYGod0120/ai-qa">ai-qa</a></p>
<Image src={aiqa} alt="网站截图" 
      sizes="100vw"
      style={{
        width: "100%",
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