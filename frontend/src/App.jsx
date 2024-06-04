import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Settings from './components/windows/Settings';
import Protected from './components/tests/Protected';
import LessonList from './components/lessons/LessonList';
import RequestPasswordReset from './components/auth/RequestPasswordReset';
import ConfirmPasswordReset from './components/auth/ConfirmPasswordReset';
import SignupConfirmation from './components/auth/SignupConfirmation';
import TopBar from './components/navbar/TopBar';
import UserLesson from './components/lessons/UserLesson';

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
                <Route path="/protected" element={<Protected />} />
                <Route path="/lessonlist" element={<LessonList />} />
                <Route path="/userlesson" element={<UserLesson />} />
                <Route path="/signupconfirmation" element={<SignupConfirmation />} />
                <Route path="/auth/*" element={<AuthTests />} />
                {/* <Route path="/lesson/*" element={<Lessons />} /> */}
            </Routes>
        </>
    );
}

// const Lessons = () => {
//     <Routes>
//         <Route path="list" element={<LessonList />} />
//     </Routes>

// }

const AuthTests = () => (
    <Routes>
        <Route path="requestpasswordreset" element={<RequestPasswordReset />} />
        <Route path="confirmpasswordreset" element={<ConfirmPasswordReset />} />
    </Routes>
);

export default App;
