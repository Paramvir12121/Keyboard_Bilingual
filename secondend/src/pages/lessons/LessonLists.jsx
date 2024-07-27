import React, { useState, useEffect } from 'react';
import LessonList from './LessonList';
import baseApi from '../../hooks/baseApi';
import { Container, Row, Col } from 'react-bootstrap';

const LessonLists = () => {
    const api = baseApi();
    const [groupedLessons, setGroupedLessons] = useState({});

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const response = await api.get('/lessons/all', { withCredentials: true });
                const lessons = response.data;
                
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
        <Container>
            {Object.entries(groupedLessons).map(([topic, lessons]) => (
                <div key={topic}>
                    <h2 className="mb-3">{topic}</h2>
                    <Row className="flex-nowrap overflow-auto">
                        {lessons.map((lesson) => (
                            <Col key={lesson.id} xs={12} md={6} lg={4} xl={3} className="mb-3">
                                <LessonList
                                    id={lesson.id}
                                    title={lesson.title}
                                    description={lesson.description}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            ))}
        </Container>
    );
};

export default LessonLists;