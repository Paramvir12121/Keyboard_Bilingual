import React from 'react';

const LessonList = ({id, title, description}) => {
    return (
        <div className="container">
            <div className="row">
              
                    <div className="col-md-4 mb-4" key={id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                {/* <a href={lesson.link} className="btn btn-primary">
                                    Start Lesson
                                </a> */}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default LessonList;