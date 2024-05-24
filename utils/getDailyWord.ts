import axios from "axios";

export type DailyWord = Record<"sid" | "note" | "content", string>;
export async function getDailyWord(): Promise<DailyWord> {
  const res = await axios.get("http://open.iciba.com/dsapi/");
  return res.data;
}
