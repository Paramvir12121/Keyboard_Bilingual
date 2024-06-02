import React, { createContext, useState, useEffect } from 'react';
import baseApi from './BaseApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [idToken, setIdToken] = useState(null);
    const [username, setUsername] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await baseApi.get('/auth/checklogin', {
                    withCredentials: true,
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
            } finally {
                setLoading(false);
            }
        };

        checkLoginStatus();
    }, []);

    const login = (userData) => {
        setIsLoggedIn(true);
        setUserId(userData.user_id);
        setIdToken(userData.id_token);
        setUsername(userData.username);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserId(null);
        setIdToken(null);
        setUsername(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userId, idToken, username, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
