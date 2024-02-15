import dayjs from "dayjs";

const THISYEAR = dayjs().format("YYYY");

export const YEARRANGE = `2023 - ${THISYEAR}`;

export function UTCToString(date: string): string {
  return dayjs(date).format("YYYY-MM-DD");
}
