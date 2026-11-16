import { Application, ApplicationStatus } from "./application.js";

export function filterByStatus(applications: Application[], status: ApplicationStatus): Application[] {
    return applications.filter((app) => app.status === status);
}
