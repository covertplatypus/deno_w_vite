import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import Index from './pages/Index.tsx'
import Cat from './pages/Cat.tsx'

export default function(props: any) {
  return (
    <Router>
      <Routes>
        <Route caseSensitive path='/' element={<Index />} />
        <Route caseSensitive path='/:cat' element={<Cat />} />
        <Route caseSensitive path= '*' element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}