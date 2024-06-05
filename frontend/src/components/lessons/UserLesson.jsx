import React, { useState, useEffect } from 'react';
import baseApi from '../hooks/BaseApi';
import useAuth from '../hooks/useAuth';
import { useParams } from 'react-router-dom';
import ColemakKeyboard from '../svg/ColemakKeyboard';

const qwertyToColemak = {
    'q': 'q', 'w': 'w', 'e': 'f', 'r': 'p', 't': 'g', 'y': 'j', 'u': 'l', 'i': 'u', 'o': 'y', 'p': ';',
    'a': 'a', 's': 'r', 'd': 's', 'f': 't', 'g': 'd', 'h': 'h', 'j': 'n', 'k': 'e', 'l': 'i', ';': 'o',
    'z': 'z', 'x': 'x', 'c': 'c', 'v': 'v', 'b': 'b', 'n': 'k', 'm': 'm', ',': ',', '.': '.', '/': '/'
  };
  
const UserLesson = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [mappedInput, setMappedInput] = useState('');
  const { userId } = useAuth();

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const response = await baseApi.get(`/lessons/${lessonId}`);
        setLesson(response.data);
      } catch (error) {
        console.error('Error fetching lesson:', error);
      }
    };
    fetchLesson();
  }, [lessonId]);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setUserInput(input);
    const mapped = input.split('').map(char => qwertyToColemak[char] || char).join('');
    setMappedInput(mapped);
  };

  if (!lesson) {
    return <p>Loading lesson...</p>;
  }

  return (
    <div>
      <h2>{lesson.title}</h2>
      <p>{lesson.description}</p>
      <textarea
        value={userInput}
        onChange={handleInputChange}
        placeholder="Start typing..."
      />
      <h3>Mapped Input (Colemak)</h3>
      <p>{mappedInput}</p>
      <ColemakKeyboard />
    </div>
  );
};

export default UserLesson;
