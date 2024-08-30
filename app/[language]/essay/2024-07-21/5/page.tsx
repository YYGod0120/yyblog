import Image from "next/image";
import dynamic from "next/dynamic";
//@ts-ignore
import analytics from "@/public/imgs/YBG-第十四期/analytics.png";
//@ts-ignore
import shanghai from "@/public/imgs/YBG-第十四期/shanghai.png";
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
          YBG-第十四期
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Weekly &nbsp; 2024-07-21
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <h2>Technology/Study</h2>
          <ol>
            <li>
              <p>Charles，又认识到一个抓包工具，感觉和fiddler差不多</p>
              <p>
                <a href="https://www.charlesproxy.com/">
                  https://www.charlesproxy.com/
                </a>
              </p>
            </li>
            <li>
              <p>
                关于灰度，一般大公司都有自己的灰度发布策略，不过稍微了解一些也不是不行
              </p>
              <p>
                <a href="https://juejin.cn/post/7152695802509393951">
                  https://juejin.cn/post/7152695802509393951
                </a>
              </p>
            </li>
            <li>
              <p>
                rust，最近挺火的一个语言，以快著称。许多前端打包工具以此为主要语言
              </p>
              <p>
                <a href="https://github.com/Dhghomon/easy_rust">
                  https://github.com/Dhghomon/easy_rust
                </a>
              </p>
              <p>顺便学学英语（英语更是程序员第二语言）</p>
            </li>
          </ol>
          <h2>Living</h2>
          <ul>
            <li>上周给博客上了一个免费的监控流量，就在Vercel上。</li>
          </ul>
          <Image
            src={analytics}
            alt="流量监控"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          <p>
            如果你也有使用Vercel部署的Next项目，只需三步也可以获取免费的流量监控：
          </p>
          <ol>
            <li>
              <p>在Vercel的仪表盘（dashboard）上启用 Analytics</p>
            </li>
            <li>
              <p>
                使用你的包管理器下载 <code>@vercel/analytics</code>
                ，并且加入到你的项目根布局中
              </p>
              <SyntaxHighlighter
                language="typescript"
                style={oneLight}
                showLineNumbers
              >{`   import \{ Analytics \} from '\@vercel\/analytics\/react'\;
   export default function RootLayout\(\{
   children\,
   \}\: \{
   children\: React\.ReactNode\;
   \}\) \{
   return \(
      \<html lang\="en"\>
         \<head\>
         \<title\>Next\.js\<\/title\>
         \<\/head\>
         \<body\>
         \{children\}
         \<Analytics \/\>
         \<\/body\>
      \<\/html\>
   \)\;
   \}
`}</SyntaxHighlighter>
            </li>
            <li>
              <p>重新部署你的项目</p>
            </li>
          </ol>
          <ul>
            <li>
              周末带女朋友去了一下外滩，吃了一顿自助炒菜，体验sososobad，菜品少等菜慢服务态度差。
              <Image
                src={shanghai}
                alt="流量监控"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </li>
          </ul>
          <blockquote>
            <p>
              一座座高楼里的人看着我们，我们望着他们。我们想进去，他们想出来
            </p>
          </blockquote>
          <ul>
            <li>
              Apple TV出品，必属精品，小众高品质美剧《Severance》
              <blockquote>
                <p>
                  在美国的虚构城市基尔市坐落着一家超级大公司路曼工业（Lumon
                  Industries）。该公司开发出一种俗称“分离”（Severance）的记忆分割手术，在内部对员工进行试验。接受手术的员工拥有两种独立的记忆：他们在上班时会忘记外面的一切日常生活与身份，只接受公司严格管理并为其工作；当下班时，员工会恢复日常生活的记忆，对公司内的工作事务一概不知。
                </p>
              </blockquote>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
