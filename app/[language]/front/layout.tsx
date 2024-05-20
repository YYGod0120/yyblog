import { Banner } from "../components/Banner";

export default function FrontLayout({
  children,
  params: { language },
}: {
  children: React.ReactNode;
  params: { language: string };
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[100vw]">
        <Banner language={language}></Banner>
      </div>
      <section className="w-full">{children}</section>
    </div>
  );
}
