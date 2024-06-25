import React,{useContext} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'; // Step 1
import {Context} from "../../App";
import LogoutButton from '../../auth/LogoutButton';

const Header = () => {
    const [signedIn, setSignedIn] = useContext(Context);
    const navigate = useNavigate(); // Step 2

    return (
        <Navbar>
            <Nav>My App</Nav>
            {signedIn ? (
                <div>Welcome, User! <LogoutButton /> </div>
                
            ) : (
                <div>
                    <Button onClick={() => navigate('/login')}>Login</Button> {/* Step 3 */}
                    <Button onClick={() => navigate('/signup')}>Signup</Button> {/* Step 3 */}
                </div>
            )}
        </Navbar>
    );
};

export default Header;

