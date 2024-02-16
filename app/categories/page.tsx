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
            className=" mt-8 flex flex-col rounded bg-white px-12 py-6 text-start shadow-lg"
          >
            <div className="mb-5 cursor-default text-2xl font-bold">{tag}</div>
            {DATA.filter((item) => {
              return item.categories === tag;
            }).map((article, index) => {
              return (
                <Link
                  href={`/essay/${article.date}/${article.id}`}
                  key={index}
                  className=" text-default-font no-underline hover:text-visit-font"
                >
                  <li className=" mb-3 ml-3 text-xl">
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
