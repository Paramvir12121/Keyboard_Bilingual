import React, { useState, useEffect } from 'react'; // Ensure React and useEffect are imported
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import LogoutHandler from '../auth/LogoutHandler';

const TopBar = () => {
    const { isLoggedIn, username } = useAuth();
    const [loggedIn, setLoggedIn] = useState(isLoggedIn);

    useEffect(() => {
        setLoggedIn(isLoggedIn); // Update loggedIn state when isLoggedIn changes
    }, [isLoggedIn]);

    const handleLogout = LogoutHandler();

    return (
        <Navbar>
            <Navbar.Brand>Learn Colemak</Navbar.Brand>
            {loggedIn ? (
                <div>
                    Logged in as: {username}
                    <Button onClick={handleLogout} className="btn btn-danger">Logout</Button>
                </div>
            ) : (
                <div>
                    <Button as={Link} to="/login" variant="outline-primary" className="mr-2">Login</Button>
                    <Button as={Link} to="/signup" variant="outline-secondary">Signup</Button>
                </div>
            )}
        </Navbar>
    );
};


export default TopBar;