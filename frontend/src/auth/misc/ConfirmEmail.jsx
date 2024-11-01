import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import handleResendConfirmEmail from './handleResendConfirmEmail';
import ErrorMessage from '../../components/common/ErrorMessage';
import baseApi from '../../hooks/baseApi';
import Cookies from 'js-cookie';
import ROUTES from '../../Routes'; // Importing ROUTES for navigation
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
            const username = Cookies.get('signup_username');
            console.log('Email:', email);
            console.log('Verification Code:', verificationCode);
            const response = await api.post('/auth/signup_confirmation', { email, verificationCode, username });

            if (response.status === 200) {
                Cookies.remove('signup_email');
                Cookies.remove('signup_username');
                navigate(ROUTES.LOGIN); // Navigate using ROUTES
            }
        } catch (error) {
            console.error('Error during confirmation:', error);
            setError('An error occurred while trying to confirm the email. Please try again.');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
            <Card className="shadow p-4" style={{ maxWidth: '500px', width: '100%' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Confirm Email</h2>
                    <Form>
                        <Form.Group controlId="verificationCode" className="mb-3">
                            <Form.Label>Verification Code</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter verification code"
                                value={verificationCode}
                                onChange={handleVerificationCodeChange}
                            />
                        </Form.Group>

                        <div className="d-flex justify-content-center gap-2 mt-3">
                            <Button onClick={handleConfirmEmail} size="sm" className="w-auto">Confirm</Button>
                            <Button onClick={handleResendCode} size="sm" variant="secondary" className="w-auto">Resend Code</Button>
                        </div>
                        
                        {error && <ErrorMessage message={error} />}
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ConfirmEmail;
