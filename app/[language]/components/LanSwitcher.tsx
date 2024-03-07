import { useTranslation } from "@/app/i18n/client";
import i18n from "@/public/i18n.png";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function LanSwitcher({ language }: { language: string }) {
  const pathname = usePathname();
  const { t } = useTranslation(language, "translation");
  const newURL = pathname.replace(`${language}`, `${t(language)}`);

  return (
    <div>
      <Link
        href={`${newURL}`}
        className="flex items-center font-semibold text-default-font no-underline hover:text-visit-font"
      >
        <Image
          src={i18n}
          width={24}
          height={24}
          alt={"i18n"}
          className="mr-3"
        ></Image>
        {t("languageSwitcher")}
      </Link>
    </div>
  );
}
