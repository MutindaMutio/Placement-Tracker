import { test, expect } from "vitest";
import { sortByDeadline } from "./sort.js";
import { Application } from "./application.js";

const applications: Application[] = [
  { company: "Acme", role: "Developer", deadline: "2026-12-04", status: "Applied" },
  { company: "Devdev", role: "SWE", deadline: "2026-11-20", status: "Applied" },
  { company: "Tea", role: "Barista", deadline: "2026-11-21", status: "Not started" },
];

test("sortByDeadline orders applications from earliest deadline to latest", () => {
  const result = sortByDeadline(applications);
  const expected = [applications[1], applications[2], applications[0]];
  expect(result).toEqual(expected);
});

test("sortByDeadline does not reorder the list it is given", () => {
  sortByDeadline(applications);
  expect(applications[0].company).toBe("Acme");
});
