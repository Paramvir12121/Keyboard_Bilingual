import React, { useState } from 'react';
import './Signup.css'
import axios from 'axios';

const Signup = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/dj-rest-auth/registration/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        if (response.ok) {
            console.log('Signup successful:', data);
            // Redirect to login or other action
        } else {
            console.error('Signup failed:', data);
        }
    };
    
    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-4 d-none d-lg-block order-md-1" id='svg'>
                </div>
            <div className="col-md-8 order-md-2 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
    <div className="p-4  w-100"> {/* Add w-100 to ensure the padding affects the content correctly */}
        <h2>Sign Up</h2>
        
            <form onSubmit={handleSubmit} className="col-md-8 mt-4">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={userData.username}
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
                        value={userData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password1"
                        name="password1"
                        placeholder="Password"
                        value={userData.password1}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password2" className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password2"
                        name="password2"
                        placeholder="Confirm Password"
                        value={userData.password2}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
          
        </div>
    </div>
</div>
            </div>
        
    );
};

export default Signup;
