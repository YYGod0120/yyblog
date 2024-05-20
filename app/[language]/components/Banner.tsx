"use client";
import { GhostPointer } from "./GhostPointer";
import { MyTypeWrite } from "./TypeWrite";
export function Banner({ language }: { language: string }) {
  return (
    <GhostPointer>
      <MyTypeWrite language={language} />
    </GhostPointer>
  );
}
