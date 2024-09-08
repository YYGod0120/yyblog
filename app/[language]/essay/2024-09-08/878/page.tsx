
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
  const { t } = await useTranslation(language, "essay-YBG-第二十期");
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      YBG-第二十期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp;  2024-09-08
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>{t("0")}</p>
</blockquote>
<h2>{t("1")}</h2>
<ol>
<li>
<p><a href="https://github.com/Z4nzu/hackingtool">{t("2")}</a>{t("3")}</p>
</li>
<li>
<p><a href="https://zhuanlan.zhihu.com/p/374777591">{t("4")}</a>{t("5")}</p>
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
<ol start="4">
<li><a href="https://chromewebstore.google.com/detail/%E6%BC%AB%E6%AD%A5-unsplash/jdjjjnfdkhpdppedhjgdcecmmcmklopm">{t("11")}</a>{t("12")}</li>
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