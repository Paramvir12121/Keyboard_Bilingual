import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import baseApi from '../../hooks/baseApi';
import TypingViewer from '../../components/typing/TypingViewer';
import Cookies from 'js-cookie';

const LessonPage = () => {
  const { id } = useParams();
  const api = baseApi();
  const [lesson, setLesson] = useState(null);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLesson = async () => {
      setLoading(true); // Set loading to true each time the lesson ID changes
      setError(null); // Reset error state
      try {
        const response = await api.get(`/lessons/${id}`, { withCredentials: true });
        setLesson(response.data);
        setWords(response.data.words.split(","));
        console.log(response.data, "data");
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('Failed to load lesson');
        setLoading(false);
      }
    };

    fetchLesson();
  }, [id]); // Re-run the effect when the id parameter changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!lesson) return <div>No lesson found</div>;

  return (
    <div>
      <h1>{lesson.title}</h1>
      <p>{lesson.description}</p>
      {/* Add more lesson content here */}
      <TypingViewer words={words} lessonId={id} />
    </div>
  );
};

export default LessonPage;
