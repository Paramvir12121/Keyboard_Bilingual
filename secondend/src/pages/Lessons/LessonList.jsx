import React from 'react';
import { useNavigate } from 'react-router-dom';

const LessonList = ({ id, title, description,topic }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/lesson/${id}`);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-4" key={id} id={id}>
                    <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{topic}</p>
                            <p className="card-text">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonList;