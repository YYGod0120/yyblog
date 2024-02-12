"use client";
import Link from "next/link";
import { data } from "../app/lib/fileData";
import Paginate from "@/components/paginate";
import { useState } from "react";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(0);
  console.log(data);

  return (
    <div className="mt-8">
      {data.slice(pageNumber * 5, (pageNumber + 1) * 5).map((file, index) => (
        <div
          className="bg-white  cursor-pointer mb-[30px] text-start shadow-lg rounded"
          key={file.id}
        >
          <Link
            href={`/essay/${file.date}/${file.id}`}
            className="no-underline"
          >
            <div className="pt-8 pb-8 px-10  text-default-font hover:text-visit-font ">
              <div className="mb-4 font-bold text-3xl">{file.title}</div>
              <div className=" font-bold text-lg">
                [{file.date}]&nbsp;&nbsp;{file.excerpt}
              </div>
            </div>
          </Link>
        </div>
      ))}
      <Paginate
        pages={data.length}
        nowPage={pageNumber}
        setPage={setPageNumber}
      />
    </div>
  );
}
