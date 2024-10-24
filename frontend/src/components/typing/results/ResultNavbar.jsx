import React, { useState, useEffect, useCallback } from 'react';
import ROUTES from '../../../Routes';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ResultNavbar = ({ lessonId, totalLessons, specialPages = {} }) => {
  const [userLearningLayout, setUserLearningLayout] = useState('qwerty');

  useEffect(() => {
    const settings = Cookies.get('settings');
    if (settings) {
      try {
        const parsedSettings = JSON.parse(settings);
        setUserLearningLayout(parsedSettings.user_learning_layout);
        console.log("user Learning Layout: ", parsedSettings.user_learning_layout);
      } catch (error) {
        console.error('Error parsing settings from cookies:', error);
      }
    }
  }, []);

  const navigate = useNavigate();
  const lessonIdNumber = parseInt(lessonId, 10);

  if (isNaN(lessonIdNumber)) {
    console.error('Invalid lessonId:', lessonId);
    return null;
  }

  const isFirstLesson = lessonIdNumber <= 1;
  const isLastLesson = lessonIdNumber >= totalLessons;

  // Default special pages if not provided
  const defaultSpecialPages = {
    2: ROUTES.INSTRUCTIONS_PAGE,
    5: ROUTES.MOTIVATION_PAGE,
    // ... other mappings
  };

  const combinedSpecialPages = { ...defaultSpecialPages, ...specialPages };

  const navigateToLessonOrSpecialPage = useCallback(
    (id) => {
      const route = combinedSpecialPages[id] || ROUTES.LESSON_PAGE(id);
      navigate(route);
    },
    [navigate, combinedSpecialPages]
  );

  const handleRetakeLesson = useCallback(() => {
    window.location.reload();
  }, []);

  const handlePreviousLesson = useCallback(() => {
    if (!isFirstLesson) {
      navigateToLessonOrSpecialPage(lessonIdNumber - 1);
    }
  }, [isFirstLesson, navigateToLessonOrSpecialPage, lessonIdNumber]);

  const handleNextLesson = useCallback(() => {
    if (!isLastLesson) {
      navigateToLessonOrSpecialPage(lessonIdNumber + 1);
    } else {
      navigate(ROUTES.FINISHED_PAGE);
    }
  }, [isLastLesson, navigateToLessonOrSpecialPage, lessonIdNumber, navigate]);

  return (
    <nav className="result-navbar">
      <button
        onClick={handlePreviousLesson}
        className="nav-link"
        disabled={isFirstLesson}
      >
        Previous Lesson
      </button>

      <Link to={ROUTES.DASHBOARD} className="btn btn-outline-secondary">
        Back to Dashboard
      </Link>

      <button onClick={handleRetakeLesson} className="nav-link">
        Retake Lesson
      </button>

      <button
        onClick={handleNextLesson}
        className="nav-link"
        disabled={isLastLesson}
      >
        Next Lesson
      </button>
    </nav>
  );
};

export default ResultNavbar;
