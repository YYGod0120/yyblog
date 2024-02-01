import Tags from "@/components/categories/Tags";
import { countCategories } from "@/utils/Categories";
import React from "react";
import { data } from "../lib/fileData";
import Link from "next/link";

export default function Categories() {
  const tags = countCategories(data);
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
            {data
              .filter((item) => {
                return item.categories === tag;
              })
              .map((article, index) => {
                return (
                  <Link
                    href={`/essay/${article.date}/${
                      data.findIndex((item) => article.title === item.title) + 1
                    }`}
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
