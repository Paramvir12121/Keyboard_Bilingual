import React, { useState, useEffect, useCallback } from 'react';

const words = ['react', 'javascript', 'component', 'state', 'props', 'hook', 'effect', 'render', 'virtual', 'dom'];

const TypingGame = () => {
  const [displayText, setDisplayText] = useState('');
  const [cursorIndex, setCursorIndex] = useState(0);
  const [isWrongKey, setIsWrongKey] = useState(false);

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
  }, [generateNewText]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === displayText[cursorIndex]) {
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
  }, [cursorIndex, displayText, generateNewText]);

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
    </div>
  );
};

export default TypingGame;