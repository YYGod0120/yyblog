import { yearRange } from "@/utils/time";
import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="flex">
      © {yearRange}
      <div className=" ml-6 flex-row flex">
        <Image src="/github.png" alt="github" width={24} height={24}></Image>
        <a href="https://github.com/YYGod0120">YYGod0120</a>
      </div>
    </div>
  );
}
