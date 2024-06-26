import React, {useContext, useState} from "react";
import baseApi from "../hooks/baseApi";
import FormInput from "../components/common/FormInput";
import ErrorMessage from "../components/common/ErrorMessage";
import SuccessMessage from "../components/common/SuccessMessage";
import { useNavigate } from "react-router-dom";
import {Context} from "../App";
import SucessMessage from "../components/common/SuccessMessage";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';



const Login = () => {
    const [signedIn, setSignedIn] = useContext(Context);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const api = baseApi();
            const response = await api.post('/auth/login', {username, password}, {withCredentials: true});
            console.log(response.data);
            if (response.data) {
                console.log(response.data);
                setMessage('Login successful');
                setSignedIn(true);
                localStorage.setItem('signedIn', 'true')
                setTimeout(() => navigate('/dashboard'), 500);
            }
        } catch (error) {
            console.error("Error: ",error.response.data.message);
            setError(error.response.data.message);
        }
    }

    return (
          <>
                 Login
            <div className="row mb-3 text-center">
            <div className="col-4"></div>
            <Form className="col-4" onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Card.Footer>
                    Don't have an account?<Card.Link href="/signup">Signup</Card.Link> here!
                </Card.Footer>
                  <button type="submit">Login</button>
                  {error ? <ErrorMessage message={error} /> : <SucessMessage message={message} />}
              </Form>
              <div className="col-4"></div>
              </div>
              </>
        
    )
}


export default Login;