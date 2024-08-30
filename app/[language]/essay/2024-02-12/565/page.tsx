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
          YBG-第二期
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Weekly &nbsp; &nbsp; 2024-02-12
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <blockquote>
            <p>这里是每周总结，记录每一周的趣事，技术分享以及学习生活。</p>
          </blockquote>
          <p>在这里祝大家新年快乐~</p>
          <h2>Technology</h2>
          <ol>
            <li>
              <p>utteranc，一个基于 github issue 的评论区组件，比较老了。</p>
              <p>
                <a href="https://utteranc.es/">https://utteranc.es/</a>
              </p>
              <p>新一点评论库的有 gitalk 以及 gitment 等等。</p>
            </li>
            <li>
              <p>Vite 发布 5.1，新增一些运行时 api，还有变得更快了。</p>
              <p>
                <a href="https://vitejs.dev/blog/announcing-vite5-1.html">
                  https://vitejs.dev/blog/announcing-vite5-1.html
                </a>
              </p>
            </li>
            <li>
              <p>
                lodash，一个现代的 JavaScript
                实用程序库，提供模块化，性能和附加功能。
              </p>
              <p>
                <a href="https://github.com/lodash/lodash?tab=readme-ov-file">
                  https://github.com/lodash/lodash?tab=readme-ov-file
                </a>
              </p>
            </li>
            <li>
              <p>
                shields.io，是一种以 SVG
                和光栅格式提供简洁、一致且清晰的徽章的服务，可以轻松包含在
                GitHub 自述文件或任何其他网页中。
              </p>
              <p>
                <a href="https://github.com/badges/shields">
                  https://github.com/badges/shields
                </a>
              </p>
            </li>
            <li>
              <p>css-loaders,一个纯 css 实现加载的动画库。</p>
              <p>
                <a href="https://css-loaders.com/">https://css-loaders.com/</a>
              </p>
            </li>
          </ol>
          <h2>Study</h2>
          <ol>
            <li>
              <p>
                <a href="https://blog.stackademic.com/we-forgot-frontend-basics-2f9a1c4dabaa">
                  We Forgot Frontend Basics
                </a>
                ：我们总是忘记了前端基础知识，例如<code>:empty</code>等等。
              </p>
            </li>
            <li>
              <p>
                <a href="https://medium.com/globant/javascript-optimization-techniques-20d8d167dadd">
                  React &amp; Javascript Optimization Techniques
                </a>
                ：React 和 Javascript 优化技术，除了我们熟知的防抖节流，memo
                函数以及纯函数，其实还有懒加载，虚拟化等等其他优化技术。
              </p>
            </li>
          </ol>
          <h2>Life</h2>
          <ol>
            <li>
              <p>马上要到发压岁钱的年纪了(苦笑</p>
            </li>
            <li>
              <p>
                推荐两部电视剧：台剧-我们与恶的距离以及美剧-无耻之徒，一部是深刻批判当今社会的现状，舆论网暴以及媒体的篡改。另一部是简单的爆米花电视剧，芝加哥版家有儿女(稍微少儿不宜)
              </p>
              <blockquote>
                <p>我们与恶的距离，就在于是声讨恶人，还是声讨恶。</p>
              </blockquote>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
