"use client";
import React, { ReactNode } from "react";
import Script from "next/script";
import { SCRIPT } from "@/public/common/ghost";
import "@/styles/ghost-pointer.css";

type GhostPointerProps = {
  children?: ReactNode;
};
function GhostScript(SCRIPT: string) {
  return (
    <Script id="ghost-cursor" strategy="lazyOnload">
      {SCRIPT}
    </Script>
  );
}
export function GhostPointer({ children }: GhostPointerProps) {
  return (
    <div className="hidden h-[250px] w-[100vw] bg-[#2C3E50] md:block">
      <div id="ghost" className="ghost">
        <div className="ghost__head">
          <div className="ghost__eyes"></div>
          <div className="ghost__mouth"></div>
        </div>
        <div className="ghost__tail">
          <div className="ghost__rip"></div>
        </div>
      </div>
      {children}

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="ghost-blur"
            />
            <feColorMatrix
              in="ghost-blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 16 -7"
              result="ghost-gooey"
            />
          </filter>
        </defs>
      </svg>
      {GhostScript(SCRIPT)}
    </div>
  );
}
