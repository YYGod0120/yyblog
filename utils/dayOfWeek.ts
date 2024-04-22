export function getDayOfWeek(): string {
  const daysOfWeek: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today: Date = new Date();
  const dayIndex: number = today.getDay();

  return daysOfWeek[dayIndex];
}
