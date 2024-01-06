import Link from "next/link";
import React from "react";
type Tag = {
  name: string;
  href: string;
};
export default function Header() {
  const tags: Tag[] = [
    {
      name: "Cateories",
      href: "/cateories",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Friends",
      href: "/friends",
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
    <div className="bg-white w-full flex items-center justify-center h-16">
      <div className=" flex w-[65vw] justify-between text-2xl ">
        <Link href="/" className="text-visit-font">
          YYGod0120
        </Link>
        <div className="flex justify-between text-xl w-[28vw] text-default-font">
          {tags.map((item) => {
            return (
              <Link
                className="hover:text-visit-font"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
