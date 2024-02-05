
  //@ts-ignore
import SparkleMotion from "../../../../public/imgs/[YGB]-第一期/SparkleMotion.gif"
//@ts-ignore
import GhostCursor from "../../../../public/imgs/[YGB]-第一期/GhostCursor.gif"
//@ts-ignore
import gameTime from "../../../../public/imgs/[YGB]-第一期/gameTime.png"
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
        YGB-第一期
      </span>
      <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
        Categories: Weekly &nbsp; &nbsp; 2024-02-05
      </span>
      <div className="flex text-start flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
        <blockquote>
<p>这里是每周总结，记录每一周的趣事，技术分享以及学习生活。</p>
</blockquote>
<p>这个周刊的主要目的就是记录生活，分享技术以及当作一个小小的备忘录。
也希望每周能顺利更新，先浅浅定个 15 期的目标。</p>
<h2>Techology</h2>
<ol>
<li><p>一个有趣的烟花跟随样式</p>
<p><a href="https://codepen.io/leimapapa/pen/XWGMrvo">https://codepen.io/leimapapa/pen/XWGMrvo</a></p>
<Image src={SparkleMotion} alt="Sparkle Motion" 
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }} />
</li>
<li><p>一只有趣的幽灵(也是我博客上的那只)</p>
<p><a href="https://codepen.io/supah/pen/OBbzvp">https://codepen.io/supah/pen/OBbzvp</a></p>
<Image src={GhostCursor} alt="Ghost Cursor" 
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }} />
</li>
<li><p>Shiki：一个类似于 Highlight.js 的语法高亮器。</p>
<p><a href="https://shiki-zh-docs.vercel.app/">https://shiki-zh-docs.vercel.app/</a>
博客用<code>react-syntax-highlighter</code>语法高亮组件,使用 prismjs 或者 highlightjs 进行封装。新旧程度肯定不如 Shiki 新。</p>
</li>
<li><p>一个页面灵感的网站，会点设计对自己开发有不少帮助。
<a href="https://uxchi.notion.site/UI-Inspiration-881b4c0179a74935a3f607ad3521cdb5">https://uxchi.notion.site/UI-Inspiration-881b4c0179a74935a3f607ad3521cdb5</a></p>
</li>
</ol>
<h2>Study</h2>
<ol>
<li><p><a href="https://ishadeed.com/article/target-size#for-designers-delivering-a-clear-target-size-spec">设计更好的目标尺寸</a>：作为用户，我们总是要和按钮，链接以及卡片等等 UI 进行交互，一旦这些东西的大小不对，就会造成很大的困扰。作为前端开发，我们有必要了解一下一些设计方面的知识。</p>
</li>
<li><p><a href="https://arendjr.nl/2023/04/mvp-the-most-valuable-programmer">The Most Valuable Programmer</a>： 如何做一个 MVP 程序员，绝不是写最多的代码，也不是写最有价值的代码，而是成为一个最好的自己。</p>
</li>
</ol>
<h2>Life</h2>
<ol>
<li><p><a href="https://yyblog-gamma.vercel.app/">NewBlog</a>：新博客搭建完备，功能不多，后面再说。预计年前替换之前那个旧博客。对这个博客感兴趣的可以去看看 github 上的代码仓库。</p>
</li>
<li><p>幻兽帕鲁火爆全中国，身边就没有没在玩的。98 大洋购入后 2 天疯玩 20 小时后又感觉索然无味，等后续更新了。</p>
<Image src={gameTime} alt="=game-time" 
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }} /></li>
</ol>

      </div>
    </div>
  );
}