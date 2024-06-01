import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import LogoutButton from '../auth/LogoutButton'
import useAuth from '../auth/useAuth';
import { Link } from 'react-router-dom';

const TopBar = () => {
    const { isLoggedIn, username } = useAuth();
  return (
    <>
    <Navbar>
        <Navbar.Brand >Learn Colemak</Navbar.Brand>
        {isLoggedIn ? (
                <div>
                    Logged in as: {username}
                    <LogoutButton />
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