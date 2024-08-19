import React, { useState, useEffect, useCallback, useRef } from 'react';
import Cookies from 'js-cookie';
import { qwertyToColemak } from '../keyboard/Layouts';
import TextDisplay from './display/TextDisplay';
import Results from './results/Results';
import ColemakKeyboard from '../keyboard/ColemakKeyboard';
import ColemakKeyboardSvg from '../keyboard/ColemakKeyboardSvg';
import QwertyKeyboard from '../keyboard/QwertyKeyboard';
import ResultNavbar from './results/ResultNavbar';
import HandsSvg from '../keyboard/HandsSvg';

const TypingViewer = ({ words, lessonId }) => {
  const [displayText, setDisplayText] = useState('');
  const [cursorIndex, setCursorIndex] = useState(0);
  const [isWrongKey, setIsWrongKey] = useState(false);
  const [isColemak, setIsColemak] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
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
  
    // Shuffle the words array to prevent repetition
    const shuffledWords = [...words].sort(() => Math.random() - 0.5);
  
    // Join all the shuffled words into a single string
    const viewText = shuffledWords.join(' ');
  
    setDisplayText(viewText.trim());
  }, [words]);

  useEffect(() => {
    generateNewText();

    const fetchSettings = async () => {
      const settings = Cookies.get('settings');
      if (settings) {
        try {
          const parseSettings = JSON.parse(settings);
          setShowKeyboard(parseSettings.show_keyboard);
          setIsColemak(parseSettings.keyboard_layout === 'colemak');
          console.log("isColemak", isColemak);
        } catch (error) {
          console.error('Error parsing settings from cookies:', error);
        }
      }
    };

    fetchSettings();
  }, [generateNewText]);

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
  }, [cursorIndex, displayText, isColemak, startTime]);

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

  return (
    <>
      <h2>Typing Viewer</h2>
      
      {timerRef.current && <p>Time Elapsed: {elapsedTime} seconds</p>}

      {lessonEnded ? 
        <>
        <Results {...calculateStats()} lessonId={lessonId} /> 
        <ResultNavbar lessonId={lessonId} />
        </>
        : 
        <>
        <TextDisplay displayText={displayText} cursorIndex={cursorIndex} isWrongKey={isWrongKey} />
        {/* {showKeyboard && (
          isColemak ? <ColemakKeyboard /> : <QwertyKeyboard />
      )} 
          */}
                {isColemak ? (
          <>
            <ColemakKeyboard /> 
            {showKeyboard && <ColemakKeyboardSvg />}
          </>
        ) : (
          showKeyboard && <QwertyKeyboard />
        )}
        {/* <HandsSvg pressedKey={displayText[cursorIndex]} /> */}


       
        </>
      }

     
    </>
  );
};

export default TypingViewer;
