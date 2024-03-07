import { usePathname } from "next/navigation";
import { ReactTyped } from "react-typed";
import { splitPathname } from "@/utils/dealPathname";
import { useTranslation } from "@/app/i18n/client";
export function MyTypeWrite({ language }: { language: string }) {
  const pathname = usePathname();
  const { t } = useTranslation(language);
  const title = splitPathname(pathname);

  return (
    <ReactTyped
      strings={[t(title)]}
      typeSpeed={50}
      style={{
        display: "flex",
        lineHeight: "250px",
        fontSize: "4rem",
        justifyContent: "center",
        color: "white",
      }}
    />
  );
}
