import { Application } from "./application.js";

function compareDeadlines(a: Application, b: Application): number {
  if (a.deadline < b.deadline) {
    return -1;
  }
  if (a.deadline > b.deadline) {
    return +1;
  }
  return 0;
}

export function sortByDeadline(applications: Application[]): Application[] {
  return [...applications].sort(compareDeadlines);
}
