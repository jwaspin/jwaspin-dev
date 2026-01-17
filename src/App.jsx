import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import MarkdownPage from './pages/MarkdownPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markdown" element={<MarkdownPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
