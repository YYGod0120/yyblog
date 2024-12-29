
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
  const { t } = await useTranslation(language, "essay-YBG-第二十六期");
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      YBG-第二十六期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp;  2024-12-29
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>{t("0")}</p>
</blockquote>
<p>{t("1")}</p>
<p>{t("2")}</p>
<h1>{t("3")}</h1>
<ol>
<li>
<p><a href="https://jsdevspace.substack.com/p/13-super-useful-chrome-plugins-for">{t("4")}</a></p>
</li>
<li>
<p><a href="https://github.com/web-infra-dev/midscene/blob/main/README.zh.md">{t("5")}</a></p>
</li>
<li>
<p>{t("6")}</p>
<p><a href="https://github.com/WCY-dt/my-github-2024">{t("7")}</a></p>
</li>
<li>
<p><a href="https://github.com/gsidhu/buzee-tauri">{t("8")}</a></p>
</li>
</ol>
<h1>{t("9")}</h1>
<p>{t("10")}</p>
<p>{t("11")}</p>
<p>{t("12")}</p>
<p>{t("13")}</p>
<p>{t("14")}</p>
<p>{t("15")}</p>
<p>{t("16")}</p>
<p>{t("17")}</p>
<p>{t("18")}</p>
<h1>{t("19")}</h1>
<p>{t("20")}<a href="https://lucasfcosta.com/2017/02/17/JavaScript-Errors-and-Stack-Traces.html">{t("21")}</a></p>
<p>{t("22")}</p>
    </div>
    
  </div>
    </div>
  );
}