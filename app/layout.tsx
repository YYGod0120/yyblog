import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const roboto = localFont({
  src: [
    {
      path: "../public/fonts/LXGWWenKailite-Regular.ttf",
      style: "regular",
    },
    {
      path: "../public/fonts/LXGWWenKaiLite-Light.ttf",
      style: "light",
    },
    {
      path: "../public/fonts/LXGWWenKaiLite-Bold.ttf",
      style: "bold",
    },
  ],
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
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
