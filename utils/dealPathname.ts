import { DATA } from "@/app/[language]/lib/fileData";
import { languages } from "@/app/i18n/setting";
import { getDayOfWeek } from "./dayOfWeek";
export function splitPathname(path: string): string {
  const part = path.split("/");

  if (languages.indexOf(part[2])) {
    if (part.indexOf("about") !== -1) {
      return "About";
    } else if (part.indexOf("categories") !== -1) {
      return "Categories";
    } else if (part.indexOf("weekly") !== -1) {
      return "Weekly";
    } else if (part.indexOf("front") !== -1) {
      return getDayOfWeek();
    } else if (part.indexOf("essay") !== -1) {
      return (
        DATA.find((i) => {
          return (
            i.date === part[part.length - 2] && i.id === part[part.length - 1]
          );
        })?.title || "404"
      );
    } else {
      return "哎呀，似乎没有你想找的页面";
    }
  }
  return "ERROR";
}
