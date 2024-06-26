import React, { useState } from 'react';
import baseApi from "../hooks/baseApi";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const api = baseApi();
            const response = await api.post('/auth/signup', {username,email, password}, {withCredentials: true});
            console.log("Response: ", response.data)
            if (response.data) {
                // Signup successful, redirect to confirm email page
                navigate('/confirm-email')

                // Redirect logic here, e.g., window.location.href = '/dashboard';
            } else {
                // Signup failed, handle error
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Signup failed');
            }
        } catch (error) {
            console.error('Error during signup:', error);
            setErrorMessage('An error occurred during signup.');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSignup}>
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
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;