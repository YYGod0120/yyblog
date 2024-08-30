"use client";
import Giscus from "@giscus/react";

export default function GS({ language }: { language: string }) {
  return (
    <Giscus
      id="comments"
      repo="YYGod0120/yyblog"
      repoId="R_kgDOLBgAWg"
      category="Announcements"
      categoryId="DIC_kwDOLBgAWs4CiD9D"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang={language === "zh-CN" ? "zh-CN" : "en"}
      loading="lazy"
    />
  );
}
