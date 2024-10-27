import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import handleResendConfirmEmail from './handleResendConfirmEmail';
import ErrorMessage from '../../components/common/ErrorMessage';
import baseApi from '../../hooks/baseApi';
import Cookies from 'js-cookie';
import ROUTES from '../../Routes'; // Importing ROUTES for navigation
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ConfirmEmail = () => {
    const [error, setError] = useState(''); // Error state
    const [verificationCode, setVerificationCode] = useState('');
    const navigate = useNavigate();

    const handleVerificationCodeChange = (e) => {
        setVerificationCode(e.target.value);
    };

    const handleResendCode = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setError(''); // Clear previous error message
        try {
            await handleResendConfirmEmail(); // Await the resend function to handle async
        } catch (error) {
            setError('An error occurred while trying to resend the confirmation email. Please try again.');
        }
    };

    const handleConfirmEmail = async () => {
        try {
            const api = baseApi();
            const email = Cookies.get('signup_email');
            console.log('Email:', email);
            console.log('Verification Code:', verificationCode);
            const response = await api.post('/auth/signup_confirm_email', { email, verificationCode });

            if (response.status === 200) {
                Cookies.remove('signup_email');
                navigate(ROUTES.LOGIN); // Navigate using ROUTES
            }
        } catch (error) {
            console.error('Error during confirmation:', error);
            setError('An error occurred while trying to confirm the email. Please try again.');
        }
    };

    return (
        <>
        <Card className="shadow p-4">
            <h1>Confirm Email</h1>
            <input 
                type="text" 
                value={verificationCode} 
                onChange={handleVerificationCodeChange} 
                placeholder="Enter verification code" 
            />
            <br />  
            
            <div className="d-flex justify-content-start gap-2 mt-3">
        <Button onClick={handleConfirmEmail} size="sm" className="w-auto">Confirm</Button>
        <Button onClick={handleResendCode} size="sm" className="w-auto">Resend Code</Button>
    </div>
            
            {error && <ErrorMessage message={error} />}
            </Card>
        </>
    );
};

export default ConfirmEmail;
