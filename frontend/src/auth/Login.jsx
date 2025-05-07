import React, { useContext, useState } from "react";
import baseApi from "../hooks/baseApi";
import ErrorMessage from "../components/common/ErrorMessage";
import SuccessMessage from "../components/common/SuccessMessage";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'; // Import Spinner from Bootstrap
import useFetchSettings from "../hooks/useFetchSettings";
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import ROUTES from '../Routes';

const Login = () => {
    const [signedIn, setSignedIn] = useContext(Context);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const { fetchSettings } = useFetchSettings();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return; // Prevent multiple submissions

        setError(null);
        setMessage(null);
        setLoading(true);

        try {
            const api = baseApi();
            const response = await api.post('/auth/login', { username, password }, { withCredentials: true });
            if (response.data) {
                Cookies.set('signedIn', 'true');
                Cookies.set('username', response.data.username);
                Cookies.set('email', response.data.email);
                setSignedIn(true);
                setMessage('Login successful');
                // fetchSettings();
                // setTimeout(() => {
                    navigate(ROUTES.DASHBOARD);
                // }, 5); // Slight delay to show success message
            }
        } catch (error) {
            setError(error.response?.data?.message || "An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
            <Card className="shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username" className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                placeholder="Enter your username"
                                type="text"
                                value={username}
                                autoComplete="username"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                disabled={loading} // Disable input when loading
                            />
                        </Form.Group>

                        <Form.Group controlId="password" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                placeholder="Enter your password"
                                type="password"
                                value={password}
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                disabled={loading} // Disable input when loading
                            />
                        </Form.Group>

                        {error && <ErrorMessage message={error} />}
                        {message && <SuccessMessage message={message} />}
                        <br />
                        <Button type="submit" variant="primary" className="w-100 mb-3" disabled={loading}>
                            {loading ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />{' '}
                                    Logging in...
                                </>
                            ) : (
                                'Login'
                            )}
                        </Button>
                        <div className="text-center">
                            <Link to={ROUTES.FORGOT_PASSWORD}>Forgot Password?</Link><br />
                            Don't have an account? <Link to={ROUTES.SIGNUP}>Signup</Link> here!
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;
