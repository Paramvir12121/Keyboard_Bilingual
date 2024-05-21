import React, { useState, useEffect } from 'react';
import baseApi from '../Api/BaseApi';

function Lesson() {
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  const fetchLessonData = async () => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setError('No access token found. Please log in.');
        return;
      }

      const response = await baseApi.get('/lessons/all', {}, {
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
      {data ? (
        <div>
          {data.map((lesson, index) => (
            <div key={index}>
              <h2>{lesson.title}</h2>
              <p>{lesson.description}</p>
              <p>{lesson.content}</p>
              {/* Render other lesson fields as necessary */}
            </div>
          ))}
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
}

export default Lesson;
