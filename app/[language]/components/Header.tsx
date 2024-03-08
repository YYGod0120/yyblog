"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { MyTypeWrite } from "./TypeWrite";
import LanSwitcher from "./LanSwitcher";
import { GhostPointer } from "./GhostPointer";
export type Tag = {
  name: string;
  href: string;
};
function Banner({ language }: { language: string }) {
  return (
    <GhostPointer>
      <MyTypeWrite language={language} />
    </GhostPointer>
  );
}
export default function Header({
  menus,
  language,
}: {
  menus: Tag[];
  language: string;
}) {
  const [tags, setTags] = useState<Tag[]>(menus);
  const handleResize = () => {
    window.innerWidth > 1024
      ? setTags(menus)
      : window.innerWidth < 768
        ? setTags(menus.slice(0, 2))
        : setTags(menus.slice(0, 3));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex w-[100vw] flex-col items-center  bg-white ">
      <div className="flex  h-[45px]  w-[95vw] items-center text-2xl lg:w-[900px]">
        <Link
          href={`/${language}/0`}
          className="w-[350px] text-start font-bold text-visit-font no-underline hover:text-visit-font"
        >
          YYGod0120
        </Link>
        <div className="flex w-[650px] justify-end space-x-6 text-xl text-default-font  lg:space-x-16">
          {tags.map((item) => {
            return (
              <Link
                className="font-semibold text-default-font no-underline hover:text-visit-font"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            );
          })}
          <LanSwitcher language={language}></LanSwitcher>
        </div>
      </div>
      {Banner({ language: language })}
    </div>
  );
}
