import React from "react";
import Link from "next/link";

import Tags from "@/components/categories/Tags";

import { countCategories } from "@/utils/Categories";
import { DATA } from "@/app/lib/fileData";

export default function Categories() {
  const tags = countCategories(DATA);
  return (
    <div>
      <Tags />
      {Object.keys(tags).map((tag, index) => {
        return (
          <div
            key={index}
            className=" bg-white px-12 py-6 flex flex-col text-start mt-8 shadow-lg rounded"
          >
            <div className="text-2xl mb-5 font-bold cursor-default">{tag}</div>
            {DATA.filter((item) => {
              return item.categories === tag;
            }).map((article, index) => {
              return (
                <Link
                  href={`/essay/${article.date}/${article.id}`}
                  key={index}
                  className=" no-underline text-default-font hover:text-visit-font"
                >
                  <li className=" text-xl mb-3 ml-3">
                    {`[${article.date}]`}&nbsp;&nbsp;{article.title}
                  </li>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
