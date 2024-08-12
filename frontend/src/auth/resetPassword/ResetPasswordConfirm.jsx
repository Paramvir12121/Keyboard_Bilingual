import React,{useState} from 'react'
import Cookies from 'js-cookie'
import baseApi from '../../hooks/baseApi';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/common/ErrorMessage";
import SucessMessage from "../../components/common/SuccessMessage";


const ResetPasswordConfirm = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const api = baseApi();
            const response = await api.post('/auth/reset_forgotten_password_confirmation', {email}, {withCredentials: true});
            console.log("data: ",response);
            if (response.status === 201) {
                console.log("data: ", response.data);
                document.cookie = `username=${response.data.username}`;
                document.cookie = `email=${response.data.email}`;
                setTimeout(() => navigate('/reset-password-confirm'), 500);
            }
        } catch (error) {
            console.error("Error: ",error.response.data.message);
            setError(error.response.data.message);
    }
}
  return (
    <div>ResetPasswordConfirm</div>
  )
}

export default ResetPasswordConfirm