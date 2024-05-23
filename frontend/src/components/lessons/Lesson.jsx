import React, { useState, useEffect } from 'react';
import baseApi from '../Api/BaseApi';
import LessonCard from './LessonCard';


function Lesson() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const fetchLessonData = async () => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setError('No access token found. Please log in.');
        return;
      }

      const response = await baseApi.get('/lessons/all', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("All Lessons: ", response.data);
      setData(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Unauthorized. Please log in again.');
      } else {
        setError('An error occurred while fetching the data.');
      }
    }
  };

  useEffect(() => {
    fetchLessonData();
  }, []);

  

  return (
    <div>
      <h1>Lessons</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data.length > 0 ? (
        <div>
            <LessonCard lesson={data[0]} />
            <LessonCard lesson={data[1]} />
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
}

export default Lesson;
