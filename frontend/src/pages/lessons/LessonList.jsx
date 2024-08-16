import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../Routes';  // Import the routes

const LessonList = ({ id, title, description, topic }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(ROUTES.LESSON_PAGE(id));  // Use ROUTES.LESSON_PAGE to generate the route
    };

    return (
        <div key={id} id={id}>
            <div className="card lesson-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{topic}</p>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default LessonList;
