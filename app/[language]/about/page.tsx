import { useTranslation } from "@/app/i18n";
import React from "react";
import { TimeLine } from "../components/TimeLine/TimeLine";

export default async function Page({
  params: { language },
}: {
  params: { language: string };
}) {
  const { t } = await useTranslation(language, "translation");

  return (
    <div className="mt-8 flex flex-row items-center bg-white px-4  py-3 shadow-lg">
      <div className=" flex flex-col rounded bg-white  text-start md:px-14 md:py-10 ">
        <div className="mb-5 cursor-default text-3xl font-bold">
          {t("AboutMe")}
        </div>
        <div className="ml-3 text-lg">
          <li className="mb-5">💬 {t("line1")}</li>
          <li className="mb-5">
            👨‍💻 {t("line2")}
            <a
              href="https://redrock.team/"
              className=" hover-underline-animation text-visit-font no-underline"
            >
              {t("official")}
            </a>
          </li>
          <li className="mb-5">
            🤝{t("line3")}
            <a
              href="https://www.google.com/intl/zh-CN_cn/gmail/about/"
              className=" hover-underline-animation text-visit-font no-underline"
            >
              yeyan308911@gmail.com
            </a>
          </li>
          <li className="mb-5">🌱{t("line4")}</li>
        </div>
      </div>
      <TimeLine />
    </div>
  );
}
