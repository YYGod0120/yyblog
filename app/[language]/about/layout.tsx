import { Banner } from "../components/Banner";

export default function AboutLayout({
  children,
  params: { language },
}: {
  children: React.ReactNode;
  params: { language: string };
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[100vw] ">
        <div className="w-[100vw]">
          <Banner language={language}></Banner>
        </div>
      </div>
      <section>{children}</section>
    </div>
  );
}
