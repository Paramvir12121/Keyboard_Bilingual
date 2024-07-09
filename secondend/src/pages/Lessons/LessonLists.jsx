import React, { useState, useEffect } from 'react';
import LessonList from './LessonList';
import baseApi from '../../hooks/baseApi';

const LessonLists = () => {
    const api = baseApi();
    const [lessonLists, setLessonLists] = useState([]);

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const response = await api.get('/lessons/all', { withCredentials: true });
                setLessonLists(response.data);
            } catch (error) {
                console.error(error);
                // Optionally, handle the error in the UI here
            }
        };

        fetchLessons();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            {lessonLists.map((lessonList) => (
                <LessonList
                    key={lessonList.id}
                    id={lessonList.id}
                    title={lessonList.title}
                    description={lessonList.description}
                />
            ))}
        </div>
    );
};

export default LessonLists;