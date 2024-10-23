import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../Routes';  // Import the routes

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
        <div className={`lesson-card ${completed ? 'completed-lesson' : ''}`} onClick={handleClick}>
            <div className="lesson-content">
                {/* Left 3/4 section for lesson info */}
                <div className="lesson-info">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>

                {/* Right 1/4 section for score and accuracy */}
                {completed && lessonTypingData.length > 0 && (
                    <div className="completed-lesson-right">
                        <p>High Score: {highestScore} wpm</p>
                        <p>Accuracy: {highestAccuracy}%</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LessonList;
