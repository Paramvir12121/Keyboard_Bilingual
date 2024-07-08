import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
// Bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./auth/Login";
import {App} from "./App";
import NotFoundPage from './pages/errors/NotFoundPage';
import NotAuthorized from './pages/errors/NotAuthorized';

import Dashboard from './pages/dashboard/Dashboard';
import Keyboard from '../src/components/keyboard/Keyboard';
import Typing from '../src/components/typingTest/Typeing';
import Typeing from '../src/components/typingTest/Typeing';
import ConfirmEmail from './auth/misc/ConfirmEmail';
import Signup from './auth/Singup'
import ForgotPassoword from './auth/resetPassword/ForgotPassoword';
import ForgotPasswordEmail from './auth/resetPassword/ForgotPasswordEmail';
import ResetPasswordConfirm from './auth/resetPassword/ResetPasswordConfirm';
import Checkout from './pages/stripe/Checkout';
import ProtectedRoute from './auth/ProtectedRoutes';

//tests
import Test1 from './testComponents/Test1';

const router = createBrowserRouter([
  { path: '/', 
    element: <App />,
    children: [
      {path: "/login", element: <Login /> },
      // {path: '/dashboard', element: <Dashboard />},
      // {path: '/typing', element: <Typeing />},
      {path: '/confirm-email', element: <ConfirmEmail />},
      {path: '/signup', element: <Signup />},
      {path: '/forgot-password', element: <ForgotPassoword />}, 
      {path: '/forgot-password-email', element: <ForgotPasswordEmail />}, 
      {path: '/reset-password-confirm', element: <ResetPasswordConfirm />}, 
      // {path: '/checkout', element: <Checkout />},
      {
        path: '/',
        element: <ProtectedRoute />,
        children: [
          { path: '/dashboard', element: <Dashboard /> },
          { path: '/typing', element: <Typing /> },
          { path: '/checkout', element: <Checkout />},
          //tests
          { path: '/test1', element: <Test1 />  }
          // Add other protected routes here
        ],
        errorElement: <NotAuthorized />,
      },
      // Define other paths as needed
    ],
    errorElement: <NotFoundPage />
   },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)
