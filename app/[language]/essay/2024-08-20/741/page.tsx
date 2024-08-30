import Image from "next/image";
import dynamic from "next/dynamic";
//@ts-ignore
import work from "@/public/imgs/YBG-第十七期/work.png";
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
  const { t } = await useTranslation(language, "essay-YBG-第十七期");
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
            <p>{t("0")}</p>
          </blockquote>
          <blockquote>
            <p>{t("1")}</p>
          </blockquote>
          <h2>{t("2")}</h2>
          <ol>
            <li>
              <p>
                <a href="https://qiangmzsx.github.io/Software-Engineering-at-Google/#/zh-cn/Chapter-1_What_Is_Software_Engineering/Chapter-1_What_Is_Software_Engineering">
                  {t("3")}
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://github.com/arthurfiorette/proposal-safe-assignment-operator">
                  {t("4")}
                </a>
                {t("5")}
              </p>
            </li>
          </ol>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`const \[error\,response\] \?\= await fetch\("xxxxx"\)
`}</SyntaxHighlighter>
          <ol>
            <li>
              <a href="https://viteconf.org/">{t("6")}</a>
              {t("7")}
            </li>
          </ol>
          <h2>{t("8")}</h2>
          <ol>
            <li>
              <p>
                <a href="https://www.infoq.cn/article/7qG56fhYfoH8kceRLC2T">
                  {t("9")}
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://fey.com/marketing/logos">{t("10")}</a>
                {t("11")}
              </p>
            </li>
            <li>
              <p>
                <a href="https://imfile.io/">{t("12")}</a>
              </p>
            </li>
          </ol>
          <h2>{t("13")}</h2>
          <p>{t("14")}</p>
          <ul>
            <li>{t("15")}</li>
            <li>{t("16")}</li>
            <li>{t("17")}</li>
            <li>{t("18")}</li>
          </ul>
          <p>{t("19")}</p>
          <ul>
            <li>{t("20")}</li>
            <li>{t("21")}</li>
            <li>{t("22")}</li>
          </ul>
          <p>
            <Image
              src={work}
              alt="沪漂和北漂"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </p>
          <blockquote>
            <p>{t("23")}</p>
          </blockquote>
          <h2>{t("24")}</h2>
          <p>{t("25")}</p>
          <p>{t("26")}</p>
          <p>{t("27")}</p>
          <p>{t("28")}</p>
          <ul>
            <li>
              <p>
                <a href="https://aisuda.bce.baidu.com/amis/zh-CN/docs/index#%E7%94%A8-json-%E5%86%99%E9%A1%B5%E9%9D%A2%E6%9C%89%E4%BB%80%E4%B9%88%E5%A5%BD%E5%A4%84">
                  {t("29")}
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://lowcode-engine.cn/site/docs/specs/lowcode-spec">
                  {t("30")}
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://v3.ice.work/docs/guide/about/">{t("31")}</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
