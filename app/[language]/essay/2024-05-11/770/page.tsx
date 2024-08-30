import Image from "next/image";
import dynamic from "next/dynamic";

// @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "@/app/[language]/essay/essay.css";
export default function Page() {
  return (
    <div>
      <div className="mt-8 flex flex-col items-start rounded-sm bg-white text-lg shadow-lg">
        <span className="px-4 pt-12 text-left text-4xl font-bold text-visit-font md:px-[2.5vw] lg:px-20">
          YBG-第十期
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Weekly &nbsp; 2024-05-11
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <blockquote>
            <p>
              最近太忙了，学校加外包加七七八八的事情，导致拖欠了好久。
              周刊变月刊😂😂
            </p>
          </blockquote>
          <h2>Technology/Study</h2>
          <ol>
            <li>
              <p>
                React19重磅来袭，快来看看都更新了些什么。
                <a href="https://react.dev/blog/2024/04/25/react-19">
                  官网链接
                </a>
                简单来说两个重大更新点就是Action操作以及form标签，以及一些改进如取消forwardRef(确实很难用),useDeferredValue(初始化渲染值)等等一系列优化。
              </p>
            </li>
            <li>
              <p>
                关于前端框架的转变。
                <a href="https://mp.weixin.qq.com/s/hg2J5cWxb8QrQy2wk7uSrA">
                  译文
                </a>
                MAPS-&gt;PEMAPS-&gt;SPA-&gt;PESPA
              </p>
            </li>
            <li>
              <p>
                你想要的CSS形状集<a href="https://css-shape.com/">CSS Shape</a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://astro.build/blog/astro-480/">Astro 4.8</a>
                ,你也玩上全栈了。
              </p>
            </li>
            <li>
              <p>
                <a href="https://hexo.io/news/2024/04/17/hexo-7-2-0-released/">
                  Hexo 7.2
                </a>
                ,作为老牌博客系统，不仅是我第一个博客使用的框架，我的个人博客或多或少也有借鉴它的地方。
              </p>
            </li>
            <li>
              <p>
                <a href="https://nextjs.org/blog/next-14-2">NextJS 14.2</a>
                ,主要还是一些优化更新，打包工具turbopack以及css的优化。还有就是迎接React19。
                <del>你们真有一腿吧</del>
              </p>
            </li>
          </ol>
          <h2>Reading</h2>
          <p>
            上次读完了《活着》，又入手了《平凡的世界》三部曲，目前快读完了第一部。
            《平凡的世界》给我带来的不同于《活着》的那种痛苦悲惨的活着，而是不断进取，向上生长的活着。它不会带来悲惨甚至绝望的气息，而是像我们一样在茫茫沧海中找寻自己的理想。
          </p>
          <p>
            佛家术语有个词叫： 本自具足。
            <br />
            意思是：自己本就圆满 向外求，常常所求皆苦；
            <br />
            向内觅，往往本自具足。
            <br />
            本自具足，莫向外求。 <br />
            本自具足，何须外求？ <br />
            永远不要拿别人做参照物， 也不要随意抄别人的作业。 <br />
            一个人最好的活法， 就是不要东张西望，
            <br />
            在自己的时区里， 建立自己的坐标系， 活出属于自己的节奏。
          </p>
          <blockquote>
            <p>取自拾遗</p>
          </blockquote>
          <h2>Life</h2>
          <p>
            上周五一，带女朋友旅游了三天的重庆，算半个特种兵吧。
            对川渝还是好感满满，这里的人物景都给人带来热情感。
          </p>
          <p>虽然很忙，但是还是抽空优化了一下博客</p>
          <ul>
            <li>
              图片还是最大的问题，我还是觉得自定义图片大小以及排版更好(虽然更麻烦了)。
            </li>
            <li>
              更新了脚手架的一键编译，不在每次都自动编译全部，而是可以自定义编译文章。
            </li>
            <li>
              给博客加上了<code>&lt;SpeedInsights /&gt;</code>
              ,检测网站性能，但是似乎不是很好。
            </li>
            <li>本来打算使用百度翻译翻译文章，但是对长文章的翻译不友好。</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
