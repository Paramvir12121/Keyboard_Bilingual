import { useState, useEffect } from 'react';
import baseApi from './Api/BaseApi';
import useAuth from './auth/useAuth';

const Home = () => {
    const { isLoggedIn, userId,idToken, username } = useAuth();
    

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
