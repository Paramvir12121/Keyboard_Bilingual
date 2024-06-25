import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../App';

const LogoutButton = () => {
    const [, setSignedIn] = useContext(Context);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Update the signedIn state to false
        setSignedIn(false);
       

        // Clear any other local state or session storage 
        localStorage.setItem('signedIn', 'false');  
        sessionStorage.clear();  

        // Redirect to the login page or home page
        navigate('/login');
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
