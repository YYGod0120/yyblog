import "./globals.css";
import Comment from "@/components/Comment";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const roboto = localFont({
  src: "../public/fonts/LXGWWenKaiLite-Light.ttf",
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header></Header>
        <div className="w-[100vw] md:w-[95vw] lg:w-[900px]">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
