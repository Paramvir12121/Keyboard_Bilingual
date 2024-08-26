import React, { useState, useEffect } from 'react';
import SpeedTestList from './SpeedTestList';
import baseApi from '../../hooks/baseApi';
import { Container, Row, Col } from 'react-bootstrap';
import Cookies from 'js-cookie';

const SpeedTestLists = () => {
    const api = baseApi();
    const [groupedLessons, setGroupedLessons] = useState({});
    const [keyboardLayout, setKeyboardLayout] = useState('qwerty');

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
        const fetchSettings = async () => {
            const settings = Cookies.get('settings');
            if (settings) {
                try {
                    const parseSettings = JSON.parse(settings);
                    setKeyboardLayout(parseSettings.keyboard_layout || 'qwerty');
                } catch (error) {
                    console.error('Error parsing settings from cookies:', error);
                }
            }
        };
      
        fetchSettings();
        fetchLessons();
    }, []);

    return (
        <div>
            SpeedTestLists
            <Container>
            {Object.entries(groupedLessons).map(([topic, lessons]) => (
                <div key={topic} className="">
                    <h2 className="">{topic}</h2>
                    <Row>
                        {/* Only show lessons where lesson.keyboard_type matches keyboardLayout */}
                        {lessons
                            .filter(lesson => lesson.keyboard_type === keyboardLayout)
                            .map((lesson) => (
                                <Col key={lesson.id} xs={12} className="">
                                    <SpeedTestList
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
        </div>
    );
};

export default SpeedTestLists;