import Link from "next/link";
import { DATA } from "@/app/[language]/lib/fileData";
import Paginate from "@/app/[language]/components/Paginate";

export default function Home({
  params: { language, page },
}: {
  params: { language: string; page: string };
}) {
  const pageNumber = parseInt(page);
  return (
    <div className="mt-8">
      {DATA.slice(pageNumber * 5, (pageNumber + 1) * 5).map((file, index) => (
        <div
          className=" mb-[30px]  cursor-pointer rounded bg-white text-start shadow-lg"
          key={file.id}
        >
          <Link
            href={`/${language}/essay/${file.date}/${file.id}`}
            className="no-underline"
          >
            <div className="px-10 pb-8 pt-8  text-default-font hover:text-visit-font ">
              <div className="mb-4 text-3xl font-bold">{file.title}</div>
              <div className=" text-lg font-bold">
                [{file.date}]&nbsp;&nbsp;{file.excerpt}
              </div>
            </div>
          </Link>
        </div>
      ))}
      <Paginate pages={DATA.length} nowPage={pageNumber} language={language} />
    </div>
  );
}
