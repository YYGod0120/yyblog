"use client";
import { Suspense } from "react";
import { GhostPointer } from "./GhostPointer";
import { MyTypeWrite } from "./TypeWrite";
import { ReactTyped } from "react-typed";
import { DailyWord } from "@/utils/getDailyWord";

export function Banner({
  wordsFetch,
  language,
}: {
  wordsFetch: Promise<DailyWord>;
  language: string;
}) {
  return (
    <Suspense
      fallback={
        <GhostPointer>
          <span
            style={{
              display: "flex",
              lineHeight: "250px",
              fontSize: "4rem",
              justifyContent: "center",
              color: "white",
            }}
          >
            Loading...
          </span>
        </GhostPointer>
      }
    >
      <GhostPointer>
        <MyTypeWrite language={language} wordsFetch={wordsFetch} />
      </GhostPointer>
    </Suspense>
  );
}
