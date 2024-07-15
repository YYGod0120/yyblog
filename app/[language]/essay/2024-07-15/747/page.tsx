
  import Image from "next/image";
import dynamic from "next/dynamic";
  //@ts-ignore
import day1 from "@/public/imgs/YBG-第十三期/day1.png"
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
      YBG-第十三期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp;  2024-07-15
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>实习第一周，痛苦程度由周五向周一递增，周一达到巅峰。</p>
</blockquote>
<h2>Technology/Study</h2>
<ol>
<li><p><a href="https://zh.wikipedia.org/wiki/Hosts%E6%96%87%E4%BB%B6">Hosts文件映射</a>以及<a href="https://blog.csdn.net/huangjuan0229/article/details/131166462">二级域名的作用</a>:我们以后会遇到超级大项目，其中包含多个登录环境多个token和cookies。当我们需要进行本地开发的时候，没法一个一个登录获取对应的cookies的时候，二级域名/多级域名就可以帮我们在线上测试环境中获取到cookies然后在本地的开发环境中实现登录。同时依靠Hosts文件映射到线上环境的同一域名（本地）。</p>
</li>
<li><p><a href="https://juejin.cn/post/7343132138667016231">关于“泳道”</a>:对服务链按需求进行分组复制，并实现逻辑、物理的隔离，使得不同需求的服务链运行在相隔的物理机器上，逻辑上如同游泳场中的泳道。</p>
</li>
<li><p><a href="https://www.patrickzhong.com/TypeScript/">TS手册</a>:重新认识一下ts，这本也算是进阶教程。</p>
</li>
</ol>
<h2>Living/Watching</h2>
<ol>
<li>重温Shameless，尺度虽大，但是不会让人感到不适。每个人都有自己的闪光点，却又很喜欢作死，让人又爱又恨。</li>
</ol>
<h2>Thoughts</h2>
<p>除去两个小时在上班下班路上以及略微离谱的物价，其他地方都挺让我满意的。</p>
<p>一个人住还不用押金的房子，自由且压力小的上班环境，干净整洁的写字楼，略多的工资。其实方方面面还算是可以的。</p>
<p>虽然说是压力不大，但是面对陌生的环境以及大公司带来的压力，还是会有一点无所适从。但终归做的事情与在学校工作室大差不大，多了一点规范，少了一点熟悉。可能是刚开始一周，没有很重的负担，又希望能做不一样的事情的同时又不希望压力太大。</p>
<p>每周最喜欢周五，每天最喜欢下班。</p>
<Image src={day1} alt="下班！" 
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