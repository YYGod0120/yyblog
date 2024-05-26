"use client";
import { usePathname } from "next/navigation";
import { ReactTyped } from "react-typed";
import { getDailyWord } from "@/utils/getDailyWord";
import { Suspense, use, useState } from "react";
import { DailyWord } from "@/utils/getDailyWord";
import { splitPathname } from "@/utils/dealPathname";
import { useTranslation } from "@/app/i18n/client";
export function MyTypeWrite({
  language,
  isGetDailyWord,
  wordsFetch,
}: {
  language: string;
  isGetDailyWord: boolean;
  wordsFetch?: Promise<DailyWord>;
}) {
  let word;
  const pathName = usePathname();
  const title = splitPathname(pathName);
  const { t } = useTranslation(language, "translations");
  if (isGetDailyWord && wordsFetch) {
    const words = use(wordsFetch);
    word = language === "zh-CN" ? words.note : words.content;
  }
  return (
    <ReactTyped
      strings={!word ? [t(title)] : [word]}
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
