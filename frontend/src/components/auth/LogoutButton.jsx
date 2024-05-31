import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import baseApi from '../Api/BaseApi';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await baseApi.post('/auth/logout', {
                withCredentials: true
            });
            console.log('Logout successful:', response.data);
            print(response.data)
            // Clear session storage or local storage
            sessionStorage.clear();
            // Redirect to login page
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
