import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Settings from './components/windows/Settings'
import TestLogin from './components/auth/TestLogin'
import ProtectedData from './components/tests/ProtectedData'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/testlogin" element={<TestLogin />} />
      <Route path="/protected" element={<ProtectedData />} />


      </Routes>
    </>
  )
}

export default App
