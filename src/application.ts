export type ApplicationStatus = "Not started" | "Applied" | "Online test" | "Interview" | "Offer" | "Rejected";

type Application = {
    company: string;
    role: string;
    deadline: string;
    status: ApplicationStatus;
    notes?: string;
};
