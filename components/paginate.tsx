"use client";

import React from "react";
type Paginate = {
  pages: number;
  nowPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
export default function Paginate({ pages, nowPage, setPage }: Paginate) {
  const pageItems = Math.floor(pages / 5) + 1;

  const pagesArray = Array.from({ length: pageItems }, (_, index) => index);
  return (
    <div className="text-2xl mt-5 mb-5 flex flex-row items-center justify-center space-x-5 cursor-pointer ">
      {nowPage !== 0 ? (
        <div
          className="hover:font-bold"
          onClick={() => {
            setPage(nowPage - 1);
          }}
        >
          {"＜"}
        </div>
      ) : null}
      {pageItems <= 5
        ? pagesArray.map((_, index) => {
            return (
              <div
                key={index}
                className={index !== nowPage ? "hover:font-bold" : "font-bold"}
                onClick={() => {
                  setPage(index);
                }}
              >
                {index + 1}
              </div>
            );
          })
        : null}
      {nowPage !== pageItems - 1 ? (
        <div
          className="hover:font-bold"
          onClick={() => {
            setPage(nowPage + 1);
          }}
        >
          {"＞"}
        </div>
      ) : null}
    </div>
  );
}
