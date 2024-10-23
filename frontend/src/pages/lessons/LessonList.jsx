import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../Routes';  // Import the routes
import { Row, Col, Card } from 'react-bootstrap';

const LessonList = ({ id, title, description, completed, userTypingData }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(ROUTES.LESSON_PAGE(id));  // Use ROUTES.LESSON_PAGE to generate the route
    };

    // Filter the userTypingData to get all the entries for the current lesson
    const lessonTypingData = userTypingData.filter(data => data.lesson_id === id);

    // Find the highest score and accuracy from the filtered data
    const highestScore = lessonTypingData.length > 0 
        ? Math.max(...lessonTypingData.map(data => data.score)) 
        : null;
    const highestAccuracy = lessonTypingData.length > 0 
        ? Math.max(...lessonTypingData.map(data => data.accuracy)) 
        : null;

    return (
        <Card 
            key={id} 
            className={`lesson-card ${completed ? 'completed-lesson' : ''}`} 
            onClick={handleClick} 
            style={{ cursor: 'pointer', marginBottom: '20px' }}
        >
            <Card.Body>
                <Row>
                    {/* Left 3/4th section: Lesson Title and Description */}
                    <Col md={9}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </Col>

                    {/* Right 1/4th section: Score and Accuracy for completed lessons */}
                    {completed && lessonTypingData.length > 0 && (
                        <Col md={3} className="text-right" style={{ borderLeft: '1px solid #ddd' }}>
                            {/* <div style={{ fontWeight: 'bold', color: '#4CAF50' }}>Completed</div> */}
                            <p style={{ margin: '5px 0' }}>
                                <strong>Accuracy:</strong> {highestAccuracy}%
                            </p>
                            <p style={{ margin: '3px 0' }}>
                                <strong>Highest Score:</strong> {highestScore} WPM
                            </p>
                            
                        </Col>
                    )}
                </Row>
            </Card.Body>
        </Card>
    );
};

export default LessonList;
