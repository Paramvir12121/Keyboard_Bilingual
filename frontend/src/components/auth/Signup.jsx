import React, { useState } from 'react';
import './Signup.css';
import baseApi from '../Api/BaseApi';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
        if (name === 'confirmPassword') setConfirmPassword(value);
        
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const response = await baseApi.post('/auth/signup', {
                username,
                email,
                password,
            });
            if (response.status === 200) {
                console.log('Signup successful:', response.data);
                navigate('/signupconfirmation', { state: { username, email } }); // Redirect to login after successful signup
            } else {
                console.error('Signup failed:', response.data);
                setError('Signup failed. Please try again.');
            }
        } catch (error) {
            console.error('Signup error:', error);
            setError(error.response ? error.response.data.message : 'An error occurred');
        }
    };


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 d-none d-lg-block order-md-1" id="svg"></div>
                <div className="col-md-8 order-md-2 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                    <div className="p-4 w-100">
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSignup} className="col-md-8 mt-4">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
