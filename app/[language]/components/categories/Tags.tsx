import React from "react";
import { DATA } from "@/app/[language]/lib/fileData";
import { countCategories } from "@/utils/Categories";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Tags() {
  const tags = countCategories(DATA);
  return (
    <div className="mb-5 mt-5 flex cursor-default flex-row">
      {Object.keys(tags).map((tag, index) => {
        return (
          <div key={index} className="  mr-4 text-white ">
            <Link
              className="rounded-l bg-slate-500 px-2 py-1 text-sm"
              href={`#${tag}`}
            >
              {tag}
            </Link>
            <span className="rounded-r bg-black p-1 text-sm">{tags[tag]}</span>
          </div>
        );
      })}
    </div>
  );
}
