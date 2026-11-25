import type { Application } from "./application.js";

type ApplicationRowProps = {
  application: Application;
};

export function ApplicationRow({ application }: ApplicationRowProps) {
  return (
    <div>
      <span>{application.status}</span>
      <p>{application.company}, {application.role}</p>
    </div>
  );
}
