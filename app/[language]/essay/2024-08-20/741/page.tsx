import Image from "next/image";
import dynamic from "next/dynamic";
//@ts-ignore
import work from "@/public/imgs/YBG-第十七期/work.png";
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
      <div className="mt-8 flex flex-col items-start rounded-sm bg-white text-lg shadow-lg">
        <span className="px-4 pt-12 text-left text-4xl font-bold text-visit-font md:px-[2.5vw] lg:px-20">
          YBG-第十七期
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Weekly &nbsp; 2024-08-20
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <blockquote>
            <p>好像不知不觉又拖更了几天</p>
          </blockquote>
          <blockquote>
            <p>来我们来看看这一周有啥好玩的东西(这期无图，流量党狂喜)</p>
          </blockquote>
          <h2>Technology/Study</h2>
          <ol>
            <li>
              <p>
                <a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-1_What_Is_Software_Engineering/Chapter-1_What_Is_Software_Engineering">
                  来自谷歌的一本关于软件工程的双语对照书
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://github.com/arthurfiorette/proposal-safe-assignment-operator">
                  ECMAScript一个有趣的提案
                </a>
                :
              </p>
            </li>
          </ol>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`const \[error\,response\] \?\= await fetch\("xxxxx"\)`}</SyntaxHighlighter>
          <ol start={3}>
            <li>
              <a href="https://viteconf.org/">ViteConf 公布演讲者名单</a>:
              几乎JS生态系统中的所有有趣项目的创建者和维护者都会参与，将在10月3号线上举行
            </li>
          </ol>
          <h2>Funnay</h2>
          <ol>
            <li>
              <p>
                <a href="https://www.infoq.cn/article/7qG56fhYfoH8kceRLC2T">
                  GitHub 全球性宕机
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://fey.com/marketing/logos">
                  3613 个公司高清 Logo 的收集网站
                </a>
                :不过似乎没找到一些国内的公司的logo
              </p>
            </li>
            <li>
              <p>
                <a href="https://imfile.io/">有下载的需求可以试试 imFile</a>
              </p>
            </li>
          </ol>
          <h2>Other</h2>
          <p>来看看厦门一些神仙公司：</p>
          <ul>
            <li>
              翼华科技：海景办公室，弹性工作时间，不打卡，六险一金（额外补充商业保险），年度体检，逢年过节礼物卡，每日下午茶，超长年假+带薪病假，关键员工持股计划
              -
              玲盛：弹性工作时间，不打卡，可长期居家办公，15~20天年假，免费班车，午餐补助，提供下午茶和休闲零食，14
              薪起
            </li>
            <li>
              梦加网络：少数招聘专科且福利尚可的游戏公司（面向海外），六险一金，餐补，人才补贴，五折租房，班车，团队奖金，项目奖金，普级涨薪
            </li>
            <li>
              ABB
              中国：包吃住，班车接送，定期体检，五险一金（补充医疗保险），额外还有各种补贴（工龄奖、全勤奖、加班补助，奖金提成），节日福利，16~17
              薪
            </li>
          </ul>
          <p>一些互联网气息重的公司/半仙公司：</p>
          <ul>
            <li>
              美图：超有竞争力的薪资水平季度奖，岗位多，项目奖，季度奖，5 天 7.5
              小时工作制，带薪病假，团建丰富，每月部门有活动经费，15 薪
            </li>
            <li>
              海豹信息（他趣）：有竞争力的薪资水平，六险一金，婚育礼金，团建旅游，节日礼品，健身房，瑜伽房，绩效奖金，定期普调，13
              薪
            </li>
            <li>
              美柚：有竞争力的薪资水平，女性友好型公司，带薪病假，节日福利，妇女节及姨妈假关怀，丰富团建，14
              薪
            </li>
          </ul>
          <Image
            src={work}
            alt="沪漂与北漂"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          <blockquote>
            <p>北漂和沪泊看来不只是说说而已😮‍💨</p>
          </blockquote>
          <h2>Live/Work</h2>
          <p>上周请了两天假回了趟家，算是放了一个小长假休息了一段时间。</p>
          <p>
            除去玩的时间，剩下在公司的时间除了切切表单，就是看看公司的文档，做了做调研。
          </p>
          <p>
            值得一说的是关于低代码，之前只是听说并没有实际上用过。而上两周利用公司低代码平台实地开发了一下表单，感觉还行，没有那么难用。主要还是关于一些组件库的使用。
          </p>
          <p>
            这里是一些我收集的一些低代码平台（开源），想着有空去看看实现源码了解一下：
          </p>
          <ul>
            <li>
              <p>
                <a href="https://aisuda.bce.baidu.com/amis/zh-CN/docs/index#%E7%94%A8-json-%E5%86%99%E9%A1%B5%E9%9D%A2%E6%9C%89%E4%BB%80%E4%B9%88%E5%A5%BD%E5%A4%84">
                  百度amis
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://lowcode-engine.cn/site/docs/specs/lowcode-spec">
                  阿里低代码引擎：低代码核心
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://v3.ice.work/docs/guide/about/">
                  飞冰:生成源码型
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 bg-white px-6 py-8">
        <Comment />
      </div>
    </div>
  );
}
