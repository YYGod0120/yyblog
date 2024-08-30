import { getDailyWord } from "@/utils/getDailyWord";
import { Banner } from "../components/Banner";
import GS from "../components/Gisus";

export default function EssayLayout({
  children,
  params: { language },
}: {
  children: React.ReactNode;
  params: { language: string };
}) {
  const wordsFetch = getDailyWord();
  return (
    <div className="flex flex-col items-center">
      <div className="w-[100vw]">
        <Banner language={language} isGetDailyWord={false}></Banner>
      </div>
      <section>{children}</section>
      <div className="w-[95vw] bg-white px-[2.5vw] pb-12 md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
        <GS language={language} />
      </div>
    </div>
  );
}
