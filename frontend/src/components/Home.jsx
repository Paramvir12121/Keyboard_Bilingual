import { useState, useEffect } from 'react';
import baseApi from './hooks/BaseApi';
import useAuth from './hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

const Home = () => {
    const { isLoggedIn, userId,idToken, username } = useAuth();
    const navigate = useNavigate()
    

    return (
        <>

            Home
            {isLoggedIn ? (
                <> 
                <p>You are logged in as: {username}</p>
                <Button variant="link" onClick={()=>navigate('/lessonlist')}>Lessonlist</Button>
                </>
            ) : (
                <p>You are not logged in.</p>
            )}
        </>
    );
}

export default Home;
