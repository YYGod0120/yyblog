
  import Image from "next/image";
import dynamic from "next/dynamic";
  //@ts-ignore
import music from "@/public/imgs/我的2023/music.png"
//@ts-ignore
import venue from "@/public/imgs/我的2023/venue.png"
//@ts-ignore
import study from "@/public/imgs/我的2023/study.png"
//@ts-ignore
import wuhan from "@/public/imgs/我的2023/wuhan.JPG"
//@ts-ignore
import changsha from "@/public/imgs/我的2023/changsha.JPG"
//@ts-ignore
import YYGod0120 from "@/public/imgs/我的2023/YYGod0120.png"
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
      我的2023
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Life &nbsp; &nbsp; 2024-01-01
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>这是我的第一篇年末总结。</p>
</blockquote>
<p>2023 年完美谢幕，说不上万事如意，好在结果令人满意。</p>
<p>在过去的一年里：</p>
<ul>
<li>写了二十八篇博客</li>
<li>去了两个城市</li>
<li>看过了六部电影，八部电视剧，零本书</li>
<li>完成了六个前端项目</li>
</ul>
<h1>关于 2023</h1>
<p>今年的成长相比较与去年，好比从 0 到 1 与从 1 到 10 的区别。
年初还是一个刚入门甚至都不算入门的 FEer，到年末成为一名入门级 FEer。
途径无数项目鞭打，有考核的，有学校的甚至还有政府的。</p>
<Image src={music} alt="拙劣的模仿" 
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }} />
<Image src={venue} alt="后台管理" 
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }} />

<p>学业方面，没有挂科是基本要求，额外之喜是一份最低等的奖学金。
<Image src={study} alt="学分统计" 
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }} /></p>
<p>在过去的一年里还有很多值得纪念的事情，比如武汉和长沙。
<Image src={wuhan} alt="武汉" 
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }} />
<Image src={changsha} alt="长沙" 
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }} /></p>
<p>第一本纪念相册，第一次在外面跨年，第一次一个人生病去大医院看病。</p>
<p>最后贴上今年的 Github 总结
<Image src={YYGod0120} alt="github年度总结" 
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }} /></p>
<h1>关于 2024</h1>
<p>新的一年，要有新的期望：</p>
<ul>
<li>身体健康，万事如意</li>
<li>从 10 到 100，好好沉淀</li>
<li>找个大厂实习，接受社会拷打</li>
<li>更爱爱我的人</li>
<li>更加投入到我的健身事业中</li>
<li>读三本书</li>
<li>别挂科</li>
</ul>

    </div>
    
  </div>
  <div className="mt-12 py-8 bg-white px-6">
  <Comment />
</div>
    </div>
  );
}