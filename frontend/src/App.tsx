import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GabcEditor from './components/gabceditor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GabcEditor />
    </>
  )
}

export default App
