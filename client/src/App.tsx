import { useState } from 'react'
import './App.css'
import type { Application, ApplicationStatus } from './application.js'
import { APPLICATION_STATUSES } from './application.js'
import { ApplicationRow } from './ApplicationRow.js'
import { sortByDeadline } from './sort.js'
import { filterByStatus } from './filter.js'

const fakeApplications: Application[] = [
  { company: 'Acme', role: 'Developer', deadline: '2026-12-04', status: 'Not started' },
  { company: 'Northwind', role: 'Software Engineer', deadline: '2026-11-28', status: 'Not started' },
  { company: 'Font', role: 'Web Developer', deadline: '2026-11-20', status: 'Not started' },
  { company: 'Test', role: 'Frontend Developer', deadline: '2026-11-27', status: 'Applied' },
]

function App() {
  const [filter, setFilter] = useState<ApplicationStatus | "All">("All")
  const visible = filter === "All" ? fakeApplications : filterByStatus(fakeApplications, filter)

  return (
    <>
      <section id="center">
        <div>
          <h1>Placement Tracker</h1>
        </div>
        <select value={filter} onChange={(event) => setFilter(event.target.value as ApplicationStatus | "All")}>
          <option value="All">All</option>
          {APPLICATION_STATUSES.map((status) => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
        {sortByDeadline(visible).map((application) => (
          <ApplicationRow key={application.company} application={application} today="2026-11-25" />
        ))}
      </section>
    </>
  )
}

export default App
