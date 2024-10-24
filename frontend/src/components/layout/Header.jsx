import React, { useContext, useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { Context } from "../../App";
import Cookies from 'js-cookie';
import ROUTES from '../../Routes';
import LogoutButton from '../../auth/LogoutButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '/logo1.png';

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
                <Navbar.Brand as={Link} to={ROUTES.DASHBOARD}>
                <img
                        src={logo}
                        alt="Keyboard Bilingual"
                        style={{ width: '45px', height: '45px' }} // Adjust the size as needed
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {signedIn && (
                            <>
                                {/* <Nav.Link as={Link} to={ROUTES.DASHBOARD} className="fw-semibold">Dashboard</Nav.Link> */}
                            </>
                        )}
                    </Nav>
                    <Nav className="align-items-center">
                        {signedIn ? (
                            <Dropdown align="end">
                                <Dropdown.Toggle as={Nav.Link} id="user-dropdown" className="me-2">
                                    <FontAwesomeIcon icon={faUserCircle} size="lg" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='custom-dropdown-menu'>
                                    <Dropdown.ItemText><FontAwesomeIcon icon={faUser} className="me-2"/> {username}</Dropdown.ItemText>
                                    <Dropdown.ItemText> <FontAwesomeIcon icon={faEnvelope} className="me-2" /> {Cookies.get('email')}</Dropdown.ItemText>
                                    <Dropdown.Divider />
                                    
                                    <Dropdown.Item as={Link} to={ROUTES.PROFILE} className="text-dark">
                                    <FontAwesomeIcon icon={faUserCircle} size="lg" className="me-2"/>
                                        Profile
                                    </Dropdown.Item>
                                    <Dropdown.Item as={Link} to={ROUTES.SETTINGS} className="text-dark">
                                        <FontAwesomeIcon icon={faCog} className="me-2" />
                                        Settings
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <div className="d-flex justify-content-center">
                                    <LogoutButton />
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
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
