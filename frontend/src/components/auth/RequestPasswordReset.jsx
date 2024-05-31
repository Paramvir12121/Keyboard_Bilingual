import React, { useState } from 'react';
import baseApi from '../Api/BaseApi';
import { Outlet } from "react-router-dom"

const RequestPasswordReset = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleRequestReset = async (e) => {
        e.preventDefault();
        try {
            const response = await baseApi.post('/auth/reset_forgotten_password_request', {
                username,
            });
            setMessage('Reset password request successful. Check your email for the verification code.');
        } catch (error) {
            setMessage('Error requesting password reset. Please try again.');
        }
    };

    return (
        <div>
            <h2>Request Password Reset</h2>
            <form onSubmit={handleRequestReset}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <button type="submit">Request Reset</button>
            </form>
            {message && <p>{message}</p>}
            <Outlet />
        </div>
    );
};

export default RequestPasswordReset;
