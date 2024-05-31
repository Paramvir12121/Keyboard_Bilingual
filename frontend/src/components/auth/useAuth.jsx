import { useState, useEffect } from 'react';
import baseApi from '../Api/BaseApi';

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [idToken, setIdToken] = useState(null);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await baseApi.get('/auth/checklogin', {
                    withCredentials: true, // Ensure cookies are sent with the request
                    
                });
                if (response.data.message === 'User is logged in.') {
                    setIsLoggedIn(true);
                    setUserId(response.data.user_id);
                    setIdToken(response.data.id_token);
                    setUsername(response.data.username);
                }
            } catch (error) {
                setIsLoggedIn(false);
                setUserId(null);
                setIdToken(null);
                setUsername(null);
            }
        };

        checkLoginStatus();
    }, []);

    return { isLoggedIn, userId, idToken, username };
};

export default useAuth;
