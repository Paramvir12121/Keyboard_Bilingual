import React, { useState } from 'react';
import baseApi from '../Api/BaseApi';
import { useNavigate } from 'react-router-dom';
import { Outlet } from "react-router-dom"

const ConfirmPasswordReset = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleConfirmReset = async (e) => {
        e.preventDefault();
        try {
            const response = await baseApi.post('/auth/reset_forgotten_password_confirmation', {
                username,
                password,
                verification_code: verificationCode,
            });
            setMessage('Password reset successful. You can now log in with your new password.');
            // Optionally, redirect to login page
            navigate('/login');
        } catch (error) {
            setMessage('Error confirming password reset. Please try again.');
        }
    };

    return (
        <div>
            <h2>Confirm Password Reset</h2>
            <form onSubmit={handleConfirmReset}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>New Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Verification Code:</label>
                    <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
                </div>
                <button type="submit">Confirm Reset</button>
            </form>
            {message && <p>{message}</p>}
            <Outlet />
        </div>
    );
};

export default ConfirmPasswordReset;
