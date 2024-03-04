import React from "react";
import Link from "next/link";

import Tags from "@/app/[language]/components/categories/Tags";

import { countCategories } from "@/utils/Categories";
import { DATA } from "@/app/[language]/lib/fileData";
import { useTranslation } from "@/app/i18n";

export default async function Categories({
  params: { language },
}: {
  params: { language: string };
}) {
  const tags = countCategories(DATA);
  const { t } = await useTranslation(language, "translation");

  return (
    <div>
      <Tags language={language} />
      {Object.keys(tags).map((tag, index) => {
        return (
          <div
            key={index}
            className=" mt-8 flex flex-col rounded bg-white px-3 py-3 text-start shadow-lg lg:px-12 lg:py-6"
            id={tag}
          >
            <div className="mb-5 cursor-default text-2xl font-bold">
              {t(tag)}
            </div>
            {DATA.filter((item) => {
              return item.categories === tag;
            }).map((article, index) => {
              return (
                <Link
                  href={`/essay/${article.date}/${article.id}`}
                  key={index}
                  className="truncate  text-default-font no-underline hover:text-visit-font"
                >
                  <li className=" mb-3  text-xl lg:ml-3">
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
