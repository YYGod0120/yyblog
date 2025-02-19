
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
  const { t } = await useTranslation(language, "essay-好久不见");
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      好久不见
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Life &nbsp;  2025-02-19
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <h1>{t("0")}</h1>
<p>{t("1")}</p>
<p>{t("2")}</p>
<p>{t("3")}</p>
<p>{t("4")}<del>{t("5")}</del></p>
<h1>{t("6")}</h1>
<p>{t("7")}</p>
<p>{t("8")}</p>
<h1>{t("9")}</h1>
<p>{t("10")}</p>
<p>{t("11")}</p>
<ul>
<li>{t("12")}</li>
<li>{t("13")}</li>
<li>{t("14")}</li>
</ul>
<p>{t("15")}</p>
    </div>
    
  </div>
    </div>
  );
}