import './App.css'
import type { Application } from './application.js'
import { ApplicationRow } from './ApplicationRow.js'
import { sortByDeadline } from './sort.js'

const fakeApplications: Application[] = [
  { company: 'Acme', role: 'Developer', deadline: '2026-12-04', status: 'Not started' },
  { company: 'Northwind', role: 'Software Engineer', deadline: '2026-11-28', status: 'Not started' },
  { company: 'Font', role: 'Web Developer', deadline: '2026-11-20', status: 'Not started' },
  { company: 'Test', role: 'Frontend Developer', deadline: '2026-11-27', status: 'Applied' },
]

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Placement Tracker</h1>
        </div>
        {sortByDeadline(fakeApplications).map((application) => (
          <ApplicationRow key={application.company} application={application} today="2026-11-25" />
        ))}
      </section>
    </>
  )
}

export default App
