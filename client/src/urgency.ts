import type { Application } from "./application.js";
import { daysLeft } from "./daysLeft.js";

export type Urgency = "Closing soon" | "Deadline passed" | "None"

const CLOSING_SOON_DAYS = 7;

export function getUrgency(application: Application, today: string): Urgency {
    if (application.status !== "Not started") {
        return "None";
    }
    const days = daysLeft(application.deadline, today);
    if (days < 0) {
        return "Deadline passed";
    }
    if (days <= CLOSING_SOON_DAYS) {
        return "Closing soon";
    }
    return "None";
}
