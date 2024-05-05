import localFont from "next/font/local";
import { Metadata } from "next";

import Header, { Tag } from "@/app/[language]/components/Header";
import Footer from "@/app/[language]/components/Footer";
import { languages } from "@/app/i18n/setting";
import "./globals.css";
import { dir } from "i18next";
import { useTranslation } from "../i18n";

import { SpeedInsights } from "@vercel/speed-insights/next";
const roboto = localFont({
  src: "../../public/fonts/LXGWWenKaiLite-Light.ttf",
  display: "swap",
});
// export async function generateStaticParams() {
//   return languages.map((language) => ({ language }));
// }

// either Static metadata
export const metadata: Metadata = {
  title: "YYGod0120’s Blog",
  description: "这里是记录我的学习，技术以及生活的地方，欢迎大家一起交流讨论",
};

export default async function RootLayout({
  children,
  params: { language },
}: {
  children: React.ReactNode;
  params: { language: string };
}) {
  const { t } = await useTranslation(language);
  const defaultTags: Tag[] = [
    {
      name: t("Categories"),
      href: `/${language}/categories`,
    },
    {
      name: t("About"),
      href: `/${language}/about`,
    },
    {
      name: t("Weekly"),
      href: `/${language}/0`,
    },
  ];
  return (
    <html lang={language} dir={dir(language)}>
      <body className={roboto.className}>
        <Header menus={defaultTags} language={language}></Header>
        <div className="w-[100vw] md:w-[95vw] lg:w-[900px]">{children}</div>
        <Footer></Footer>
        <SpeedInsights />
      </body>
    </html>
  );
}
