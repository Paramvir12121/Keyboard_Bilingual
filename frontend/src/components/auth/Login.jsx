import React, { useState } from 'react';
import "./Login.css"
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Optional: manage error state

    
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
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 order-md-1 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                    <div className="p-4 m-4 w-100">
                        <h2>Login</h2>
                        <form onSubmit={handleLogin} className="col-md-8 mt-4">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label col-12">Email</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter email"
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
