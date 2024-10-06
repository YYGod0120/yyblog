
  import Image from "next/image";
import dynamic from "next/dynamic";
  //@ts-ignore
import food from "@/public/imgs/昌城美游/food.png"
//@ts-ignore
import sun from "@/public/imgs/昌城美游/sun.png"
//@ts-ignore
import night from "@/public/imgs/昌城美游/night.png"
//@ts-ignore
import school from "@/public/imgs/昌城美游/school.png"
//@ts-ignore
import deer from "@/public/imgs/昌城美游/deer.png"
//@ts-ignore
import bei from "@/public/imgs/昌城美游/bei.png"
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
  const { t } = await useTranslation(language, "essay-昌城美游");
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      昌城美游
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Life &nbsp;  2024-10-06
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <h1>{t("0")}</h1>
<p>{t("1")}</p>
<p>{t("2")}</p>
<p>{t("3")}</p>
<p><Image src={food} alt="吃喝" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} /></p>
<h1>{t("4")}</h1>
<p>{t("5")}</p>
<p>{t("6")}</p>
<p>{t("7")}</p>
<p><Image src={sun} alt="看！这个阳光" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} /></p>
<hr />
<p><Image src={night} alt="夜景" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} /></p>
<p>{t("8")}</p>
<p><Image src={school} alt="江西师范大学" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} /></p>
<p>{t("9")}</p>
<p><Image src={deer} alt="小鹿" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} /></p>
<p>{t("10")}</p>
<p><Image src={bei} alt="纪念碑" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} /></p>
<p>{t("11")}</p>
<h1>{t("12")}</h1>
<p>{t("13")}</p>
<p>{t("14")}</p>
<p>{t("15")}</p>
<p>{t("16")}</p>
    </div>
    
  </div>
    </div>
  );
}