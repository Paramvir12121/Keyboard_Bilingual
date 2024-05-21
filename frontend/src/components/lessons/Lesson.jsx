import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseApi from '../Api/BaseApi';


function Lesson() {
  const [data,setData]= useState('')

  function fetchLessonData () {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
          setError('No access token found. Please log in.');
          return;  
      }
      
      const response = await api.post('/auth/protected', {}, {
        headers: {
            Authorization: `Bearer ${token}`
          }
        });


  }catch (error) {
        if (error.response && error.response.status === 401) {
            setError('Unauthorized. Please log in again.');
        } else {
            setError('An error occurred while fetching the data.');
        }
    }
  }

  useEffect(() => {
    fetchLessonData();
}, []);
  // const response = await baseApi.post('/auth/protected', {}, {
  //   headers: {
  //       Authorization: `Bearer ${token}`
  //   }
  
  return (
    <h1>Lesson</h1>
    
  )
}

export default Lesson