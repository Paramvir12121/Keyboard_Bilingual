import React, { useState } from 'react';
import "./Login.css"
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Optional: manage error state

    
    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent the form from submitting naturally
    
        try {
            const response = await axios.post('http://localhost:5000/auth/login/', {
                email: email,
                password: password,
            }, {
                withCredentials: true  // Important if you're dealing with credentials
            });
    
            const { key } = response.data;
            localStorage.setItem('token', key); // Store the token in local storage
            console.log('Login successful'); // Or navigate to another page/dashboard
            // window.location.href = '/dashboard'; // Redirect the user after login
        } catch (error) {
            console.error('Login failed:', error);
            setError('Failed to log in. Please check your credentials.'); // Update error state to display message
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
