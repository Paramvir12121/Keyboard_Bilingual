import React, { useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';

const words = ['react', 'javascript', 'component', 'state', 'props', 'hook', 'effect', 'render', 'virtual', 'dom'];

const qwertyToColemak = {
  'q': 'q', 'w': 'w', 'e': 'f', 'r': 'p', 't': 'g', 'y': 'j', 'u': 'l', 'i': 'u', 'o': 'y', 'p': ';',
  'a': 'a', 's': 'r', 'd': 's', 'f': 't', 'g': 'd', 'h': 'h', 'j': 'n', 'k': 'e', 'l': 'i', ';': 'o',
  'z': 'z', 'x': 'x', 'c': 'c', 'v': 'v', 'b': 'b', 'n': 'k', 'm': 'm'
};

const TypingGame = () => {
  const [displayText, setDisplayText] = useState('');
  const [cursorIndex, setCursorIndex] = useState(0);
  const [isWrongKey, setIsWrongKey] = useState(false);
  const [isColemak, setIsColemak] = useState(false);

  const generateNewText = useCallback(() => {
    let newText = '';
    for (let i = 0; i < 5; i++) {
      newText += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    setDisplayText(newText.trim());
    setCursorIndex(0);
    setIsWrongKey(false);
  }, []);

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
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cursorIndex, displayText, generateNewText, isColemak]);

  return (
    <div className="typing-game">
      <h2>Typing Game</h2>
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

export default TypingGame;