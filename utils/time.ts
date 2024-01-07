import dayjs from "dayjs";

const thisYear = dayjs().format("YYYY");

export const yearRange = `2023 - ${thisYear}`;

export function UTCToString(date: string): string {
  return dayjs(date).format("YYYY-MM-DD");
}
