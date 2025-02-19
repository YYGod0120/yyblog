import React from "react";
import { DATA } from "@/app/[language]/lib/fileData";
import { countCategories } from "@/utils/Categories";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";

export default async function Tags({ language }: { language: string }) {
  const tags = countCategories(DATA);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(language, "translation");
  return (
    <div className="mb-5 mt-5 flex cursor-default flex-row">
      {Object.keys(tags).map((tag, index) => {
        return (
          <div key={index} className="  mr-4 text-white ">
            <Link
              className="rounded-l bg-slate-500 px-2 py-1 text-sm text-white  hover:text-default-font"
              href={`#${tag}`}
            >
              {t(tag)}
            </Link>
            <span className="rounded-r bg-black p-1 text-sm">{tags[tag]}</span>
          </div>
        );
      })}
    </div>
  );
}
