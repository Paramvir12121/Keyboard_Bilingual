import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../App';

const LogoutButton = () => {
    const [, setSignedIn] = useContext(Context);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Update the signedIn state to false
        setSignedIn(false);

        // Optionally clear any other local state or session storage if needed
        sessionStorage.clear();  // Example: clearing session storage

        // Redirect to the login page or home page
        navigate('/login');
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
