import React, { useState } from 'react';
import baseApi from "../hooks/baseApi";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ROUTES from '../Routes';
import ErrorMessage from '../components/common/ErrorMessage';
import SuccessMessage from '../components/common/SuccessMessage';
import Spinner from 'react-bootstrap/Spinner';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return re.test(password);
    };

    const validateForm = () => {
        const errors = {};
        if (!validateEmail(formData.email)) {
            errors.email = 'Please enter a valid email address.';
        }
        if (formData.username.length < 3) {
            errors.username = 'Username must be at least 3 characters long.';
        }
        if (!validatePassword(formData.password)) {
            errors.password = 'Password must be at least 8 characters, including one uppercase letter, one lowercase letter, and one number.';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setMessage('');
        setFormErrors({});

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            const api = baseApi();
            const response = await api.post('/auth/signup', formData, { withCredentials: true });
            if (response.data) {
                Cookies.set('signup_email', formData.email, { expires: 1 });
                Cookies.set('signup_username', formData.username, { expires: 1 });
                setMessage('Signup successful, please confirm your email!');
                setTimeout(() => {
                    navigate(ROUTES.CONFIRM_EMAIL);
                }, 2000);
            }
        } catch (error) {
            console.error('Error during signup:', error);
            setErrorMessage(error.response?.data?.message || 'An error occurred during signup.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
            <Card className="shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Signup</h2>
                    <Form noValidate onSubmit={handleSignup}>
                        <Form.Group controlId="email" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                isInvalid={!!formErrors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formErrors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="username" className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                value={formData.username}
                                onChange={handleChange}
                                isInvalid={!!formErrors.username}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formErrors.username}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="password" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                isInvalid={!!formErrors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formErrors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {errorMessage && <ErrorMessage message={errorMessage} />}
                        {message && <SuccessMessage message={message} />}
                        <br />
                        <Button type="submit" variant="primary" className="w-100 mb-3" disabled={loading}>
                            {loading ? (
                                <>
                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                    {' '}Loading...
                                </>
                            ) : 'Signup'}
                        </Button>

                        <p className="text-center">
                            Already have an account? <Link to={ROUTES.LOGIN}>Login Here!</Link>
                        </p>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Signup;
