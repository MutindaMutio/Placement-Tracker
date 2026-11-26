import type { Application, ApplicationStatus } from "./application.js";
import { APPLICATION_STATUSES } from "./application.js";
import { getUrgency } from "./urgency.js";

type ApplicationRowProps = {
  application: Application;
  today: string;
  onStatusChange: (status: ApplicationStatus) => void;
};

export function ApplicationRow({ application, today, onStatusChange }: ApplicationRowProps) {
  const urgency = getUrgency(application, today);
  return (
    <div>
      <select className="status-pill" value={application.status} onChange={(event) => onStatusChange(event.target.value as ApplicationStatus)}>
        {APPLICATION_STATUSES.map((status) => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>
      <p>{application.company}, {application.role}</p>
      <p className="deadline" data-urgency={urgency}>{application.deadline}</p>
    </div>
  );
}
