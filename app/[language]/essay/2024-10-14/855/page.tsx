
  import Image from "next/image";
import dynamic from "next/dynamic";
  //@ts-ignore
import wind from "@/public/imgs/YBG-第二十三期/wind.png"
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
  const { t } = await useTranslation(language, "essay-YBG-第二十三期");
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      YBG-第二十三期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp;  2024-10-14
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>{t("0")}</p>
</blockquote>
<h1>{t("1")}</h1>
<ol>
<li>
<p><a href="https://jonny-wei.github.io/blog/architecture/plan/file-transfer.html">{t("2")}</a>{t("3")}</p>
</li>
<li>
<p><a href="https://dbwu.tech/posts/network/what-is-tcp-fast-open/">{t("4")}</a></p>
</li>
<li>
<p><a href="https://github.com/lyc8503/UptimeFlare">{t("5")}</a>{t("6")}</p>
</li>
<li>
<p><a href="https://pagespeed.web.dev/analysis/https-www-yygod0120-com/thaczya416?form_factor=desktop">{t("7")}</a></p>
</li>
<li>
<p><a href="https://juejin.cn/post/7423314983884292134">{t("8")}</a></p>
</li>
</ol>
<h1>{t("9")}</h1>
<ol>
<li>
<p><a href="https://www.163.com/auto/article/BNO805HT000854CH.html">{t("10")}</a></p>
</li>
<li>
<p><a href="https://www.threenhalf.com/">{t("11")}</a></p>
</li>
</ol>
<h1>{t("12")}</h1>
<p>{t("13")}</p>
<p>{t("14")}<Image src={wind} alt="猎凶风河谷" 
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