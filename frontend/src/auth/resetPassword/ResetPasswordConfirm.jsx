import React, { useState } from 'react';
import Cookies from 'js-cookie';
import baseApi from '../../hooks/baseApi';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/common/ErrorMessage";
import SuccessMessage from "../../components/common/SuccessMessage";

const ResetPasswordConfirm = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        // check if username and email are stored in cookies
        const username = Cookies.get('forgot_password_username');
        const email = Cookies.get('forgot_password_email');
        e.preventDefault();
        try {
            const api = baseApi();
            const response = await api.post('/auth/reset_forgotten_password_confirmation', { "verificationCode":code, "username": username, "email": email,"password":password }, { withCredentials: true });
            console.log("data: ", response);
            if (response.status === 201) {
                console.log("data: ", response.data);
                document.cookie = `username=${response.data.username}`;
                document.cookie = `email=${response.data.email}`;
                setMessage('Password reset confirmation successful. Please proceed to reset your password.');
                setTimeout(() => navigate('/reset-password-confirm'), 500); // Adjust the route based on where you want to navigate
            }
        } catch (error) {
            console.error("Error: ", error.response?.data?.message || 'Something went wrong.');
            setError(error.response?.data?.message || 'Something went wrong.');
        }
    }

    return (
        <>
            <div>Reset Password Confirmation</div>
            <div className="row mb-3 text-center">
                <div className="col-4"></div>
                <Form className="col-4" onSubmit={handleSubmit}>
                    <Form.Group controlId="VerificationCode">
                        <Form.Control 
                            placeholder="Enter Verification Code" 
                            type="text" 
                            value={code} 
                            maxLength={6}
                            autoComplete="one-time-code" 
                            onChange={(e) => setCode(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group controlId="Password">
                        <Form.Control 
                            placeholder="Enter new password" 
                            type="password" 
                            autoComplete="new-password" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Card.Footer>
                        Don't have an account? <Link to="/signup">Signup</Link> here!
                    </Card.Footer>
                    <button type="submit">Submit Code</button>
                    {error ? <ErrorMessage message={error} /> : message && <SuccessMessage message={message} />}
                </Form>
                <div className="col-4"></div>
            </div>
        </>
    )
}

export default ResetPasswordConfirm;
