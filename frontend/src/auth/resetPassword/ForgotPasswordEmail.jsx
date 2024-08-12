import React,{useState} from 'react'
import Cookies from 'js-cookie'
import baseApi from '../../hooks/baseApi';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/common/ErrorMessage";
import SucessMessage from "../../components/common/SuccessMessage";

const ForgotPasswordEmail = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const api = baseApi();
            const response = await api.post('/auth/reset_forgotten_password_request', {email: email}, {withCredentials: true});
            console.log("data: ",response);
            if (response.status === 201) {
                console.log("data: ", response.data);
                // document.cookie = `username=${response.data.username}`;
                document.cookie = `email=${response.data.email}`;
                setTimeout(() => navigate('/reset-password-confirm'), 500);
            }
        } catch (error) {
            console.error("Error: ",error.response.data.message);
            setError(error.response.data.message);
    }
}
  return (
    <>
            <div className="row mb-3 text-center">
            <div className="col-4"></div>
            <Form className="col-4" onSubmit={handleSubmit}>
                <Form.Group controlId="Email">
                    <Form.Control placeholder="Enter your username" type="email" value={email} autoComplete="email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Card.Footer>
                    Don't have an account?<Link to="/signup">Signup</Link> here!
                </Card.Footer>
                  <button type="submit">Request Code</button>
                  {error ? <ErrorMessage message={error} /> : <SucessMessage message={message} />}
              </Form>
              <div className="col-4"></div>
              </div>
              </>
  )
}

export default ForgotPasswordEmail