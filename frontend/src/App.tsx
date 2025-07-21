// import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import './App.css'

import EditorPage from './pages/EditorPage'
import ScoresPage from './pages/ScoresPage'
import AboutPage from './pages/AboutPage'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<EditorPage />} />
        <Route path="/scores" element={<ScoresPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
