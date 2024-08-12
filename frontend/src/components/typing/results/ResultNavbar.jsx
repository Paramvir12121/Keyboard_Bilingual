import React from 'react';
import ROUTES from '../../../Routes';
import { Link, useNavigate } from 'react-router-dom';

const ResultNavbar = ({ lessonId }) => {
  const navigate = useNavigate();
  lessonId = parseInt(lessonId);

  const handleRetakeLesson = () => {
    // Navigate to the same lesson to force a refresh
    // navigate(ROUTES.LESSON_PAGE(lessonId), { replace: true }); // This doesn't force a page reload
     navigate(0); // This forces a page reload
  };

  return (
    <>
      <Link to={ROUTES.LESSON_PAGE(lessonId - 1)} className="nav-link">Previous Lesson</Link>
      <Link to={ROUTES.LESSON_LIST} className="nav-link">Back to Lesson List</Link>
      <button onClick={handleRetakeLesson} className="nav-link">Retake Lesson</button> {/* Retake the same lesson */}
      <Link to={ROUTES.LESSON_PAGE(lessonId + 1)} className="nav-link">Next Lesson</Link>
    </>
  );
};

export default ResultNavbar;
