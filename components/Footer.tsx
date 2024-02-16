import { YEARRANGE } from "@/utils/time";
import React from "react";
import Image from "next/image";
import "../styles/hover-underline-animation.css";
export default function Footer() {
  return (
    <div className="mt-5 flex">
      © {YEARRANGE}
      <div className=" ml-6 flex flex-row ">
        <Image src="/github.png" alt="github" width={24} height={24}></Image>
        <a
          href="https://github.com/YYGod0120"
          className=" hover-underline-animation text-default-font no-underline hover:text-default-font"
        >
          YYGod0120
        </a>
      </div>
    </div>
  );
}
