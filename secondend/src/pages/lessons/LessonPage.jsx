import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import baseApi from '../../hooks/baseApi'
import TypingViewer from '../../components/typing/TypingViewer';
import QwertyKeyboard from '../../components/keyboard/QwertyKeyboard';
import ColemakKeyboard from '../../components/keyboard/ColemakKeyboard';
import Cookies from 'js-cookie';

const LessonPage = () => {
  const { id } = useParams();
  const api = baseApi();
  const [lesson, setLesson] = useState(null);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dispalykeyboard, setDisplayKeyboard] = useState(true);
  const [keyboardLayout, setKeyboardLayout] = useState('qwerty');
  const initialTime = 120;

  useEffect(() => {
    const fetchLesson = async () => {
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

    const fetchSettings = async () => { 
      const settings = Cookies.get('settings');
      if (settings) {
        try {
          const parseSettings = JSON.parse(settings);
          setDisplayKeyboard(parseSettings.show_keyboard);
          setKeyboardType(parseSettings.keyboard_layout); 
        } catch (error) {
          console.error("Error parsing settings from cookies:", error);
        }
      }
    }
      
    fetchSettings();
    fetchLesson();
  }, [id]);

 const keyboardType = (layout) => {
    if (layout === 'qwerty') {
      return <QwertyKeyboard />;
    } else if (layout === 'colemak') {
      return <ColemakKeyboard />;
    } else {
      return <QwertyKeyboard />;
    }
  }


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!lesson) return <div>No lesson found</div>;

  return (
    <div>
      <h1>{lesson.title}</h1>
      <p>{lesson.description}</p>
      {/* Add more lesson content here */}
      <TypingViewer words={words} lessonId={id}/>
      {dispalykeyboard ? keyboardType(keyboardLayout) : null}
    </div>
  );
};

export default LessonPage;