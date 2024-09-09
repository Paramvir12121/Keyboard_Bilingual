import React, { useContext, useState } from "react";
import baseApi from "../hooks/baseApi";
import FormInput from "../components/common/FormInput";
import ErrorMessage from "../components/common/ErrorMessage";
import SuccessMessage from "../components/common/SuccessMessage";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
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
            console.log(response.data);
            if (response.data) {
                console.log("data: ", response.data);
                
                Cookies.set('signedIn', 'true');
                Cookies.set('username', response.data.username);
                Cookies.set('email', response.data.email);
                setSignedIn(true);
                setLoading(true); // Set loading to true after successful login
                setMessage('Login successful');
                await fetchSettings();
                
                    
                // Use setTimeout to show loading state for a moment before redirecting
                setTimeout(() => {
                    navigate(ROUTES.DASHBOARD);
                }, 2000);
            }
        } catch (error) {
            console.error("Error: ", error.response.data.message);
            setError(error.response.data.message);
        }
    }

    return (
        <>
            
            <div className="row mb-3 text-center">
                <div className="col-4"></div>
                {loading ? (
                    <div className="col-4">
                        <Loading />
                        
                    </div>
                ) : (
                    <>
                    <h2>Login</h2>  
                    <div className="row mb-3 text-center">
                    <div className="col-4"></div>
                    <Form className="col-4" onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Control
                                placeholder="Username"
                                type="text"
                                value={username}
                                autoComplete="username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="password">
                            <Form.Control
                                placeholder="Enter Your Password"
                                type="password"
                                value={password}
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Card.Footer>
                            <Link to={ROUTES.FORGOT_PASSWORD}>Forgot Password?</Link>
                        </Card.Footer>
                        <Card.Footer>
                            Don't have an account? <Link to={ROUTES.SIGNUP}>Signup</Link> here!
                        </Card.Footer>
                        <button type="submit">Login</button>
                        {error && <ErrorMessage message={error} />}
                        {message && <SuccessMessage message={message} />}
                    </Form>
                    </div>
                    </>
                )}
                <div className="col-4"></div>
            </div>
        </>
    );
}

export default Login;