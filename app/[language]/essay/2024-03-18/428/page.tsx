import Image from "next/image";
import dynamic from "next/dynamic";
//@ts-ignore
import axiosWeak from "@/public/imgs/YBG-第七期/axiosWeak.png";
//@ts-ignore
import font from "@/public/imgs/YBG-第七期/font.png";
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
          YBG-第七期
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Weekly &nbsp; &nbsp; 2024-03-18
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <h2>Technology/Study</h2>
          <ol>
            <li>
              <p>
                这周在写ai-qa遇到post流式响应的问题，但是目前网上好像只有关于axios的get响应流的解决方案。
              </p>
              <Image
                src={axiosWeak}
                alt="github上的closed-issue"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />

              <p>
                <a href="https://stackoverflow.com/questions/71534322/http-stream-using-axios-node-js">
                  HTTP Stream using Axios (Node JS)
                </a>
                只好回到使用Fetch舍去好用的拦截器了
              </p>
            </li>
            <li>
              <p>
                <a href="https://zh.javascript.info/">现代javascript教程</a>
                :不管是老手还是新手，这本教程都会给你带来不一样的对js的理解，基本全文免费，附带练习，由浅入深。
              </p>
            </li>
            <li>
              <p>
                <a href="https://app.diagrams.net/">Draw.io</a>:
                一个专门画原型图，思维导图等流程图的网站，简单上手
              </p>
            </li>
            <li>
              <p>
                <a href="https://atelier-anchor.com/typefaces/smiley-sans">
                  德意黑字体
                </a>
                : 适合广告等等网站的字体
              </p>
              <Image
                src={font}
                alt="github上的closed-issue"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </li>
          </ol>
          <h2>Life</h2>
          <ol>
            <li>
              <p>周刊数目变多，准备再写一个页面专门用来放周刊，想想好的思路</p>
            </li>
            <li>
              <p>
                这周仔细查阅了一下各种不同网络请求库的区别，稍微写了一篇文章。
              </p>
            </li>
            <li>
              <p>
                <a href="https://typescript-book.vercel.app/zh-cn/?ref=dailydev">
                  《Concise TypeScript Book》
                </a>
                在前面周刊中有提到过，花了几天时间读完了。总结来说内容不多，快慢一周左右就能看完，深度较深，不建议没学过或者打算通过这本书来学ts的人来学习。熟悉以及用过ts的人来看这本书会对ts有更深的理解。
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
