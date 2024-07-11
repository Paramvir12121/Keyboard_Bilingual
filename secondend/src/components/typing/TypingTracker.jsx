import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Cookies from 'js-cookie';
import './TypingTracker.css';
import { qwertyToColemak } from '../keyboard/Layouts';
import Timer from '../timer/Timer';

const TypingTracker = ({ words, initialTime }) => {
  const [displayText, setDisplayText] = useState('');
  const [cursorIndex, setCursorIndex] = useState(0);
  const [isWrongKey, setIsWrongKey] = useState(false);
  const [isColemak, setIsColemak] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const [keysTyped, setKeysTyped] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [wordsTyped, setWordsTyped] = useState(0);
  const [startFlag, setStartFlag] = useState(false);

  const generateNewText = useCallback(() => {
    if (!words || words.length === 0) {
      console.error('No words provided');
      return;
    }

    let newText = '';
    for (let i = 0; i < 20; i++) {
      newText += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    setDisplayText(newText.trim());
    setCursorIndex(0);
    setIsWrongKey(false);
  }, [words]);

  useEffect(() => {
    generateNewText();
    const keyboardType = Cookies.get('keyboard_type');
    setIsColemak(keyboardType === 'colemak');
  }, [generateNewText]);

  useEffect(() => {
    if (!isTimerRunning) return;

    const handleKeyDown = (event) => {
      let pressedKey = event.key.toLowerCase();
      
      if (isColemak && qwertyToColemak[pressedKey]) {
        pressedKey = qwertyToColemak[pressedKey];
      }

      setKeysTyped(prev => prev + 1);

      if (pressedKey === displayText[cursorIndex].toLowerCase() || (pressedKey === ' ' && displayText[cursorIndex] === ' ')) {
        setIsWrongKey(false);
        setCursorIndex(prevIndex => {
          // if (prevIndex + 1 >= displayText.length) {
          //   generateNewText();
          //   setWordsTyped(prev => prev + displayText.split(' ').length);
          //   return 0;
          // }
          if (displayText[prevIndex + 1] === ' ') {
            setWordsTyped(prev => prev + 1);
          }
          return prevIndex + 1;
        });
      } else {
        setIsWrongKey(true);
        setErrorCount(prev => prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cursorIndex, displayText, generateNewText, isColemak, isTimerRunning]);

  useEffect(() => {
    const calculateAccuracy = () => {
      if (keysTyped === 0) return 100;
      return Math.round(((keysTyped - errorCount) / keysTyped) * 100);
    };
    setAccuracy(calculateAccuracy());
  }, [keysTyped, errorCount]);

  const handleTimerEnd = useCallback(() => {
    setIsTimerRunning(false);
  }, []);

  const handleRefresh = useCallback(() => {
    setIsTimerRunning(true);
    setErrorCount(0);
    setKeysTyped(0);
    setAccuracy(100);
    setWordsTyped(0);
    generateNewText();
  }, [generateNewText]);

  const wpm = useMemo(() => {
    return Math.floor(keysTyped * 60 / (initialTime * 5)) ;
  }, [wordsTyped, initialTime]);

  return (
    <div className="typing-game">
      <h2>Typing Game</h2>
      {isTimerRunning && <Timer initialTime={initialTime} onTimerEnd={handleTimerEnd} />}
      <div className="stats">
        <p>Errors: {errorCount}</p>
        <p>Keys Typed: {keysTyped}</p>
        <p>Accuracy: {accuracy}%</p>
        <p>Words Typed: {wordsTyped}</p>
        <p>WPM: {wpm}</p>
      </div>
      {isTimerRunning ? (
        <>
          <p>Type the highlighted letter:</p>
          <div className="text-display">
            {displayText.split('').map((char, index) => (
              <span 
                key={index} 
                className={`character ${index === cursorIndex ? (isWrongKey ? 'cursor wrong' : 'cursor') : ''}`}
              >
                {char}
              </span>
            ))}
          </div>
        </>
      ) : (
        <button onClick={handleRefresh}>Restart</button>
      )}
      <p>Keyboard Layout: {isColemak ? 'Colemak' : 'QWERTY'}</p>
    </div>
  );
};

export default TypingTracker;
