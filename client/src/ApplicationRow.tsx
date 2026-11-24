import type { Application } from "./application.js";

type ApplicationRowProps = {
  application: Application;
};

export function ApplicationRow({ application }: ApplicationRowProps) {
  return (
    <div>
      <p>{application.company}, {application.role}</p>
    </div>
  );
}
