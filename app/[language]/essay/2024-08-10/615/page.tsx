import Image from "next/image";
import dynamic from "next/dynamic";

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
  const Comment = dynamic(() => import("@/app/[language]/components/Comment"), {
    ssr: false,
  });
  const { t } = await useTranslation(language, "essay-YBG-第十六期");
  return (
    <div>
      <div className="mt-8 flex flex-col items-start rounded-sm bg-white text-lg shadow-lg">
        <span className="px-4 pt-12 text-left text-4xl font-bold text-visit-font md:px-[2.5vw] lg:px-20">
          YBG-第十六期
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Weekly &nbsp; 2024-08-10
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <blockquote>
            <p>{t("0")}</p>
          </blockquote>
          <h2>{t("1")}</h2>
          <ol>
            <li>
              <p>{t("2")}</p>
              <p>
                <a href="https://cloud.tencent.com/developer/article/1940381">
                  {t("3")}
                </a>
              </p>
              <p>
                <a href="https://juejin.cn/post/7075254037431451662">
                  {t("4")}
                </a>
              </p>
              <p>
                <a href="https://m.book118.com/html/2022/0117/5300301240004140.shtm">
                  {t("5")}
                </a>
              </p>
            </li>
            <li>
              <p>{t("6")}</p>
              <p>
                <a href="https://lowcode-engine.cn/site/docs/specs/lowcode-spec">
                  {t("7")}
                </a>
              </p>
              <p>{t("8")}</p>
            </li>
          </ol>
          <h2>{t("9")}</h2>
          <p>{t("10")}</p>
          <p>{t("11")}</p>
          <p>{t("12")}</p>
        </div>
      </div>
      <div className="mt-12 bg-white px-6 py-8">
        <Comment />
      </div>
    </div>
  );
}
