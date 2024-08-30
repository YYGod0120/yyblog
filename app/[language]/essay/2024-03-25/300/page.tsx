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
          YBG-第八期
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Weekly &nbsp; &nbsp; 2024-03-25
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <blockquote>
            <p>人之所以活着，是因为活着本身而不是其他任何事物</p>
          </blockquote>
          <h2>Technology/Study</h2>
          <ul>
            <li>
              <p>
                <a href="https://frontendmastery.com/posts/navigating-the-future-of-frontend/">
                  前端的发展趋势
                </a>
              </p>
              <p>从过去到现在，再从现在到未来</p>
            </li>
            <li>
              <p>
                <a href="https://44maker.github.io/wiki/Mac/index.html">
                  配置你的MAC
                </a>
              </p>
              <blockquote>
                <p>还在等我的mac</p>
              </blockquote>
            </li>
            <li>
              <p>
                <a href="https://www.builder.io/blog/visual-copilot">
                  figma转code
                </a>
              </p>
            </li>
          </ul>
          <h2>Life</h2>
          <ul>
            <li>
              <p>前言来自著名作家余华的《活着》，今年要多读书。</p>
            </li>
            <li>
              <p>
                <a href="https://mp.weixin.qq.com/s/VvybP-QW3LiRcaxfcBOekA">
                  NanUI作者被迫转行
                </a>
                生活所迫，没得办法
              </p>
            </li>
            <li>
              <p>
                周末给博客写了一个一键部署，懒得每次都手动提交了。
                <del>文章翻译还是懒得动</del>
              </p>
              <p>
                其实就是读取<code>_blog.json</code>
                下的github地址以及对应分支，提供脚本(主要利用<code>spawn</code>
                实现shell命令)自动提交commit以及push远程。
                加上Vercel的ci就实现了一键部署。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
