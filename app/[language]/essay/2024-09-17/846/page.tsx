
  import Image from "next/image";
import dynamic from "next/dynamic";
  //@ts-ignore
import yuebin from "@/public/imgs/YBG-第二十一期/yuebin.png"
//@ts-ignore
import dsj from "@/public/imgs/YBG-第二十一期/dsj.png"
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
  const { t } = await useTranslation(language, "essay-YBG-第二十一期");
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      YBG-第二十一期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp;  2024-09-17
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>{t("0")}</p>
</blockquote>
<h2>{t("1")}</h2>
<ol>
<li>
<p><a href="https://blog.vuejs.org/posts/vue-3-5">{t("2")}</a>{t("3")}</p>
</li>
<li>
<p><a href="https://romgrk.com/posts/optimizing-javascript">{t("4")}</a></p>
</li>
<li>
<p><a href="https://github.com/hugeicons/hugeicons-react">{t("5")}</a></p>
</li>
<li>
<p><a href="https://github.com/couriourc/mock_server">{t("6")}</a></p>
</li>
<li>
<p><a href="https://www.debugbear.com/blog/fix-web-performance-devtools">{t("7")}</a></p>
</li>
</ol>
<h2>{t("8")}</h2>
<ol>
<li>
<p><a href="https://www.notionavatarmaker.com/zh">{t("9")}</a></p>
</li>
<li>
<p><a href="https://mp.weixin.qq.com/s/PymBvL8rkeOSDNgzvU814A">{t("10")}</a></p>
</li>
<li>
<p><a href="https://chromewebstore.google.com/detail/b%E7%AB%99%E7%A9%BA%E9%99%8D%E5%8A%A9%E6%89%8B/eaoelafamejbnggahofapllmfhlhajdd?pli=1">{t("11")}</a></p>
</li>
</ol>
<h2>{t("12")}</h2>
<ol>
<li>{t("13")}</li>
</ol>
<p><Image src={yuebin} alt="月饼" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} /></p>
<ol>
<li>{t("14")}</li>
</ol>
<p><Image src={dsj} alt="无罪之最" 
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