import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
      </div>
      <h1>New Features DISPLAY</h1>
      <h1>New Features DISPLAY</h1>
      <h1>New Features DISPLAY</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count! is {count}
        </button>
        <h2>HELLO new Features account</h2>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
