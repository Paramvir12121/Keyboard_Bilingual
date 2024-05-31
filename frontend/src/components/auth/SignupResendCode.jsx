import React, { useState } from 'react';
import axios from 'axios';

const SignupResendCode = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleResendCode = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/signup_resend_code', {
                username,
            });
            if (response.status === 200) {
                setMessage('Confirmation code resent successfully. Check your email.');
                setError('');
            } else {
                setMessage('');
                setError('Failed to resend confirmation code.');
            }
        } catch (error) {
            setMessage('');
            setError(error.response ? error.response.data.message : 'An error occurred.');
        }
    };

    return (
        <div>
            <h2>Resend Confirmation Code</h2>
            <form onSubmit={handleResendCode}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Resend Code</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default SignupResendCode;
