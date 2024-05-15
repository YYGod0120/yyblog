"use client";
import { GhostPointer } from "../components/GhostPointer";
import { MyTypeWrite } from "../components/TypeWrite";
function Banner({ language }: { language: string }) {
  return (
    <GhostPointer>
      <MyTypeWrite language={language} />
    </GhostPointer>
  );
}
export default function CategoriesLayout({
  children,
  params: { language },
}: {
  children: React.ReactNode;
  params: { language: string };
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[100vw] ">{Banner({ language: language })}</div>
      <section>{children}</section>
    </div>
  );
}
