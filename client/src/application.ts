export const APPLICATION_STATUSES = ["Not started", "Applied", "Online test", "Interview", "Offer", "Rejected"] as const;

export type ApplicationStatus = (typeof APPLICATION_STATUSES)[number];

export type Application = {
    company: string;
    role: string;
    deadline: string;
    status: ApplicationStatus;
    notes?: string;
};
