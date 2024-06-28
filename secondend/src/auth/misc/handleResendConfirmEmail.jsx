import React,{useState} from 'react'
import baseApi from '../../hooks/baseApi'
import Cookies from 'js-cookie'

const handleResendConfirmEmail = async() => {

        try {
        const email = Cookies.get('signup_email');
        console.log('Email:', email);
        const api = baseApi();
        const response = await api.post('/auth/signup_resend_code', {email});
        console.log('resend_email_Response:', response.data);
        } catch (error) {
        console.error('Error during signup:', error);   
            }
        }
       

export default handleResendConfirmEmail