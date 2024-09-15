import React, { useContext, useState } from "react";
import baseApi from "../hooks/baseApi";
import ErrorMessage from "../components/common/ErrorMessage";
import SuccessMessage from "../components/common/SuccessMessage";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; // Import Button from Bootstrap
import useFetchSettings from "../hooks/useFetchSettings";
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import ROUTES from '../Routes';
import Loading from "../components/common/Loading";

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
        setError(null);
        setMessage(null);
        
        try {
            const api = baseApi();
            const response = await api.post('/auth/login', { username, password }, { withCredentials: true });
            if (response.data) {
                Cookies.set('signedIn', 'true');
                Cookies.set('username', response.data.username);
                Cookies.set('email', response.data.email);
                setSignedIn(true);
                setLoading(true);
                setMessage('Login successful');
                fetchSettings();
                setTimeout(() => {
                    navigate(ROUTES.DASHBOARD);
                }, 2000);
            }
        } catch (error) {
            setError(error.response?.data?.message || "An unexpected error occurred");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
            {loading ? (
                <Loading />
            ) : (
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
                                />
                            </Form.Group>

                            {error && <ErrorMessage message={error} />}
                            {message && <SuccessMessage message={message} />}
                            <br />
                            <Button type="submit" variant="primary" className="w-100 mb-3">
                                Login
                            </Button>
                            
                            <Link to={ROUTES.FORGOT_PASSWORD}>Forgot Password?<br />    
                            </Link>Don't have an account? <Link to={ROUTES.SIGNUP}>Signup</Link> here!
                            
                        </Form>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default Login;
