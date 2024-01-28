import Link from "next/link";
import React from "react";
import GhostPointer from "./GhostPointer";
type Tag = {
  name: string;
  href: string;
};
export default function Header() {
  const tags: Tag[] = [
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
      href: "https://github.com/YYGod0120",
    },
  ];
  return (
    <div className="bg-white w-[100vw] flex flex-col justify-center items-center ">
      <div className=" flex w-[53vw] justify-between text-2xl felx-row h-[6vh] items-center">
        <Link
          href="/"
          className="text-visit-font font-bold no-underline hover:text-visit-font"
        >
          YYGod0120
        </Link>
        <div className="flex justify-between text-xl w-[28vw] text-default-font">
          {tags.map((item) => {
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
      <GhostPointer></GhostPointer>
    </div>
  );
}
