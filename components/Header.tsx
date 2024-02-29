"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GhostPointer } from "./GhostPointer";
import { MyTypeWrite } from "./TypeWrite";
type Tag = {
  name: string;
  href: string;
};
export default function Header() {
  const defaultTags: Tag[] = [
    {
      name: "Categories",
      href: "/categories",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "GitHub",
      href: "https://github.com/YYGod0120",
    },
    {
      name: "Weekly",
      href: "/",
    },
  ];
  const [tags, setTags] = useState<Tag[]>(defaultTags);
  const handleResize = () => {
    window.innerWidth > 1024
      ? setTags(defaultTags)
      : window.innerWidth < 768
        ? setTags(defaultTags.slice(0, 2))
        : setTags(defaultTags.slice(0, 3));
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
          href="/"
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
        </div>
      </div>
      <GhostPointer>
        <MyTypeWrite />
      </GhostPointer>
    </div>
  );
}
