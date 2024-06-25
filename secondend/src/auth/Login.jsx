import React, {useContext, useState} from "react";
import baseApi from "../hooks/baseApi";
import FormInput from "../components/common/FormInput";
import ErrorMessage from "../components/common/ErrorMessage";
import SuccessMessage from "../components/common/SuccessMessage";
import { useNavigate } from "react-router-dom";
import {Context} from "../App";
import SucessMessage from "../components/common/SuccessMessage";



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
                setTimeout(() => navigate('/dashboard'), 500);
            }
        } catch (error) {
            console.error("Error: ",error.response.data.message);
            setError(error.response.data.message);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                  <FormInput label="Username" type="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <FormInput label="Password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <button type="submit">Login</button>
                  {error ? <ErrorMessage message={error} /> : <SucessMessage message={message} />}
              </form>
              
        </div>
    )
}


export default Login;