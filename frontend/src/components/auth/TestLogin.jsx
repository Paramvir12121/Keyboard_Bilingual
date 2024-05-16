import React, { useState } from 'react';
import axios from 'axios';

const TestLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post('http://localhost:5000/auth/login', {
                email,
                password,
            });

            console.log('Login successful:', response.data);

            // Check if the response contains the tokens
            if (response.data.id_token && response.data.access_token && response.data.refresh_token) {
                // Save tokens to localStorage
                localStorage.setItem('id_token', response.data.id_token);
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('refresh_token', response.data.refresh_token);

                // Redirect or perform other actions after successful login
            } else {
                setError('Login response did not contain tokens');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError(error.response ? error.response.data.message : 'An error occurred');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default TestLogin;
