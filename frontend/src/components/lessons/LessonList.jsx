import React, { useState, useEffect } from 'react';
import baseApi from '../Api/BaseApi';
import useAuth from '../auth/useAuth';

const LessonList = () => {
    const [lessons, setLessons] = useState([]);
    const [error, setError] = useState('');
    const [useAuth, setUseAuth] = useAuth()

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const response = await baseApi.get('/lessons/all');
                setLessons(response.data);
            } catch (error) {
                setError(error.response ? error.response.data.message : 'An error occurred');
            }
        };
        console.log(useAuth)
        fetchLessons();
    }, []);


    return (
        <div>
            <h2>Lessons</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {lessons.map(lesson => (
                    <li key={lesson.id}>
                        {lesson.title} - {lesson.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LessonList;
