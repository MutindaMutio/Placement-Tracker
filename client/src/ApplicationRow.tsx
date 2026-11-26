import type { Application } from "./application.js";
import { getUrgency } from "./urgency.js";

type ApplicationRowProps = {
  application: Application;
  today: string;
};

export function ApplicationRow({ application, today }: ApplicationRowProps) {
  const urgency = getUrgency(application, today);
  return (
    <div>
      <span className="status-pill">{application.status}</span>
      <p>{application.company}, {application.role}</p>
      <p className="deadline" data-urgency={urgency}>{application.deadline}</p>
      <p>{urgency}</p>
    </div>
  );
}
