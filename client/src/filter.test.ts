import { test, expect } from "vitest";
import { filterByStatus } from "./filter.js";
import type { Application } from "./application.js";

const applications: Application[] = [
  { company: "Acme", role: "Developer", deadline: "2026-12-04", status: "Applied" },
  { company: "Devdev", role: "SWE", deadline: "2026-11-05", status: "Applied" },
  { company: "Tea", role: "Barista", deadline: "2026-05-11", status: "Not started" },
];

test("filterByStatus keeps only applications with the given status", () => {
  const result = filterByStatus(applications, "Applied");
  expect(result).toEqual([applications[0], applications[1]]);
});
