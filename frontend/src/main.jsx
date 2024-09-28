import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';

import Login from "./auth/Login";
import { App } from "./App";
import NotFoundPage from './pages/errors/NotFoundPage';
import NotAuthorized from './pages/errors/NotAuthorized';

import Dashboard from './pages/dashboard/Dashboard';


import ConfirmEmail from './auth/misc/ConfirmEmail';
import Signup from './auth/Singup';
import ForgotPassoword from './auth/resetPassword/ForgotPassoword';
import ForgotPasswordEmail from './auth/resetPassword/ForgotPasswordEmail';
import ResetPasswordConfirm from './auth/resetPassword/ResetPasswordConfirm';
import Checkout from './pages/stripe/Checkout';
import ProtectedRoute from './auth/ProtectedRoutes';

import LessonLists from './pages/lessons/LessonLists';
import SpeedTestListsPage from './pages/speedTests/SpeedTestListsPage';
import SpeedTestPage from './pages/speedTests/SpeedTestPage'; 

import LessonPage from './pages/lessons/LessonPage';
import Settings from './pages/settings/Settings';
import Test1 from './testComponents/Test1';
import StatsPage from './pages/stats/StatsPage';

import UserProfile from './pages/profile/UserProfile';

import FirstPage from './pages/introPages/FirstPage';
import SecondPage from './pages/introPages/SecondPage';
import ThirdPage from './pages/introPages/ThirdPage';
import LandingPage from './pages/introPages/LandingPage';




import ROUTES from "./Routes";  // Import the routes

const router = createBrowserRouter([
  { 
    path: ROUTES.HOME, 
    element: <App />,
    children: [
      { path: ROUTES.LOGIN, element: <Login /> },
      { path: ROUTES.CONFIRM_EMAIL, element: <ConfirmEmail /> },
      { path: ROUTES.SIGNUP, element: <Signup /> },
      { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPassoword /> },
      { path: ROUTES.FORGOT_PASSWORD_EMAIL, element: <ForgotPasswordEmail /> },
      { path: ROUTES.RESET_PASSWORD_CONFIRM, element: <ResetPasswordConfirm /> },
      { path: ROUTES.FIRST_PAGE, element: <FirstPage /> },
      { path: ROUTES.SECOND_PAGE, element: <SecondPage /> },
      { path: ROUTES.THIRD_PAGE, element: <ThirdPage /> },
      { path: ROUTES.LANDING_PAGE, element: <LandingPage /> },
      {
        path: ROUTES.HOME,
        element: <ProtectedRoute />,
        children: [
          { path: ROUTES.DASHBOARD, element: <Dashboard /> },
          { path: ROUTES.USER_PROFILE, element: <UserProfile /> },
          
        
          { path: ROUTES.CHECKOUT, element: <Checkout /> },
          { path: ROUTES.LESSON_LIST, element: <LessonLists /> },
          { path: ROUTES.LESSON_PAGE(), element: <LessonPage /> },  // Use the function to generate the route
          { path: ROUTES.SPEED_TEST, element: <SpeedTestListsPage />},  // Use the function to generate the route
          { path: ROUTES.SPEED_TEST_PAGE(), element: <SpeedTestPage />},  // Use the function to generate the route
          { path: ROUTES.TEST1, element: <Test1 /> },
          { path: ROUTES.SETTINGS, element: <Settings /> },
          { path: ROUTES.STATS, element: <StatsPage /> },
          // Add other protected routes here
        ],
        errorElement: <NotFoundPage />,
      },
      // Define other paths as needed
    ],
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
