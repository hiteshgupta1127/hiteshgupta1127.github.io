const monthYear = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" });

export function formatMonthYear(isoDate: string) {
  return monthYear.format(new Date(isoDate));
}
