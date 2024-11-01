import React, { useContext, useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { Context } from "../../App";
import Cookies from 'js-cookie';
import ROUTES from '../../Routes';
import LogoutButton from '../../auth/LogoutButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUserCircle, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
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
            <Container className="d-flex align-items-center">
                <Navbar.Brand as={Link} to={ROUTES.DASHBOARD}>
                    <img
                        src={logo}
                        alt="Keyboard Bilingual"
                        style={{ width: '45px', height: '45px' }}
                    />
                </Navbar.Brand>
                <Nav className="ms-auto d-flex align-items-center">
                    {signedIn ? (
                        <Dropdown align="end">
                            <Dropdown.Toggle as={Nav.Link} id="user-dropdown" className="me-2">
                                <FontAwesomeIcon icon={faUserCircle} size="lg" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='custom-dropdown-menu'>
                                <Dropdown.ItemText >
                                    <FontAwesomeIcon icon={faUser} className="me-2" /> {username}
                                </Dropdown.ItemText>
                                <Dropdown.ItemText>
                                    <FontAwesomeIcon icon={faEnvelope} className="me-2" /> {Cookies.get('email')}
                                </Dropdown.ItemText>
                                <Dropdown.Divider />
                                <Dropdown.Item as={Link} to={ROUTES.USER_PROFILE} className="text-dark">
                                    <FontAwesomeIcon icon={faUserCircle} size="lg" className="me-2" />
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
                        <div className="d-flex">
                            <Button
                                variant="outline-primary"
                                className="me-2"
                                onClick={() => navigate(ROUTES.LOGIN)}
                            >
                                Login
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() => navigate(ROUTES.SIGNUP)}
                            >
                                Signup
                            </Button>
                        </div>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
