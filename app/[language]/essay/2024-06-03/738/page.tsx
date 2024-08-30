import Image from "next/image";
import dynamic from "next/dynamic";

// @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "@/app/[language]/essay/essay.css";
import GS from "@/app/[language]/components/Gisus";
export default function Page() {
  const Comment = dynamic(() => import("@/app/[language]/components/Comment"), {
    ssr: false,
  });
  return (
    <div>
      <div className="mt-8 flex flex-col items-start rounded-sm bg-white text-lg shadow-lg">
        <span className="px-4 pt-12 text-left text-4xl font-bold text-visit-font md:px-[2.5vw] lg:px-20">
          YBG-第十一期
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Weekly &nbsp; 2024-06-03
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <blockquote>
            <p>一下又断更好久好久好久 不知不觉中又到期末周</p>
          </blockquote>
          <p>一起来看看这段时间又有哪些技术</p>
          <h2>Technology/Study</h2>
          <ol>
            <li>
              <p>随着React19发布，众多框架随之更新迭代。</p>
              <p>
                <a href="https://nextjs.org/blog/next-15-rc">Next15RC</a>
                ：优化水合错误警告，增加React19Api，支持Compiler等等
                <a href="https://nextjs.org/blog/next-15-rc">Astro4.9</a>
              </p>
            </li>
            <li>
              <p>
                Tailwind真的很好用，这里推荐几个更好用的TailwindClass
                <a href="https://mp.weixin.qq.com/s/RtSCz7YnwWxDo6sXWkKIzg">
                  Tailwind Classes
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://mp.weixin.qq.com/s/778hr32KnLFEw7oBNt38sg">
                  一些值得一看的前端代码片段
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://mp.weixin.qq.com/s/d9hAn5ggahyn_9IuqTUYNw">
                  React Conf大会上的五个重要事情
                </a>
                :
              </p>
              <ul>
                <li>React Compiler 开源</li>
                <li>Remix 与 React Router 合并</li>
                <li>React 19 发布首个 RC</li>
                <li>Expo 即将支持通用服务端组件</li>
                <li>React 不会消失</li>
              </ul>
            </li>
            <li>
              <p>
                <a href="https://jakearchibald.com/2024/attributes-vs-properties/">
                  HTML attributes vs DOM properties
                </a>
              </p>
            </li>
            <li>
              <p>
                如果有机会，有能力给React提pr说不定能用上
                <a href="https://legacy.reactjs.org/docs/how-to-contribute.html">
                  How to Contribute
                </a>
              </p>
            </li>
          </ol>
          <h2>Reading/Watching</h2>
          <p>
            <strong>《平凡的世界》</strong>，第一部读完，第二部已经读到一半了。
          </p>
          <p>
            比起第一部，第二部作者视角明显更专注于孙家，从第一部的一穷二白到第二部的稍有起色。证明了时代的洪流相比于个人的努力来的更重要。
          </p>
          <p>
            <strong>选择比努力更重要。</strong>
          </p>
          <p>
            <strong>《美恐》</strong>
            ，胆子小不敢看原剧只能看b站精讲。但是越看越觉得好像没有那么恐怖。
          </p>
          <h2>Living</h2>
          <p>期末周，一边复习一边准备面试。</p>
          <p>希望暑假能获得一段实习，同时也千万别挂科🙌🙌</p>
          <p>
            这段时间代码基本都在试用React19,挺容易上手的,效果也挺明显的就是存在一些bug(不知道是不是我的问题)
            我也出了一篇文章关于
            <a href="https://www.yygod0120.com/en-US/essay/2024-05-26/185">
              React19-BETA食用手册
            </a>
          </p>
        </div>
      </div>
      <div className="mt-12 bg-white px-6 py-8">
        <GS />
      </div>
    </div>
  );
}
