import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [idToken, setIdToken] = useState(null);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await axios.get('/auth/checklogin', {
                    withCredentials: true // Ensure cookies are sent with the request
                });
                console.log("response:", response.data)
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
        console.log("Username: ",username)

        checkLoginStatus();
    }, []);


    return (
        <>
            Home
            {isLoggedIn ? (
                <p>You are logged in as: {username}</p>
            ) : (
                <p>You are not logged in.</p>
            )}
        </>
    );
}

export default Home;
