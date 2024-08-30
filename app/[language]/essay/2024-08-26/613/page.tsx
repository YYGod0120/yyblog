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
  const { t } = await useTranslation(language, "essay-YBG-第十八期");
  return (
    <div>
      <div className="mt-8 flex flex-col items-start rounded-sm bg-white text-lg shadow-lg">
        <span className="px-4 pt-12 text-left text-4xl font-bold text-visit-font md:px-[2.5vw] lg:px-20">
          YBG-第十八期
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Weekly &nbsp; 2024-08-26
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <blockquote>
            <p>{t("0")}</p>
          </blockquote>
          <h2> {t("1")}</h2>
          <ol>
            <li>
              <p>
                <a href="https://github.com/remarkjs/remark"> {t("2")}</a>
                {t("3")}
              </p>
            </li>
            <li>
              <p>
                <a href="https://juejin.cn/post/7405239837939548160">
                  {" "}
                  {t("4")}
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://github.com/LibreTranslate/LibreTranslate">
                  {t("5")}
                </a>
                {t("6")}
              </p>
            </li>
            <li>
              <p>
                <a href="https://blog.glyphdrawing.club/font-with-built-in-syntax-highlighting/">
                  {t("7")}
                </a>
                {t("8")}
              </p>
            </li>
          </ol>
          <h2> {t("9")}</h2>
          <ol>
            <li>
              <p>{t("10")}</p>
            </li>
            <li>
              <p>{t("11")}</p>
            </li>
          </ol>
          <h2> {t("12")}</h2>
          <p> {t("13")}</p>
          <p>{t("14")}</p>
        </div>
      </div>
    </div>
  );
}
