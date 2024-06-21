import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';




const Header = ({ isLoggedIn }) => {
    return (
        <Navbar>
            <Nav>My App</Nav>
            {isLoggedIn ? (
                <p>Welcome, User!</p>
            ) : (
                <div>
                    <Button>Login</Button>
                     <Button>Signup</Button>
                </div>
            )}
        </Navbar>
    );
};

export default Header;