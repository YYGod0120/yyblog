import Link from "next/link";

type Paginate = {
  pages: number;
  nowPage: number;
  language: string;
};
export default function Paginate({ pages, nowPage, language }: Paginate) {
  const pageItems = Math.floor(pages / 5) + 1;

  const pagesArray = Array.from({ length: pageItems }, (_, index) => index);
  return (
    <div className="mt-5 flex  cursor-pointer flex-row items-center justify-center space-x-5 text-2xl ">
      {nowPage !== 0 ? (
        <Link href={`/${language}/${nowPage - 1}`} className="hover:font-bold">
          {"＜"}
        </Link>
      ) : null}
      {pageItems <= 5
        ? pagesArray.map((_, index) => {
            return (
              <Link
                href={`/${language}/${index}`}
                key={index}
                className={index !== nowPage ? "hover:font-bold" : "font-bold"}
              >
                {index + 1}
              </Link>
            );
          })
        : null}
      {nowPage !== pageItems - 1 ? (
        <Link className="hover:font-bold" href={`/${language}/${nowPage + 1}`}>
          {"＞"}
        </Link>
      ) : null}
    </div>
  );
}
