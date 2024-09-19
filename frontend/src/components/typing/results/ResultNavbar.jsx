import React from 'react';
import ROUTES from '../../../Routes';
import { Link, useNavigate } from 'react-router-dom';

const ResultNavbar = ({ lessonId }) => {
  const navigate = useNavigate();
  lessonId = parseInt(lessonId);

  const handleRetakeLesson = () => {
    navigate(0); // Force page reload
  };

  return (
    <nav className="result-navbar">
      <Link 
        to={ROUTES.LESSON_PAGE(lessonId - 1)} 
        className="nav-link"
      >
        Previous Lesson
      </Link>

      <Link 
        to={ROUTES.LESSON_LIST} 
        className="btn btn-outline-secondary"
      >
        Back to Lesson List
      </Link>

      <button 
        onClick={handleRetakeLesson} 
        className="nav-link"
      >
        Retake Lesson
      </button>

      <Link 
        to={ROUTES.LESSON_PAGE(lessonId + 1)} 
        className="nav-link"
      >
        Next Lesson
      </Link>
    </nav>
  );
};

export default ResultNavbar;
