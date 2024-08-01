import React from 'react'
import baseApi from './baseApi';


    const api = baseApi();

    export const getTypingSpeed = async () => {
      try{
        const response = await api.get('/lessons/typingspeed', {withCredentials: true});
        console.log(response.data);
        return response.data;
        
    }catch(error){
        console.error(error);
    }   
    }

