import React, { useContext, useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { Context } from "../../App";
import LogoutButton from '../../auth/LogoutButton';
import Cookies from 'js-cookie';
import ROUTES from '../../Routes'; // Importing ROUTES



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
        <Navbar expand="md" className="mb-3">
            <Container>
                <Navbar.Brand as={Link} to={ROUTES.DASHBOARD}>Arch</Navbar.Brand> {/* Use ROUTES.HOME */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {signedIn && (
                            <>
                                <Nav.Link as={Link} to={ROUTES.DASHBOARD}>Dashboard</Nav.Link> {/* Use ROUTES.DASHBOARD */}
                                <Nav.Link as={Link} to={ROUTES.LESSON_LIST}>Lessons</Nav.Link> {/* Use ROUTES.LESSON_LIST */}
                                <Nav.Link as={Link} to={ROUTES.SPEED_TEST}>Speed Tests</Nav.Link> {/* Use ROUTES.LESSON_LIST */}
                            </>
                        )}
                    </Nav>
                    <Nav>
                        {signedIn ? (
                            <>
                                <Navbar.Text className="me-3">
                                    Welcome, {username}!
                                </Navbar.Text>
                                <Button variant="primary" as={Link} to={ROUTES.SETTINGS} className="me-2">Settings</Button> {/* Use ROUTES.SETTINGS */}
                                <LogoutButton />
                            </>
                        ) : (
                            <>
                                <Button variant="outline-primary" className="me-2" onClick={() => navigate(ROUTES.LOGIN)}>Login</Button> {/* Use ROUTES.LOGIN */}
                                <Button variant="primary" onClick={() => navigate(ROUTES.SIGNUP)}>Signup</Button> {/* Use ROUTES.SIGNUP */}
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
