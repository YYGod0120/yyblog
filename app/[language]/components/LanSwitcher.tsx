import { useTranslation } from "@/app/i18n";
import Image from "next/image";
import i18n from "@/public/i18n.png";
import Link from "next/link";
export default async function LanSwitcher({ language }: { language: string }) {
  const { t } = await useTranslation(language, "translation");
  return (
    <div>
      <Link
        href={`/${t(language)}/0`}
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
