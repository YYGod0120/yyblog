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
  const [windowWidth, setWindowWidth] = useState(1920);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const tags_lg: Tag[] = [
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
  const tags_md: Tag[] = [
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
  ];
  return (
    <div className="bg-white w-[100vw] flex flex-col  items-center ">
      <div className="flex  text-2xl  h-[45px] items-center w-[95vw] lg:w-[900px]">
        <Link
          href="/"
          className="text-visit-font font-bold no-underline hover:text-visit-font w-[350px] text-start"
        >
          YYGod0120
        </Link>
        <div className="flex justify-end space-x-16 text-xl w-[650px] text-default-font">
          {windowWidth > 1024
            ? tags_lg.map((item) => {
                return (
                  <Link
                    className="text-default-font hover:text-visit-font font-semibold no-underline"
                    href={item.href}
                    key={item.name}
                  >
                    {item.name}
                  </Link>
                );
              })
            : tags_md.map((item) => {
                return (
                  <Link
                    className="text-default-font hover:text-visit-font font-semibold no-underline"
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
