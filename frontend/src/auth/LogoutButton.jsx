import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../App';
import ROUTES from '../Routes';

const LogoutButton = () => {
    const [, setSignedIn] = useContext(Context);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Update the signedIn state to false
        setSignedIn(false);
       

        // Clear any other local state or session storage 
        localStorage.setItem('signedIn', 'false');  
        document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'signedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        sessionStorage.clear(); 
        

        // Redirect to the login page or home page
        navigate(ROUTES.LOGIN);
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
