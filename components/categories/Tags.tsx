import React from "react";
import { data } from "../../app/lib/fileData";
import { countCategories } from "@/utils/countCategories";
export default function Tags() {
  const tags = countCategories(data);
  return (
    <div className="mt-5 mb-5 flex flex-row ">
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
