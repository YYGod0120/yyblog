import React from "react";
import { DATA } from "@/app/lib/fileData";
import { countCategories } from "@/utils/Categories";
export default function Tags() {
  const tags = countCategories(DATA);
  return (
    <div className="mb-5 mt-5 flex cursor-default flex-row">
      {Object.keys(tags).map((tag, index) => {
        return (
          <div key={index} className="  mr-4 text-white ">
            <span className=" rounded-l bg-slate-500 px-2 py-1 text-sm">
              {tag}
            </span>
            <span className="rounded-r bg-black p-1 text-sm">{tags[tag]}</span>
          </div>
        );
      })}
    </div>
  );
}
