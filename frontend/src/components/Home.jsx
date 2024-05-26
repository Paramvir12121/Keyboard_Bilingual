import React, { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";
import ProtectedData from './auth/ProtectedData'
import ProtectedRoute from './auth/ProtectedRoutes';

const Home = () => {
    const [username,setUsername] = useState('')
    
    useEffect(() => {
      setUsername(sessionStorage.getItem('username'));
  }, []);

  return (
    <>
    Home 
    {/* Just test code */}
    <ProtectedData>
      You are logged in as: {username}
    </ProtectedData>
    

    </>
  )
}

export default Home