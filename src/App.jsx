import { useState } from 'react'
import logo from './assets/scheduler-logo.svg'
import Scheduler from './assets/components/Scheduler'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>My Sample Scheduler Component</h1>
      <Scheduler />
    </div>
  )
}

export default App
