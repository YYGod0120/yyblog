import { Banner } from "../components/Banner";
import { getDailyWord } from "@/utils/getDailyWord";

export default async function FrontLayout({
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
        <Banner
          language={language}
          isGetDailyWord={true}
          wordsFetch={wordsFetch}
        ></Banner>
      </div>
      <section className="w-full">{children}</section>
    </div>
  );
}
