import React, { useState } from 'react';
import baseApi from "../hooks/baseApi";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; // Bootstrap Button
import { Link } from 'react-router-dom';
import ROUTES from '../Routes'; // Importing ROUTES
import ErrorMessage from '../components/common/ErrorMessage';
import SuccessMessage from '../components/common/SuccessMessage';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setErrorMessage('');
        setMessage('');
        setLoading(true);
        
        try {
            const api = baseApi();
            const response = await api.post('/auth/signup', { username, email, password }, { withCredentials: true });
            if (response.data) {
                Cookies.set('signup_email', email, { expires: 1 });
                setMessage('Signup successful, please confirm your email!');
                setTimeout(() => {
                    navigate(ROUTES.CONFIRM_EMAIL); // Redirect to confirm email page
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
            {loading ? (
                <div>Loading...</div> // Loading spinner can be added here if needed
            ) : (
                <Card className="shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
                    <Card.Body>
                        <h2 className="text-center mb-4">Signup</h2>
                        <Form onSubmit={handleSignup}>
                            <Form.Group controlId="email" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="username" className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="password" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            {errorMessage && <ErrorMessage message={errorMessage} />}
                            {message && <SuccessMessage message={message} />}
                            <br />
                            <Button type="submit" variant="primary" className="w-100 mb-3">
                                Signup
                            </Button>

                            <p className="text-center">
                                Already have an account? <Link to={ROUTES.LOGIN}>Login Here!</Link>
                            </p>
                        </Form>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default Signup;
