import { useState } from 'react'
import './App.css'
import type { Application, ApplicationStatus } from './application.js'
import { APPLICATION_STATUSES } from './application.js'
import { ApplicationRow } from './ApplicationRow.js'
import { sortByDeadline } from './sort.js'
import { filterByStatus } from './filter.js'
import { addDays } from './addDays.js'

const today = new Date().toISOString().slice(0, 10)

const fakeApplications: Application[] = [
  { company: 'Acme', role: 'Developer', deadline: addDays(today, 14), status: 'Not started' },
  { company: 'Northwind', role: 'Software Engineer', deadline: addDays(today, 2), status: 'Not started' },
  { company: 'Font', role: 'Web Developer', deadline: addDays(today, -6), status: 'Not started' },
  { company: 'Test', role: 'Frontend Developer', deadline: addDays(today, 1), status: 'Applied' },
]

function App() {
  const [applications, setApplications] = useState<Application[]>(fakeApplications)
  const [filter, setFilter] = useState<ApplicationStatus | "All">("All")
  const visible = filter === "All" ? applications : filterByStatus(applications, filter)

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
          <ApplicationRow key={application.company} application={application} today={today} onStatusChange={(status) => setApplications(applications.map((a) => (a === application ? { ...a, status } : a)))} />
        ))}
      </section>
    </>
  )
}

export default App
