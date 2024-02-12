import { data } from "@/app/lib/fileData";
export function splitPathname(path: string): string {
  const part = path.split("/");
  const len = part.length;
  if (len <= 2) {
    if (part[0] === "" && part[1] === "") {
      return "Stay humble,Keep moving";
    } else if (part[0] === "" && part[1] === "about") {
      return "About";
    } else if (part[0] === "" && part[1] === "categories") {
      return "Categories";
    } else {
      return "404";
    }
  } else {
    return (
      data.find((i) => {
        return i.id === part[part.length - 1];
      })?.title || "404"
    );
  }
}
