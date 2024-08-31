import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ThirdPage = () => {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate('/signup'); // Navigate to the signup page
    };

    return (
        <div className="fullscreen-container">
            <h1>Get Started Now</h1>
            <p>Join thousands of users improving their typing skills. Dive into interactive lessons and games designed to enhance your touch typing on any keyboard layout.</p>
            <Button variant="primary" size="lg" onClick={handleSignupClick}>
                Signup
            </Button>
        </div>
    );
};

export default ThirdPage;
