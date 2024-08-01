import React from 'react'
import baseApi from './baseApi';

const getUserStats = () => {
    const api = baseApi();

    const getTypingSpeed = async () => {
        const response = await api.get('/stats/typingSpeed', {withCredentials: true});
        return response.data;
    }

    



  return (
    <div>getUserStats</div>
  )
}

export default getUserStats