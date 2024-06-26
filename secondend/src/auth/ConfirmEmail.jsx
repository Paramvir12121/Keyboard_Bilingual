import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmEmail = () => {
    const [verificationCode, setVerificationCode] = useState('');
    const navigate = useNavigate();

    const handleVerificationCodeChange = (e) => {
        setVerificationCode(e.target.value);
    };

    const handleConfirmEmail = () => {
        // Perform verification logic here
        // If verification is successful, redirect to login page
        navigate('/login');
    };

    return (
        <div>
            <h1>Confirm Email</h1>
            <input
                type="text"
                value={verificationCode}
                onChange={handleVerificationCodeChange}
                placeholder="Enter verification code"
            />
            <button onClick={handleConfirmEmail}>Confirm</button>
        </div>
    );
};

export default ConfirmEmail;