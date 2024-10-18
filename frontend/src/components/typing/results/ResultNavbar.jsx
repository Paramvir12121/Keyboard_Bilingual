// ResultNavbar.js

import ROUTES from '../../../Routes';
import { Link, useNavigate } from 'react-router-dom';

const ResultNavbar = ({ lessonId, totalLessons }) => {
  const navigate = useNavigate();
  lessonId = parseInt(lessonId);

  // Mapping of special pages
  const specialPages = {
    2: ROUTES.INSTRUCTIONS_PAGE,
    5: ROUTES.MOTIVATION_PAGE,
    // Add more mappings as needed
  };

  const handleRetakeLesson = () => {
    navigate(0); // Force page reload
  };

  const handlePreviousLesson = () => {
    if (lessonId > 1) {
      const prevLessonId = lessonId - 1;
      navigateToLessonOrSpecialPage(prevLessonId);
    }
  };

  const handleNextLesson = () => {
    const nextLessonId = lessonId + 1;
    if (nextLessonId <= totalLessons) {
      navigateToLessonOrSpecialPage(nextLessonId);
    } else {
      navigate(ROUTES.FINISHED_PAGE); // Navigate to "You are finished" page
    }
  };

  const navigateToLessonOrSpecialPage = (id) => {
    if (specialPages[id]) {
      navigate(specialPages[id]);
    } else {
      navigate(ROUTES.LESSON_PAGE(id));
    }
  };

  return (
    <nav className="result-navbar">
      <button
        onClick={handlePreviousLesson}
        className="nav-link"
        disabled={lessonId <= 1}
      >
        Previous Lesson
      </button>

      <Link to={ROUTES.LESSON_LIST} className="btn btn-outline-secondary">
        Back to Lesson List
      </Link>

      <button onClick={handleRetakeLesson} className="nav-link">
        Retake Lesson
      </button>

      <button
        onClick={handleNextLesson}
        className="nav-link"
      >
        Next Lesson
      </button>
    </nav>
  );
};

export default ResultNavbar;
