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
    <div className="mt-5 flex cursor-pointer flex-row items-center justify-center space-x-5 text-2xl ">
      {nowPage !== 0 ? (
        <Link
          href={`/${language}/${nowPage - 1}`}
          className="text-default-font hover:font-bold hover:text-default-font"
        >
          {"＜"}
        </Link>
      ) : null}
      {pageItems <= 5
        ? pagesArray.map((_, index) => {
            return (
              <Link
                href={`/${language}/${index}`}
                key={index}
                className={
                  index !== nowPage
                    ? "text-default-font hover:font-bold hover:text-default-font"
                    : "font-bold text-default-font hover:text-default-font"
                }
              >
                {index + 1}
              </Link>
            );
          })
        : null}
      {nowPage !== pageItems - 1 ? (
        <Link
          className="text-default-font hover:font-bold hover:text-default-font"
          href={`/${language}/${nowPage + 1}`}
        >
          {"＞"}
        </Link>
      ) : null}
    </div>
  );
}
