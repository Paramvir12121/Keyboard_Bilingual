import React, { useContext, useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { Context } from "../../App";
import LogoutButton from '../../auth/LogoutButton';
import Cookies from 'js-cookie';

const Header = () => {
    const [signedIn, setSignedIn] = useContext(Context);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (signedIn) {
            const storedUsername = Cookies.get('username');
            if (storedUsername) {
                setUsername(storedUsername);
            }
        } else {
            setUsername('');
        }
    }, [signedIn]);

    return (
        <Navbar  expand="lg" className="mb-3">
            <Container>
                <Navbar.Brand as={Link} to="/">Arch</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {signedIn && (
                            <>
                                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link as={Link} to="/lessonlist">Lessons</Nav.Link>
                            </>
                        )}
                    </Nav>
                    <Nav>
                        {signedIn ? (
                            <>
                                <Navbar.Text className="me-3">
                                    Welcome, {username}!
                                </Navbar.Text>
                                <LogoutButton />
                            </>
                        ) : (
                            <>
                                <Button variant="outline-primary" className="me-2" onClick={() => navigate('/login')}>Login</Button>
                                <Button variant="primary" onClick={() => navigate('/signup')}>Signup</Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;