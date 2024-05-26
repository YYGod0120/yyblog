import { getDailyWord } from "@/utils/getDailyWord";
import { Banner } from "../components/Banner";

export default function AboutLayout({
  children,
  params: { language },
}: {
  children: React.ReactNode;
  params: { language: string };
}) {
  const wordsFetch = getDailyWord();
  return (
    <div className="flex flex-col items-center">
      <div className="w-[100vw] ">
        <div className="w-[100vw]">
          <Banner language={language} isGetDailyWord={false}></Banner>
        </div>
      </div>
      <section className="w-full">{children}</section>
    </div>
  );
}
