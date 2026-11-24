import type { Application } from "./application.js";
import { daysLeft } from "./daysLeft.js";

export type Urgency = "Closing soon" | "Passed" | "None"

const CLOSING_SOON_DAYS = 7;

export function getUrgency(application: Application, today: string): Urgency {
    if (application.status !== "Not started") {
        return "None";
    }
    const days = daysLeft(application.deadline, today);
    if (days < 0) {
        return "Passed";
    }
    if (days <= CLOSING_SOON_DAYS) {
        return "Closing soon";
    }
    return "None";
}
