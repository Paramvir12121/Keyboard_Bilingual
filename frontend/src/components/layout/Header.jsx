import React, { useContext, useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { Context } from "../../App";
import Cookies from 'js-cookie';
import ROUTES from '../../Routes'; // Importing ROUTES
import LogoutButton from '../../auth/LogoutButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons'; // Settings icon

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
        <Navbar expand="sm" className="mb-3 shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to={ROUTES.DASHBOARD} className="fw fs-5">
                    Keyboard Bilingual
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {signedIn && (
                            <>
                                <Nav.Link as={Link} to={ROUTES.DASHBOARD} className="fw-semibold">Dashboard</Nav.Link>
                                {/* <Nav.Link as={Link} to={ROUTES.LESSON_LIST} className="fw-semibold">Lessons</Nav.Link>
                                <Nav.Link as={Link} to={ROUTES.SPEED_TEST} className="fw-semibold">Speed Tests</Nav.Link> */}
                            </>
                        )}
                    </Nav>
                    <Nav className="align-items-center">
                        {signedIn ? (
                            <>
                                <Navbar.Text className="me-3">
                                    Welcome, <span className="fw-bold">{username}</span>!
                                </Navbar.Text>
                                <Link to={ROUTES.SETTINGS} className="me-2 px-3 text-decoration-none">
                                <FontAwesomeIcon className='primary' icon={faCog} size="lg" />
                                </Link>

                                <LogoutButton />
                            </>
                        ) : (
                            <>
                                <Button
                                    variant="outline-primary"
                                    className="me-2 px-3"
                                    onClick={() => navigate(ROUTES.LOGIN)}
                                >
                                    Login
                                </Button>
                                <Button
                                    variant="primary"
                                    className="px-3"
                                    onClick={() => navigate(ROUTES.SIGNUP)}
                                >
                                    Signup
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
