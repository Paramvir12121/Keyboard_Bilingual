import React from 'react';

const LessonList = ({ lessons }) => {
    return (
        <div className="container">
            <div className="row">
                {lessons.map((lesson) => (
                    <div className="col-md-4 mb-4" key={lesson.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{lesson.title}</h5>
                                <p className="card-text">{lesson.description}</p>
                                <a href={lesson.link} className="btn btn-primary">
                                    Start Lesson
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LessonList;