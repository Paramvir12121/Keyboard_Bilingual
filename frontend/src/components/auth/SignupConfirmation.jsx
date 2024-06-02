import React, { useState, useEffect } from 'react';
import baseApi from '../hooks/BaseApi';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';

const SignupConfirmation = () => {
    const [verificationCode, setVerificationCode] = useState('');

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();


    const { username, email } = location.state || { username: '', email: '' };
    // console.log("l",{ username, email })
    useEffect(() => {
        if (!username || !email) {
            navigate('/signup'); // Redirect to signup if username or email is missing
        }
    }, [username, email, navigate]);

    const handleConfirmSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await baseApi.post('/auth/signup_confirmation', {
                username: username,
                email: email,
                verification_code: verificationCode,
            });
            console.log(response)
            if (response.status === 200) {
                setMessage('Signup confirmed successfully. Redirecting to login...');
                setError('');
                setTimeout(() => setRedirectToLogin(true), 2000);
            } else {
                setMessage('');
                setError('Failed to confirm signup.');
            }
        } catch (error) {
            setMessage('');
            setError(error.response ? error.response.data.message : 'An error occurred.');
        }
    };

    if (redirectToLogin) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h2>Confirm Signup</h2>
            <form onSubmit={handleConfirmSignup}>
                <div>
                    <label>Verification Code:</label>
                    <input
                        type="text"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Confirm Signup</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default SignupConfirmation;
