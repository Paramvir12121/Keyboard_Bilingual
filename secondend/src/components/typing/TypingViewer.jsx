import React, { useState, useEffect, useCallback, useRef } from 'react';
import Cookies from 'js-cookie';
import './TypingTracker.css';
import { qwertyToColemak } from '../keyboard/Layouts';
import TextDisplay from './display/TextDisplay';
import Results from './results/Results';
import handleLessonCompletion from './handleLessonCompletion/handleLessonCompletion';
import {Link} from 'react-router-dom';

const TypingViewer = ({words, lessonId}) => {
  const [displayText, setDisplayText] = useState('');
  const [cursorIndex, setCursorIndex] = useState(0);
  const [isWrongKey, setIsWrongKey] = useState(false);
  const [isColemak, setIsColemak] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const [keysTyped, setKeysTyped] = useState(0);
  const [wordsTyped, setWordsTyped] = useState(0);
  const [lessonEnded, setLessonEnded] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [wrongKeysPressedCount, setWrongKeysPressedCount] = useState({});

  const timerRef = useRef(null);

  const generateNewText = useCallback(() => {
    if (!words || words.length === 0) {
      console.error('No words provided');
      return;
    }

    let viewText = '';

    for (let i = 0; i < 20; i++) {
      viewText += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    setDisplayText(viewText.trim());
  }, [words]);

  useEffect(() => {
    generateNewText();
    const keyboardType = Cookies.get('keyboard_type');
    setIsColemak(keyboardType === 'colemak');
  } , [generateNewText]);

  useEffect(() => {
    if (startTime && !lessonEnded) {
      timerRef.current = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTime, lessonEnded]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!startTime) {
        setStartTime(Date.now());
      }

      let pressedKey = event.key.toLowerCase();
      if (isColemak && qwertyToColemak[pressedKey]) {
        pressedKey = qwertyToColemak[pressedKey];
      }
      setKeysTyped(prev => prev + 1);
      if (pressedKey === displayText[cursorIndex].toLowerCase() || (pressedKey === ' ' && displayText[cursorIndex] === ' ')) {
        setIsWrongKey(false);
        setCursorIndex(prevIndex => {
          if (prevIndex + 1 >= displayText.length) {
            setLessonEnded(true);
            clearInterval(timerRef.current);
            return prevIndex;
          }
          if (displayText[prevIndex] === ' ') {
            setWordsTyped(prev => prev + 1);
          }
          return prevIndex + 1;
        });
      } else {
        setIsWrongKey(true);
        setErrorCount(prev => prev + 1);
        setWrongKeysPressedCount(prev => ({
          ...prev,
          [displayText[cursorIndex]]: (prev[displayText[cursorIndex]] || 0) + 1
        }));
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cursorIndex, displayText, generateNewText, isColemak, startTime]);

  const calculateStats = () => {
    const totalCharacters = keysTyped;
    const accuracy = ((totalCharacters - errorCount) / totalCharacters) * 100;
    const wpm = (wordsTyped / (elapsedTime / 60));

    return {
      wpm,
      accuracy,
      errorCount,
      totalCharacters,
      elapsedTime,
      wrongKeysPressedCount
    };
  };

  useEffect(() => {
    if (lessonEnded) {
      const stats = calculateStats();
      const completeLessonAsync = async () => {
        try {
          const result = await handleLessonCompletion(lessonId, Math.round(stats.wpm));
          console.log('Lesson completion result:', result);
        } catch (error) {
          console.error('Error completing lesson:', error);
          setCompletionError('Failed to submit lesson completion. Please try again.');
        }
      };
      completeLessonAsync();
    }
  }, [lessonEnded, lessonId]);

  return (
    <>
      <h2>Typing Viewer</h2>
      
      {timerRef.current && <p>Time Elapsed: {elapsedTime} seconds</p>}

      {lessonEnded ? 
        <Results {...calculateStats()} lessonId={lessonId} /> 
        : 
        <TextDisplay displayText={displayText} cursorIndex={cursorIndex} isWrongKey={isWrongKey} />
      }
    </>
  );
};

export default TypingViewer;