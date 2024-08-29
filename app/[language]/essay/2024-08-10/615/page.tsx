
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
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      YBG-第十六期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp;  2024-08-10
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>{t("0")}</p>
</blockquote>
<h2>{t("1")}</h2>
<ol>
<li>
<p>{t("2")}</p>
<p><a href="https://cloud.tencent.com/developer/article/1940381">{t("3")}</a></p>
<p><a href="https://juejin.cn/post/7075254037431451662">{t("4")}</a></p>
<p><a href="https://m.book118.com/html/2022/0117/5300301240004140.shtm">{t("5")}</a></p>
</li>
<li>
<p>{t("6")}</p>
<p><a href="https://lowcode-engine.cn/site/docs/specs/lowcode-spec">{t("7")}</a></p>
<p>{t("8")}</p>
</li>
</ol>
<h2>{t("9")}</h2>
<p>{t("10")}</p>
<p>{t("11")}</p>
<p>{t("12")}</p>
    </div>
    
  </div>
  <div className="mt-12 py-8 bg-white px-6">
  <Comment />
</div>
    </div>
  );
}