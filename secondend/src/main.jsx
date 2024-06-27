import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
// Bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./auth/Login";
import {App} from "./App";
import NotFoundPage from './pages/errors/NotFoundPage';
import Dashboard from './pages/dashboard/Dashboard';
import Keyboard from '../src/components/keyboard/Keyboard';
import Typing from '../src/components/typingTest/Typeing';
import Typeing from '../src/components/typingTest/Typeing';
import ConfirmEmail from './auth/misc/ConfirmEmail';
import Signup from './auth/Singup'

const router = createBrowserRouter([
  { path: '/', 
    element: <App />,
    children: [
      {path: "/login", element: <Login /> },
      {path: '/dashboard', element: <Dashboard />},
      {path: '/typing', element: <Typeing />},
      {path: '/confirm-email', element: <ConfirmEmail />},
      {path: '/signup', element: <Signup />},
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
