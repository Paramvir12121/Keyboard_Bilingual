import './TypingViewer.css'
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Cookies from 'js-cookie';
import './TypingTracker.css';
import { qwertyToColemak } from '../keyboard/Layouts';
import TextDisplay from './display/TextDisplay';
import Results from './results/Results';

// import Timer from '../timer/Timer';

const TypingViewer = ({words}) => {
  const [displayText, setDisplayText] = useState('');
  const [cursorIndex, setCursorIndex] = useState(0);
  const [isWrongKey, setIsWrongKey] = useState(false);
  const [isColemak, setIsColemak] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const [keysTyped, setKeysTyped] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [wordsTyped, setWordsTyped] = useState(0);
  const [lessonEnded, setLessonEnded] = useState(false);

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
    const handleKeyDown = (event) => {
      let pressedKey = event.key.toLowerCase();
      if (isColemak && qwertyToColemak[pressedKey]) {
        pressedKey = qwertyToColemak[pressedKey];
      }
      setKeysTyped(prev => prev + 1);
      if (pressedKey === displayText[cursorIndex].toLowerCase() || (pressedKey === ' ' && displayText[cursorIndex] === ' ')) {
        setIsWrongKey(false);
        setCursorIndex(prevIndex => {
          if (prevIndex + 1 >= displayText.length) {
            generateNewText();
            return 0;
          }
          return prevIndex + 1;
        });
      } else {
        setIsWrongKey(true);
        setErrorCount(prev => prev + 1);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cursorIndex, displayText, generateNewText, isColemak]);



  useEffect(() => {
    if (lessonEnded){
      //Display results
    }
  }, [lessonEnded]);


  return (
    <>
    <h2>Typing Viewer</h2>

    {lessonEnded ? <Result errorCount={errorCount} accuracy={accuracy} keysTyped={keysTyped} wordsTyped={wordsTyped}/> : <TextDisplay displayText={displayText} cursorIndex={cursorIndex} isWrongKey={isWrongKey} />}

    </>
    
  )
}

export default TypingViewer