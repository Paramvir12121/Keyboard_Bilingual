import './TypingViewer.css'
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Cookies from 'js-cookie';
import './TypingTracker.css';
import { qwertyToColemak } from '../keyboard/Layouts';
// import Timer from '../timer/Timer';

const TypingViewer = ({words}) => {
  const [displayText, setDisplayText] = useState('Empty');
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

  


  return (
    <>
    <h2>Typing Viewer</h2>
    <div>{displayText}</div>
    <div>{words[3]}</div>

    </>
    
  )
}

export default TypingViewer