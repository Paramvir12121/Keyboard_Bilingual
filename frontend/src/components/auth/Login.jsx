import React, { useState } from 'react';
import "./Login.css";
import baseApi from '../Api/BaseApi';
import {Navigate, Outlet, Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await baseApi.post('/auth/login', {
                username,
                password,
            });

            console.log('Login successful:', response.data);
            sessionStorage.setItem('session', response.data.session);
            
            // Redirect or perform other actions after successful login
            // navigate('/protected');
        } catch (error) {
            console.error('Login error:', error);
            setError(error.response ? error.response.data.message : 'An error occurred');
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 order-md-1 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                    <div className="p-4 m-4 w-100">
                        <h2>Login</h2>
                        <form onSubmit={handleLogin} className="col-md-8 mt-4">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label col-12">Username</label>
                                <input
                                    className="form-control"
                                    type="username"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    placeholder="Enter username"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label col-12">Password</label>
                                <input
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                />
                            </div>
                            <button type="submit" onClick={handleLogin} className="btn btn-primary">Login</button>
                        </form>
                        <div>
                            Not a user yet? <Link to="/signup">Signup here</Link>
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                </div>
                <div className="col-md-6 d-none d-lg-block order-md-2" id='svg'>
                    {/* Background SVG Image should be here */}
                </div>
            </div>
        </div>
    );
};

export default Login;
