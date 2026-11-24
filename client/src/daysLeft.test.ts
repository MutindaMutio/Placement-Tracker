import { test, expect } from "vitest";
import { daysLeft } from "./daysLeft.js";

test("daysLeft counts the days from today until the deadline", () => {
  expect(daysLeft("2026-12-04", "2026-11-16")).toBe(18);
});

test("daysLeft is 0 when the deadline is today", () => {
  expect(daysLeft("2026-11-16", "2026-11-16")).toBe(0);
});

test("daysLeft is negative when the deadline has passed", () => {
  expect(daysLeft("2026-11-10", "2026-11-16")).toBe(-6);
});
