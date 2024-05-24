"use client";
// import { usePathname } from "next/navigation";
import { ReactTyped } from "react-typed";
import { splitPathname } from "@/utils/dealPathname";
import { useTranslation } from "@/app/i18n/client";
import { Suspense, use } from "react";
import { GhostPointer } from "./GhostPointer";
import { DailyWord } from "@/utils/getDailyWord";
export function MyTypeWrite({
  language,
  wordsFetch,
}: {
  language: string;
  wordsFetch: Promise<DailyWord>;
}) {
  // var pathname = usePathname();
  // const { t } = useTranslation(language, "translation");
  // console.log(wordsFetch);

  const words = use(wordsFetch);
  console.log(wordsFetch, words);
  const word = language === "zh-CN" ? words.note : words.content;
  // var title = splitPathname(pathname);
  return (
    <ReactTyped
      strings={[word]}
      typeSpeed={50}
      style={{
        display: "flex",
        lineHeight: "250px",
        fontSize: "4rem",
        justifyContent: "center",
        color: "white",
      }}
    />
  );
}
