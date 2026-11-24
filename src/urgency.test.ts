import { test, expect } from "vitest";
import { getUrgency } from "./urgency.js";

test("getUrgency is None when the status is not Not started, even with a close deadline", () => {
  expect(
    getUrgency(
      { company: "Acme", role: "Developer", deadline: "2026-11-18", status: "Applied" },
      "2026-11-16"
    )
  ).toBe("None");
});

test("getUrgency is closing soon when a Not started deadline is exactly 7 days away", () => {
  expect(
    getUrgency(
      { company: "Acme", role: "Developer", deadline: "2026-11-23", status: "Not started" },
      "2026-11-16"
    )
  ).toBe("Closing soon");
});
