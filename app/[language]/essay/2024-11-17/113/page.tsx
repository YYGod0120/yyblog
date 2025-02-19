
  import Image from "next/image";
import dynamic from "next/dynamic";
  //@ts-ignore
import jiesi from "@/public/imgs/YBG-第二十四期/jiesi.png"
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
  const { t } = await useTranslation(language, "essay-YBG-第二十四期");
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      YBG-第二十四期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp;  2024-11-17
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>{t("0")}</p>
</blockquote>
<h1>{t("1")}</h1>
<ol>
<li>
<p><a href="https://evertpot.com/using-top-level-await-is-bc-break/">{t("2")}</a></p>
</li>
<li>
<p><a href="https://moonvy.com/blog/post/2024/migrate-vite-to-rsbuild/">{t("3")}</a></p>
</li>
</ol>
<p>{t("4")}</p>
<ol>
<li>
<p><a href="https://plainvanillaweb.com/blog/articles/2024-08-30-poor-mans-signals/">{t("5")}</a></p>
</li>
<li>
<p><a href="https://github.com/ourongxing/newsnow?tab=readme-ov-file">{t("6")}</a></p>
</li>
<li>
<p><a href="https://www.jonashietala.se/blog/2024/08/25/a_simple_timeline_using_css_flexbox/">{t("7")}</a></p>
</li>
</ol>
<p>{t("8")}</p>
<h1>{t("9")}</h1>
<p>{t("10")}</p>
<p>{t("11")}</p>
<p>{t("12")}</p>
<h1>{t("13")}</h1>
<ol>
<li>
<p>{t("14")}</p>
</li>
<li>
<p>{t("15")}</p>
</li>
</ol>
<p><Image src={jiesi} alt="杰斯-幸存者" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} /></p>
    </div>
    
  </div>
    </div>
  );
}