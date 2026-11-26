import { test, expect } from "vitest";
import { addDays } from "./addDays.js";

test("addDays moves into the next month when the days run past the month end", () => {
  expect(addDays("2026-11-30", 5)).toBe("2026-12-05");
});
