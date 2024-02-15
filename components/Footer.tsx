import { YEARRANGE } from "@/utils/time";
import React from "react";
import Image from "next/image";
import "../styles/hover-underline-animation.css";
export default function Footer() {
  return (
    <div className="flex mt-5">
      © {YEARRANGE}
      <div className=" ml-6 flex-row flex ">
        <Image src="/github.png" alt="github" width={24} height={24}></Image>
        <a
          href="https://github.com/YYGod0120"
          className=" text-default-font no-underline hover-underline-animation hover:text-default-font"
        >
          YYGod0120
        </a>
      </div>
    </div>
  );
}
