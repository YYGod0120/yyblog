
  import Image from "next/image";
import dynamic from "next/dynamic";
  //@ts-ignore
import 吃 from "@/public/imgs/YBG-第十五期/吃.png"
//@ts-ignore
import follow from "@/public/imgs/YBG-第十五期/follow.png"
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
      YBG-第十五期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp;  2024-07-29
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>好快的一个月</p>
</blockquote>
<h2>Technology/Study</h2>
<ol>
<li><p><a href="https://mp.weixin.qq.com/s/maWrCdMKKQ5ys_4EHNZPFA">JS终于可以倒数数组-ES13中5个最具变革性的JavaScript特性</a></p>
</li>
<li><p>之前公司内部项目中，登录一直是一个大问题，多种多样的系统需要一个集合，那就是SSO:<a href="https://mp.weixin.qq.com/s/DLyCPllFGmbycmgarGsRCA">单点登录（SSO）实现详解！！！</a></p>
</li>
<li><p><a href="https://testerhome.com/topics/30345">LightMerge：</a> 公司多人开发或者开源项目都会采用的一种合并功能分支的技术，类似于自动化合并最新功能的管理功能,用于降低合并分支的时间以及提高合并质量。</p>
</li>
<li><p>直到上周才真正理解到什么是<strong>微前端</strong></p>
<p>简单来说就是通过基座页面将多个业务系统代码通过iframe或者web component等等拼接起来。形成一个大的系统。</p>
<p>这样做的好处是可以无视老项目的技术栈，利于更新迭代，管理项目更加方便，灰度控制更粒度，方便测试等等等等。</p>
<p>但不管是iframe或者qiankun等等微前端实现框架都存在一些问题，如dom割裂以及css隔离问题等等，于是各大厂催生出了各自的微前端方案
如<code>无界</code>以及<code>Garfish</code>.</p>
<p><a href="https://wujie-micro.github.io/doc/guide/">无界</a></p>
<p><a href="https://www.garfishjs.org/">Garfish</a></p>
</li>
<li><p>我们在前端开发的时候总是遇到跨域的问题，而有个办法可以让我们在开发的时候跳过跨域问题，那就是设置一个没有跨域问题的chrome</p>
<p><a href="https://juejin.cn/post/7019171779478290463">设置跨域浏览器</a></p>
</li>
</ol>
<h2>Funnay</h2>
<ol>
<li><p><a href="https://www.cnblogs.com/cmt/p/18302049">博客园官方博客</a></p>
</li>
<li><p><a href="https://mp.weixin.qq.com/s/HSHvCS9bbDjm5cxCjAq45A?poc_token=HN4eo2ajdulmR9QBN6ZpTMq9nQf3wIQL5N3G0Sxw">从您的网站中删除 Polyfill.io</a></p>
</li>
<li><p>2024 ChinaJoy上暴雪联手网易重磅宣布炉石回归，更是带来了能让人直接失忆的补偿。</p>
</li>
</ol>
<h2>Live</h2>
<p>上周末全拿来吃吃吃了：</p>
<Image src={吃} alt="吃吃吃" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} />

<p>上周github新增了好几个follower，都是外国人，似乎外国人都很喜欢follow一堆人？</p>
<Image src={follow} alt="外国友人" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} />

    </div>
    
  </div>
  <div className="mt-12 py-8 bg-white px-6">
  <Comment />
</div>
    </div>
  );
}