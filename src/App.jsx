import { useState } from 'react'

import './App.css'
import Login from './components/login/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Admin from './components/admin/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
