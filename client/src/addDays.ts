export function addDays(start: string, days: number): string {
  const date = new Date(start)
  date.setUTCDate(date.getUTCDate() + days)
  return date.toISOString().slice(0, 10)
}
