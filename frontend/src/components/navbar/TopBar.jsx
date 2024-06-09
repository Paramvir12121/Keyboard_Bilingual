import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import LogoutHandler from '../auth/LogoutHandler';

const TopBar = () => {
    const { isLoggedIn, username } = useAuth();
    const [loggedIn, setLoggedIn]=useState(isLoggedIn)
    
    const handleLogout = LogoutHandler();

  return (
    <>
    <Navbar>
        <Navbar.Brand >Learn Colemak</Navbar.Brand>
        {isLoggedIn ? (
                <div>
                    Logged in as: {username}
                    <Button onClick={handleLogout} className="btn btn-danger">Logout</Button>
                </div>
            ) : (
                <>
                <Button as={Link} to="/login" variant="outline-primary" className="mr-2">Login</Button>
                <Button as={Link} to="/signup" variant="outline-secondary">Signup</Button>
            </>
            )}
    </Navbar>
    </>
  )
}

export default TopBar