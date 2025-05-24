import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Transfer from './pages/Transfer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path = "/signin" element = {<Signin />} />
    <Route path = "/signup" element = {<Signup />} />
    <Route path = "/dashboard" element = {<Dashboard />} />
    <Route path = "/transfer" element = {<Transfer />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
