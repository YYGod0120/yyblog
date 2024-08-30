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
          YBG-第三期
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Weekly &nbsp; &nbsp; 2024-02-19
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <blockquote>
            <p>这里是每周总结，记录每一周的趣事，技术分享以及学习生活。</p>
          </blockquote>
          <p>
            <del>开工</del>开学大吉
          </p>
          <h2>Technology</h2>
          <ol>
            <li>
              <p>每个前端开发者都需要知道的五个CSS2024最新用法：</p>
              <p>
                <a href="https://web.dev/articles/5-css-snippets-every-front-end-developer-should-know-in-2024?hl=zh-cn#csshaspotential-beyond-being-a-parent-selector">
                  https://web.dev/articles/5-css-snippets-every-front-end-developer-should-know-in-2024?hl=zh-cn#csshaspotential-beyond-being-a-parent-selector
                </a>
              </p>
            </li>
            <li>
              <p>一行CSS升级或者增强你的项目:</p>
              <p>
                <a href="https://moderncss.dev/12-modern-css-one-line-upgrades/">
                  https://moderncss.dev/12-modern-css-one-line-upgrades/
                </a>
              </p>
            </li>
            <li>
              <p>React19尚未发布，但是其中的一些Hooks我们先来看看：</p>
              <p>
                <a href="https://sorrycc.com/react-19-new-hooks/">
                  https://sorrycc.com/react-19-new-hooks/
                </a>
              </p>
            </li>
          </ol>
          <h2>Study</h2>
          <ol>
            <li>
              <a href="https://peacockindia.mintlify.app/resources/essential-resources">
                Better Code Practices
              </a>
              ：每一段代码被写出来都需要花费精力去维护，我们能做的就是减少维护的代价
            </li>
          </ol>
          <h2>Life</h2>
          <ol>
            <li>
              <p>
                上周去看了一部电影《飞驰人生2》，
                没看过1其实影响也不大，总体评价还是不错的，值得一看的春节档
              </p>
            </li>
            <li>
              <p>染上了德州扑克，甚至有点想去澳门实地ALL in一把。</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
