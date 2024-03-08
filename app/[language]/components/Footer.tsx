import { YEARRANGE } from "@/utils/time";
import React from "react";
import Image from "next/image";

import github from "@/public/github.png";

import "@/styles/hover-underline-animation.css";

export default function Footer() {
  return (
    <div className=" mt-5 flex items-center justify-center">
      <div className="mt-[0.5px] h-[24px] leading-[24px]">© {YEARRANGE}</div>
      <div className=" ml-6 flex flex-row space-x-2 leading-[24px]">
        <Image
          src="/imgs/github.png"
          alt="github"
          width={24}
          height={24}
        ></Image>
        <a
          href="https://github.com/YYGod0120"
          className="hover-underline-animation  text-default-font no-underline"
        >
          YYGod0120
        </a>
      </div>
    </div>
  );
}
