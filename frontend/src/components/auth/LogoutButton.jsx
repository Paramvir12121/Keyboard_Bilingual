// LogoutButton.jsx
import React from 'react'; 
import baseApi from '../Api/BaseApi';

const LogoutButton = () => {
    // const history = useHistory();

    const handleLogout = async () => {
        try {
            const accessToken = localStorage.getItem('access_token');

            const response = await baseApi.post('/auth/logout', {}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.status === 200) {
                console.log('Logout successful:', response.data);

                // Clear session
              
                
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
