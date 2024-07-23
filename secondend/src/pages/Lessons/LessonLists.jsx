import React, { useState, useEffect } from 'react';
import LessonList from './LessonList';
import baseApi from '../../hooks/baseApi';

const LessonLists = () => {
    const api = baseApi();
    const [groupedLessons, setGroupedLessons] = useState({});

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const response = await api.get('/lessons/all', { withCredentials: true });
                const lessons = response.data;
                
                // Group lessons by topic
                const grouped = lessons.reduce((acc, lesson) => {
                    const topic = lesson.topic || 'Uncategorized';
                    if (!acc[topic]) {
                        acc[topic] = [];
                    }
                    acc[topic].push(lesson);
                    return acc;
                }, {});

                setGroupedLessons(grouped);
            } catch (error) {
                console.error('Error fetching lessons:', error);
                // Handle the error in the UI here
            }
        };

        fetchLessons();
    }, []);

    return (
        <div>
            {Object.entries(groupedLessons).map(([topic, lessons]) => (
                <div key={topic}>
                    <h2>{topic}</h2>
                    {lessons.map((lesson) => (
                        <LessonList
                            key={lesson.id}
                            id={lesson.id}
                            title={lesson.title}
                            topic={lesson.topic}
                            description={lesson.description}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default LessonLists;