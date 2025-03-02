
  import Image from "next/image";
import dynamic from "next/dynamic";
  //@ts-ignore
import my2024 from "@/public/imgs/我的2024/my2024.png"
  // @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "@/app/[language]/essay/essay.css";
import { useTranslation } from "@/app/i18n";

export default async function Page({
  params: { language },
}: {
  params: { language: string };
}) {
  const { t } = await useTranslation(language, "essay-我的2024");
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      我的2024
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Life &nbsp;  2025-01-01
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>每年结束都要感概时间过得飞快，一眨眼间又大了一岁。</p>
</blockquote>
<h1>再见，2024</h1>
<p>2024 算是比较平稳的一年，没有什么大风大浪，按部就班的完成每一件我的任务。</p>
<p>针对23年的承诺，除去模糊不清的还是完成的比较好的：找到实习，读了3本书（甚至不包括网络小说🤣），也依旧没有挂科。</p>
<p>阅读：《活着》，《平凡的世界》，《兄弟》，其中我觉得最好看的是《平凡》，从作者的文笔中看出一个时代的变化，从小人物透露出时代带来的冲击。作者描述的人物情感更是细腻，伴随丝丝的遗憾，让人难以忘怀。</p>
<p>实习：美团，小红书。美团是暑假去的，学姐的内推，不过说实话部门挺一般的也没学到啥东西。小红书是暑假找到的，前面还献祭了好几个大厂面试
/(ㄒoㄒ)/~~，好在部门不错，mt不错，干的活我也喜欢。只不过太累太难了一点。</p>
<p>旅游：算上实习的话，上海广州南昌重庆，不知不觉也走过了好多好多城市了，今年也不算是去新城市，上海和广州呆的时间最久，给我的感觉就是上海是新新城市，不愧是发达城市，不管是街边还是郊区，都能感觉到一种城市感。而广州给我带来的就是除了市中心，其他地方其实带有一点乡下的气息，城中村更是如此。不过因此物价也低。不愧是“挂壁”老哥最多的城市。</p>
<p><Image src={my2024} alt="2024" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} /></p>
<h1>你好，2025</h1>
<p>每年都要定下一年的目标，作为一年的任务。就算最终没有达成，但是一定要付出行动</p>
<ol>
<li>
<p>最重要的一件事就是找到一份好工作，结束苦逼的异地恋。</p>
</li>
<li>
<p>攒下第一桶金-1.5w，在年底前</p>
</li>
<li>
<p>来一次出国旅行</p>
</li>
<li>
<p>阅读4本书。</p>
</li>
</ol>
<p><strong>不管什么梦想一定都能实现，你缺的只是那一个动机。而我相信你肯定能听到那个转折点的声音，人的一生不可能只有一种颜色，一定会有突然绚烂的一天。</strong></p>
    </div>
    
  </div>
    </div>
  );
}