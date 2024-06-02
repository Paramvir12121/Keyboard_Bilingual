import React, { useState, useEffect } from 'react';
import baseApi from '../hooks/BaseApi';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Lessons = () => {
    const [lessons, setLessons] = useState([]);
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
            return;
        }

        const fetchLessons = async () => {
            try {
                const response = await baseApi.get('/lessons/all',{}, {
                    withCredentials: true
                });
                setLessons(response.data);
                print("lessons data:", response.data)
            } catch (error) {
                console.error('Error fetching lessons:', error);
            }
        };

        fetchLessons();
    }, [isLoggedIn, navigate]);

    if (!isLoggedIn) {
        return <p>Redirecting to login...</p>;
    }

    return (
        <div>
            <h1>Lessons</h1>
            <ul>
                {lessons.map((lesson) => (
                    <li key={lesson.id}>{lesson.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Lessons;
