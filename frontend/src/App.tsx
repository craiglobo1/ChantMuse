// import { useState } from 'react'

import './App.css'
import GabcEditor from './components/gabceditor'
import ChantRenderer from './components/ChantRenderer'
import { useState } from 'react'

function App() {
  const [gabcText, setGabcText] = useState<string>(`(c4) Glo(hi)ri(h) a(g) in(f) ex(g)cel(h)sis(h) De(h)o(h.) (::)`)

  return (
    <>
      <h1>Chant Muse</h1>
      <ChantRenderer gabc={gabcText} />
      <GabcEditor  value={gabcText} onChange={setGabcText}/>
    </>
  )
}

export default App
