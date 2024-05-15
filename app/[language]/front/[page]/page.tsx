import Link from "next/link";
import { DATA } from "@/app/[language]/lib/fileData";
import Paginate from "@/app/[language]/components/Paginate";
import "@/styles/error.css";
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
  }).slice(pageNumber * 5, (pageNumber + 1) * 5);
  return (
    <div className="mt-8">
      {noWeeklyData.length > 0 ? (
        <div>
          {noWeeklyData.map((file) => (
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
      ) : (
        <div className="flex h-[82vh] flex-row items-center justify-center">
          <div title="404" id="error">
            404
          </div>
        </div>
      )}
    </div>
  );
}
