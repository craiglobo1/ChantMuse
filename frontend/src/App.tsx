// import { useState } from 'react'

import './App.css'
import GabcEditor from './components/gabceditor'
import ChantRenderer from './components/ChantRenderer'
import { useState } from 'react'
import { useEffect } from 'react'

import Navbar from './components/Navbar'
import Toggle from './components/toggle'

function App() {
  const [gabcText, setGabcText] = useState<string>(`(c4) Glo(hi)ri(h) a(g) in(f) ex(g)cel(h)sis(h) De(h)o(h.) (::)`)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <>
      <Navbar />
      <h1 className='text-green-500 dark:text-white Title'>ChantMuse</h1>
      <ChantRenderer gabc={gabcText} />
      <GabcEditor value={gabcText} onChange={setGabcText}/>
    </>
  )
}

export default App
