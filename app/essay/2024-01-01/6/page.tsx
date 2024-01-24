
    import "../../essay.css";
    import Image from "next/image";
    // @ts-ignore
      import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
    // @ts-ignore
    import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
    export default function Page() {
      return (
        <div className=" mt-8 bg-white w-[60vw] flex flex-col items-start text-lg">
          <span className="text-4xl text-left px-24 pt-12 text-visit-font font-bold">
            我的2023
          </span>
          <span className=" text-[#86909C] px-24 pt-5 text-xl mb-5">
            Categories: Life &nbsp; &nbsp; 2024-01-01
          </span>
          <div className="flex text-start flex-col pb-12 px-24 w-[50vw]">
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
<Image src="/imgs/我的2023/music.png" alt="拙劣的模仿" width="700" height="450" />
<Image src="/imgs/我的2023/venue.png" alt="后台管理" width="700" height="450" />

<p>学业方面，没有挂科是基本要求，额外之喜是一份最低等的奖学金。
<Image src="/imgs/我的2023/study.png" alt="学分统计" width="700" height="450" /></p>
<p>在过去的一年里还有很多值得纪念的事情，比如武汉和长沙。
<Image src="/imgs/我的2023/wuhan.JPG" alt="武汉" width="700" height="450" />
<Image src="/imgs/我的2023/changsha.JPG" alt="长沙" width="700" height="450" /></p>
<p>第一本纪念相册，第一次在外面跨年，第一次一个人生病去大医院看病。</p>
<p>最后贴上今年的 Github 总结
<Image src="/imgs/我的2023/YYGod0120.png" alt="github年度总结" width="700" height="450" /></p>
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
        );
      }
    