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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(language, "essay-YBG-第二十期");
  return (
    <div>
      <div className="mt-8 flex flex-col items-start rounded-sm bg-white text-lg shadow-lg">
        <span className="px-4 pt-12 text-left text-4xl font-bold text-visit-font md:px-[2.5vw] lg:px-20">
          YBG-第二十期
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Weekly &nbsp; 2024-09-08
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <blockquote>
            <p>{t("0")}</p>
          </blockquote>
          <h2>{t("1")}</h2>
          <ol>
            <li>
              <p>
                <a href="https://github.com/Z4nzu/hackingtool">{t("2")}</a>
                {t("3")}
              </p>
            </li>
            <li>
              <p>
                <a href="https://zhuanlan.zhihu.com/p/374777591">{t("4")}</a>
                {t("5")}
              </p>
            </li>
            <li>
              <p>{t("6")}</p>
            </li>
          </ol>
          <ul>
            <li>{t("7")}</li>
            <li>{t("8")}</li>
            <li>{t("9")}</li>
            <li>{t("10")}</li>
          </ul>
          <ol>
            <li>
              <a href="https://chromewebstore.google.com/detail/%E6%BC%AB%E6%AD%A5-unsplash/jdjjjnfdkhpdppedhjgdcecmmcmklopm">
                {t("11")}
              </a>
              {t("12")}
            </li>
          </ol>
          <h2>{t("13")}</h2>
          <ol>
            <li>
              <p>{t("14")}</p>
            </li>
            <li>
              <p>{t("15")}</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
