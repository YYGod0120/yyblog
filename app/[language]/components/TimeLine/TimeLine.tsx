import "./TimeLine.css";
import { useTranslation } from "@/app/i18n";
export async function TimeLine({ language }: { language: string }) {
  console.log(language);

  const { t } = await useTranslation(language, "timeline");
  return (
    <div className="timeline">
      <div className="events">
        <div className="event born">
          <svg
            className="marker"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>
          <div className="content">
            <time>{t("1")}</time>
            <div className="text">
              <p>{t("2")}</p>
            </div>
          </div>
        </div>
        <div className="event study">
          <svg
            className="marker"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>
          <div className="content">
            <time>{t("3")}</time>
            <div className="text">
              <p>{t("4")}</p>
            </div>
          </div>
        </div>

        <div className="event work">
          <svg
            className="marker"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>
          <div className="content">
            <time>{t("5")}</time>
            <div className="text">
              <p>{t("6")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
