import React, { useState, useEffect } from 'react';
import baseApi from '../Api/BaseApi';

const LessonList = () => {
    const [lessons, setLessons] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const response = await baseApi.get('/lessons/all');
                setLessons(response.data);
            } catch (error) {
                setError(error.response ? error.response.data.message : 'An error occurred');
            }
        };

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
