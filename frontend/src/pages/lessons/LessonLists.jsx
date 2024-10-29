import React, { useState, useEffect } from 'react';
import LessonList from './LessonList';
import baseApi from '../../hooks/baseApi';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';

const LessonLists = ({userTypingData}) => {
    const api = baseApi();
    const [groupedLessons, setGroupedLessons] = useState({});
    const [keyboardLayout, setKeyboardLayout] = useState('qwerty');
    const [selectedTopic, setSelectedTopic] = useState(''); 
    const [completedLessons, setCompletedLessons] = useState([]); 
    
    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const response = await api.get('/lessons/all', { withCredentials: true });
                const lessons = response.data.lessons;
                setCompletedLessons(response.data.completed_lessons);
                
                const grouped = lessons.reduce((acc, lesson) => {
                    const topic = lesson.topic || 'Uncategorized';
                    if (!acc[topic]) {
                        acc[topic] = [];
                    }
                    acc[topic].push(lesson);
                    return acc;
                }, {});

                setGroupedLessons(grouped);
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
    console.log("user lessons on list", userTypingData);

    

    return (
        <Container fluid>
            <Row>
                {/* Vertical Navbar for topics */}
                <Col xs={12} md={3} xl={2} >
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
                <Col xs={12} md={9} xl={10} className='lesson-list-column'>
                    {selectedTopic && groupedLessons[selectedTopic] && (
                        <>
                            <h2>{selectedTopic}</h2>
                            <Row>
                                {/* Separate completed and not completed lessons */}
                                {groupedLessons[selectedTopic]
                                    .filter(lesson => lesson.keyboard_type === keyboardLayout || lesson.keyboard_type === 'all')
                                    .sort((a, b) => completedLessons.includes(a.id) - completedLessons.includes(b.id))
                                    .map((lesson) => (
                                        <Col key={lesson.id} xs={12}>
                                            <LessonList
                                                id={lesson.id}
                                                title={lesson.title}
                                                description={lesson.description}
                                                completed={completedLessons.includes(lesson.id)}
                                                userTypingData={userTypingData}
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
