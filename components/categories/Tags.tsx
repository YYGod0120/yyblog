import React from "react";
import { DATA } from "@/app/lib/fileData";
import { countCategories } from "@/utils/Categories";
export default function Tags() {
  const tags = countCategories(DATA);
  return (
    <div className="mt-5 mb-5 flex flex-row cursor-default">
      {Object.keys(tags).map((tag, index) => {
        return (
          <div key={index} className="  text-white mr-4 ">
            <span className=" bg-slate-500 py-1 px-2 rounded-l text-sm">
              {tag}
            </span>
            <span className="bg-black p-1 text-sm rounded-r">{tags[tag]}</span>
          </div>
        );
      })}
    </div>
  );
}
