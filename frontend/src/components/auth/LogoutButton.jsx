// LogoutButton.jsx
import React from 'react'; 
// import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LogoutButton = () => {
    // const history = useHistory();

    const handleLogout = async () => {
        try {
            const accessToken = localStorage.getItem('access_token');

            const response = await axios.post('http://localhost:5000/auth/logout', {}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.status === 200) {
                console.log('Logout successful:', response.data);

                // Clear tokens from localStorage
                localStorage.removeItem('id_token');
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');

                // Redirect to login or home page
                // history.push('/login');
            } else {
                console.error('Logout failed:', response.data);
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;
