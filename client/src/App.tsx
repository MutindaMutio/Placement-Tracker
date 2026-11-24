import { useState } from 'react'
import './App.css'
import type { Application } from './application.js'
import { ApplicationRow } from './ApplicationRow.js'

const fakeApplication: Application = {
  company: 'Acme',
  role: 'Developer',
  deadline: '2026-12-04',
  status: 'Not started',
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>Placement Tracker</h1>
        </div>
        <ApplicationRow application={fakeApplication} />
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App
