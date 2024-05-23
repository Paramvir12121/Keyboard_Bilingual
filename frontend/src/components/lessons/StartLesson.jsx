import React from 'react'
// import axios from 'axios';
import baseApi from '../Api/BaseApi';

const StartLesson = () => {
    
const startLesson = async (lessonId) => {
    try {
        const token = localStorage.getItem('access_token');
        if (!token) {
            console.error('No access token found. Please log in.');
            return;
        }

        const response = await baseApi.post(`/user_lesson/${lessonId}`, {
            completed: false,
            score: 0,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log('User lesson started successfully:', response.data);
    } catch (error) {
        console.error('Error starting lesson:', error.response ? error.response.data.message : error.message);
    }
};

// Call this function with the specific lessonId when a user starts a lesson
startLesson(lessonId);



  return (
    <>
        <div>StartLesson</div>
    </>
    
  )
}

export default StartLesson