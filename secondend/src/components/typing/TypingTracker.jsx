import React, { useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';
import './TypingTracker.css';



const qwertyToColemak = {
  'q': 'q', 'w': 'w', 'e': 'f', 'r': 'p', 't': 'g', 'y': 'j', 'u': 'l', 'i': 'u', 'o': 'y', 'p': ';',
  'a': 'a', 's': 'r', 'd': 's', 'f': 't', 'g': 'd', 'h': 'h', 'j': 'n', 'k': 'e', 'l': 'i', ';': 'o',
  'z': 'z', 'x': 'x', 'c': 'c', 'v': 'v', 'b': 'b', 'n': 'k', 'm': 'm'
};

const TypingTracker = ({words}) => {
  const [displayText, setDisplayText] = useState('');
  const [cursorIndex, setCursorIndex] = useState(0);
  const [isWrongKey, setIsWrongKey] = useState(false);
  const [isColemak, setIsColemak] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const [keysTyped, setKeysTyped] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

console.log(words)

const generateNewText = useCallback(() => {
  if (!words || words.length === 0) {
    console.error('No words provided');
    return;
  }

  let newText = '';
  for (let i = 0; i < 15; i++) {
    console.log(words.length)
    newText += words[Math.floor(Math.random() * words.length)] + ' ';
  }
  setDisplayText(newText.trim());
  setCursorIndex(0);
  setIsWrongKey(false);
}, [words]);

// const generateNewText = useCallback(() => {

// }, []);

  useEffect(() => {
    generateNewText();
    const keyboardType = Cookies.get('keyboard_type');
    setIsColemak(keyboardType === 'colemak');
  }, [generateNewText]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      let pressedKey = event.key.toLowerCase();
      
      if (isColemak && qwertyToColemak[pressedKey]) {
        pressedKey = qwertyToColemak[pressedKey];
      }

      setKeysTyped(prev => prev + 1);

      if (pressedKey === displayText[cursorIndex].toLowerCase()) {
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
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cursorIndex, displayText, generateNewText, isColemak]);

  // useEffect(() => {
  //   const calculateAccuracy = () => {
  //     if (keysTyped === 0) return 100;
  //     return Math.round(((keysTyped - errorCount) / keysTyped) * 100);
  //   };
  //   setAccuracy(calculateAccuracy());
  // }, [keysTyped, errorCount]);

  return (
    <div className="typing-game">
      <h2>Typing Game</h2>
      <div className="stats">
        <p>Errors: {errorCount}</p>
        <p>Keys Typed: {keysTyped}</p>
        <p>Accuracy: {accuracy}%</p>
      </div>
      <p>Type the highlighted letter:</p>
      <div className="text-display">
        {displayText.split('').map((char, index) => (
          <span 
            key={index} 
            className={index === cursorIndex ? (isWrongKey ? 'cursor wrong' : 'cursor') : ''}
          >
            {char}
          </span>
        ))}
      </div>
      <p>Keyboard Layout: {isColemak ? 'Colemak' : 'QWERTY'}</p>
    </div>
  );
};

export default TypingTracker