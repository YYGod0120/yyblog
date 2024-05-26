"use client";
import { Suspense } from "react";
import { GhostPointer } from "./GhostPointer";
import { MyTypeWrite } from "./TypeWrite";
import { DailyWord } from "@/utils/getDailyWord";
import ErrorBoundary from "./ErrorBoundary";

export function Banner({
  language,
  isGetDailyWord,
  wordsFetch,
}: {
  wordsFetch?: Promise<DailyWord>;
  language: string;
  isGetDailyWord: boolean;
}) {
  return (
    <ErrorBoundary
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
            ⚠️Something went wrong
          </span>
        </GhostPointer>
      }
    >
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
          <MyTypeWrite
            language={language}
            wordsFetch={wordsFetch}
            isGetDailyWord={isGetDailyWord}
          />
        </GhostPointer>
      </Suspense>
    </ErrorBoundary>
  );
}
