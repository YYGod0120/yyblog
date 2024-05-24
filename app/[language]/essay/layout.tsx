import { getDailyWord } from "@/utils/getDailyWord";
import { Banner } from "../components/Banner";

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
        <Banner language={language} wordsFetch={wordsFetch}></Banner>
      </div>
      <section>{children}</section>
    </div>
  );
}
