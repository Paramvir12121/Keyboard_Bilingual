import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ErrorMessage from "../../components/common/ErrorMessage";
import SuccessMessage from "../../components/common/SuccessMessage";
import baseApi from '../../hooks/baseApi';

const ForgotPassword = () => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setMessage(null);
        try {
            const api = baseApi();
            const response = await api.post('/auth/reset_forgotten_password_request', { username: username }, { withCredentials: true });
            if (response.status === 201) {
                setMessage(response.data.message);
                setTimeout(() => navigate('/reset-password-confirm'), 500);
            }
        } catch (error) {
            console.log("Error all: ", error.response);
            const errorMessage = error.response?.data?.message || 'An error occurred! Please try again after some time.';
            console.error("Error: ", errorMessage);
            setError(errorMessage);
        }
    }

    return (
        <>
            <div className="row mb-3 text-center">
                <div className="col-4"></div>
                <Form className="col-4" onSubmit={handleSubmit}>
                    <Form.Group controlId="Username">
                        <Form.Control
                            placeholder="Enter your username"
                            type="text"
                            value={username}
                            autoComplete="username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Card.Footer>
                        <Link to="/forgot-password-email">Can't Remember your Username? </Link>
                    </Card.Footer>
                    <Card.Footer>
                        Don't have an account? <Link to="/signup">Signup</Link> here!
                    </Card.Footer>
                    <button type="submit">Request Code</button>
                    {error && <ErrorMessage message={error} />}
                    {message && <SuccessMessage message={message} />}
                </Form>
                <div className="col-4"></div>
            </div>
        </>
    );
}

export default ForgotPassword;
