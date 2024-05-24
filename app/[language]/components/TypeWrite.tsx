"use client";
// import { usePathname } from "next/navigation";
import { ReactTyped } from "react-typed";
import { Suspense, use } from "react";
import { DailyWord } from "@/utils/getDailyWord";
export function MyTypeWrite({
  language,
  wordsFetch,
}: {
  language: string;
  wordsFetch: Promise<DailyWord>;
}) {
  const words = use(wordsFetch);
  console.log(wordsFetch, words);
  const word = language === "zh-CN" ? words.note : words.content;
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
