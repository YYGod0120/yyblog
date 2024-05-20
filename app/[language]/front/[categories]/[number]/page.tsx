import Link from "next/link";
import { DATA } from "@/app/[language]/lib/fileData";
import Paginate from "@/app/[language]/components/Paginate";
import "@/styles/error.css";
import { useTranslation } from "@/app/i18n";

export default async function Home({
  params: { language, categories, number },
}: {
  params: Record<"language" | "number" | "categories", string>;
}) {
  const { t } = await useTranslation(language, "translation");
  const pageNumber = parseInt(number);
  const noWeeklyData =
    categories !== "weekly"
      ? DATA.filter((item) => {
          return item.categories !== "Weekly";
        })
      : DATA.filter((item) => {
          return item.categories === "Weekly";
        });
  const sliceData = noWeeklyData.slice(pageNumber * 5, (pageNumber + 1) * 5);
  return (
    <div className="mt-8 ">
      {sliceData.length > 0 ? (
        <div>
          {sliceData.map((file) => (
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
                    [{t(file.date)}]&nbsp;&nbsp;<span>{t(file.excerpt)}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <Paginate
            categories={categories}
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
