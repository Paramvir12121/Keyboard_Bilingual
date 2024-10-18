// HandleLessonNavigation.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../Routes';

const HandleLessonNavigation = ({ lessonId, totalLessons }) => {
  const navigate = useNavigate();

  const handlePreviousLesson = () => {
    if (lessonId > 1) {
      navigate(ROUTES.LESSON_PAGE(lessonId - 1));
    } else {
      // Optionally, you can show a message or keep the button disabled
    }
  };

  const handleNextLesson = () => {
    if (lessonId < totalLessons) {
      navigate(ROUTES.LESSON_PAGE(lessonId + 1));
    } else {
      navigate(ROUTES.FINISHED_PAGE); // Navigate to the "You are finished" page
    }
  };

  const handleRetakeLesson = () => {
    navigate(0); // Reload the current page to retake the lesson
  };

  const handleShowInstructions = () => {
    navigate(ROUTES.INSTRUCTIONS_PAGE); // Navigate to the instructions page
  };

  return (
    <nav className="lesson-navigation">
      <button
        onClick={handlePreviousLesson}
        className="nav-link"
        disabled={lessonId <= 1}
      >
        Previous Lesson
      </button>

      <button onClick={handleRetakeLesson} className="nav-link">
        Retake Lesson
      </button>

      <button
        onClick={handleNextLesson}
        className="nav-link"
        disabled={lessonId >= totalLessons}
      >
        Next Lesson
      </button>

      <button onClick={handleShowInstructions} className="nav-link">
        Instructions
      </button>
    </nav>
  );
};

export default HandleLessonNavigation;
