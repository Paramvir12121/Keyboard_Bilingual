import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [email,setEmail] =useState(null);
    const [username,setUsername] =useState(null);


    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await axios.get('/auth/checklogin', {
                    withCredentials: true // Ensure cookies are sent with the request
                });
                if (response.data.message === 'User is logged in.') {
                    setIsLoggedIn(true);
                    setUserId(response.data.user_id);
                    setEmail(response.data.email);
                    setUsername(response.data.username)
                }
            } catch (error) {
                setIsLoggedIn(false);
                setUserId(null);
            }
        };

        checkLoginStatus();
    }, []);

    return { isLoggedIn, userId };
};

export default useAuth;
