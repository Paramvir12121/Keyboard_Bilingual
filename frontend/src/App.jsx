import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Settings from './components/windows/Settings'
import TestLogin from './components/auth/TestLogin'
import Protected from './components/tests/Protected'
import Lesson from './components/lessons/Lesson'
import LessonList from './components/lessons/LessonList'
import RequestPasswordReset from './components/auth/RequestPasswordReset'
import ConfirmPasswordReset from './components/auth/ConfirmPasswordReset'
import SignupConfirmation from './components/auth/SignupConfirmation'
import TopBar from './components/navbar/TopBar'


function App() {
  

  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/testlogin" element={<TestLogin />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="/all_lessons" element={<Lesson />} />
        <Route path="/lessonlist" element={<LessonList />} />
        <Route path="/signupconfirmation" element={<SignupConfirmation />} />
        <Route path="/authtests/*" >
          <Route path="requestpasswordreset" element={<RequestPasswordReset />} />
          <Route path="confirmpasswordreset" element={<ConfirmPasswordReset />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
