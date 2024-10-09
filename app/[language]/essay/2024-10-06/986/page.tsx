
  import Image from "next/image";
import dynamic from "next/dynamic";
  //@ts-ignore
import logo from "@/public/imgs/YBG-第二十二期/logo.png"
//@ts-ignore
import flower from "@/public/imgs/YBG-第二十二期/flower.png"
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
  const { t } = await useTranslation(language, "essay-YBG-第二十二期");
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      YBG-第二十二期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp;  2024-10-06
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>{t("0")}</p>
</blockquote>
<blockquote>
<p>{t("1")}</p>
</blockquote>
<h1>{t("2")}</h1>
<ol>
<li>
<p><a href="https://dunkels.com/adam/sentinel-toothpaste/">{t("3")}</a></p>
</li>
<li>
<p><a href="https://www.builder.io/blog/good-vs-bad-refactoring">{t("4")}</a></p>
<ul>
<li>{t("5")}</li>
<li>{t("6")}</li>
<li>{t("7")}</li>
<li>{t("8")}</li>
<li>{t("9")}</li>
</ul>
</li>
<li>
<p><a href="https://voidzero.dev/posts/announcing-voidzero-inc">{t("10")}</a></p>
</li>
</ol>
<h1>{t("11")}</h1>
<ol>
<li><a href="https://meatfighter.com/ascii-silhouettify/spa/index.html#/">{t("12")}</a></li>
</ol>
<p><Image src={logo} alt="LOGO" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} /></p>
<ol>
<li>
<p><a href="https://franzelio.franzai.com/">{t("13")}</a>{t("14")}</p>
</li>
<li>
<p><a href="https://jsdelivr.com/globalping">{t("15")}</a>{t("16")}</p>
</li>
</ol>
<h1>{t("17")}</h1>
<ol>
<li>
<p>{t("18")}</p>
<p>{t("19")}</p>
<p>{t("20")}</p>
</li>
<li>
<p>{t("21")}</p>
<p>{t("22")}</p>
<p>{t("23")}</p>
</li>
</ol>
<p><Image src={flower} alt="月光花谋杀案" 
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