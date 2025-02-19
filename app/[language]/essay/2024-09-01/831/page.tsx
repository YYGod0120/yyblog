
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
  const { t } = await useTranslation(language, "essay-YBG-第十九期");
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      YBG-第十九期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp;  2024-09-01
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>{t("0")}</p>
</blockquote>
<h2>{t("1")}</h2>
<ol>
<li>
<p><a href="http://kaito-kidd.com/2021/10/15/what-is-the-multi-site-high-availability-design/">{t("2")}</a>{t("3")}</p>
</li>
<li>
<p><a href="https://jonny-wei.github.io/blog/mobile/">{t("4")}</a>{t("5")}</p>
</li>
<li>
<p><a href="https://giscus.app/zh-CN">{t("6")}</a>{t("7")}</p>
</li>
<li>
<p><a href="https://www.ruanyifeng.com/blog/">{t("8")}</a>{t("9")}</p>
</li>
<li>
<p><a href="https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E8%B6%85%E7%BA%A7%E8%AE%BF%E8%B0%88%EF%BC%9A%E5%AF%B9%E8%AF%9D%E5%BC%A0%E9%9B%AA%E5%B3%B0">{t("10")}</a>{t("11")}</p>
</li>
<li>
<p><a href="https://nextjs.org/conf">{t("12")}</a>{t("13")}</p>
</li>
</ol>
<h2>{t("14")}</h2>
<p>{t("15")}<strong>{t("16")}</strong>{t("17")}</p>
<p>{t("18")}</p>
<p>{t("19")}<strong>{t("20")}</strong>{t("21")}</p>
<p>{t("22")}</p>
<h2>{t("23")}</h2>
<p>{t("24")}<code>giscus</code>{t("25")}</p>
<p>{t("26")}<code>AST</code>{t("27")}</p>
    </div>
    
  </div>
    </div>
  );
}