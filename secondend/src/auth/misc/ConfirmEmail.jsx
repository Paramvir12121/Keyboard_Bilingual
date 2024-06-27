import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import handleResendConfirmEmail from './handleResendConfirmEmail';
import ErrorMessage from '../../components/common/ErrorMessage';
import baseApi from '../../hooks/baseApi';

const ConfirmEmail = () => {
    const [error, setError] = useState(''); // Add error state
    const [verificationCode, setVerificationCode] = useState('');
    const navigate = useNavigate();

    const handleVerificationCodeChange = (e) => {
        setVerificationCode(e.target.value);
    };

    const handleResendCode = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setError(''); // Clear previous error message
        try {
          handleResendConfirmEmail();
        } catch (error) {
          setError('An error occurred while trying to resend the confirmation email. Please try again.');
        }
      };

    const handleConfirmEmail = () => {
        // Perform verification logic here
        try{
        const api = baseApi();
        const email = Cookies.get('signup_email');
        const response = await api.post('/auth/signup_confirm_email', {email, verificationCode});
        if (response.data) {
            Cookies.remove('signup_email');
        }
        }catch (error) {
            console.error('Error during signup:', error);
            setError('An error occurred while trying to confirm the email. Please try again.');
        }

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
            <button onClick={handleResendCode}>Resend Code</button>
            <ErrorMessage message={error} />
        </div>
    );
};

export default ConfirmEmail;