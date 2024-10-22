import React, { useState, useEffect } from 'react';
import LessonList from './LessonList';
import baseApi from '../../hooks/baseApi';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';

const LessonLists = () => {
    const api = baseApi();
    const [groupedLessons, setGroupedLessons] = useState({});
    const [keyboardLayout, setKeyboardLayout] = useState('qwerty');
    const [selectedTopic, setSelectedTopic] = useState(''); // State to manage the selected topic

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const response = await api.get('/lessons/all', { withCredentials: true });
                console.log('Response:', response);
                console.log('Data response:', response.data);
                const lessons = response.data;
                const completedLessons = response.data.completed_lessons;
                
                
                const grouped = lessons.reduce((acc, lesson) => {
                    const topic = lesson.topic || 'Uncategorized';
                    if (!acc[topic]) {
                        acc[topic] = [];
                    }
                    acc[topic].push(lesson);
                    return acc;
                }, {});

                setGroupedLessons(grouped);
                // Set the first topic as selected by default
                if (Object.keys(grouped).length > 0) {
                    setSelectedTopic(Object.keys(grouped)[0]);
                }
            } catch (error) {
                console.error('Error fetching lessons:', error);
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
        <Container fluid>
            <Row>
                {/* Vertical Navbar for topics */}
                <Col xs={4} md={3} >
                    <div className="nav-column">
                        {Object.keys(groupedLessons).map(topic => (
                                <Button 
                                    active={topic === selectedTopic} 
                                    onClick={() => setSelectedTopic(topic)}
                                    className='topic-button'
                                    key={topic}
                                >
                                    {topic}
                               
                            </Button>
                            
                        ))}
                    </div>
                </Col>

                {/* Lessons list on the right */}
                <Col xs={8} md={9} className='lesson-list-column'>
                    {selectedTopic && groupedLessons[selectedTopic] && (
                        <>
                            <h2>{selectedTopic}</h2>
                            <Row>
                                {groupedLessons[selectedTopic]
                                    .filter(lesson => lesson.keyboard_type === keyboardLayout || lesson.keyboard_type === 'all')
                                    .map((lesson) => (
                                        <Col key={lesson.id} xs={12} >
                                            <LessonList
                                                id={lesson.id}
                                                title={lesson.title}
                                                description={lesson.description}
                                            />
                                        </Col>
                                    ))}
                            </Row>
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default LessonLists;
