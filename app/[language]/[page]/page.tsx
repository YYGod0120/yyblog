import Link from "next/link";
import { DATA } from "@/app/[language]/lib/fileData";
import Paginate from "@/app/[language]/components/Paginate";
import { useTranslation } from "@/app/i18n";

export default async function Home({
  params: { language, page },
}: {
  params: { language: string; page: string };
}) {
  const { t } = await useTranslation(language, "translation");

  const pageNumber = parseInt(page);
  const noWeeklyData = DATA.filter((item) => {
    return item.categories !== "Weekly";
  });
  return (
    <div className="mt-8">
      {noWeeklyData.slice(pageNumber * 5, (pageNumber + 1) * 5).map((file) => (
        <div
          className=" mb-[30px]  cursor-pointer rounded bg-white text-start shadow-lg"
          key={file.id}
        >
          <Link
            href={`/${language}/essay/${file.date}/${file.id}`}
            className="no-underline"
          >
            <div className="px-10 pb-8 pt-8  text-default-font hover:text-visit-font ">
              <div className="mb-4 text-3xl font-bold">{t(file.title)}</div>
              <div className=" text-lg font-bold">
                [{file.date}]&nbsp;&nbsp;{t(file.excerpt)}
              </div>
            </div>
          </Link>
        </div>
      ))}
      <Paginate
        pages={noWeeklyData.length}
        nowPage={pageNumber}
        language={language}
      />
    </div>
  );
}
