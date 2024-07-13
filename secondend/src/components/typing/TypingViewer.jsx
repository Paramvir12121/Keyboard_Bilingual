import react, { useState, useEffect, useCallback, useMemo } from 'react';
import Cookies from 'js-cookie';
import './TypingViewer.css';
import { qwertyToColemak } from '../keyboard/Layouts';

const TypingViewer = ({ words}) => {
    const [displayText, setDisplayText] = useState('');
    const [cursorIndex, setCursorIndex] = useState(0);
    const [isWrongKey, setIsWrongKey] = useState(false);
    const [isColemak, setIsColemak] = useState(false);
    const [errorCount, setErrorCount] = useState(0);
    const [keysTyped, setKeysTyped] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    
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
    }, [generateNewText]);

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
                        if (displayText[prevIndex + 1] === ' ') {
                            return prevIndex + 1;
                        }
                        return prevIndex;
                    });
                } else {
                    setIsWrongKey(true);
                    setErrorCount(prev => prev + 1);
                }
                window.addEventListener('keydown', handleKeyDown);
                return () => {
                  window.removeEventListener('keydown', handleKeyDown);
                };

    }, [cursorIndex, displayText, isColemak, generateNewText, words]);

    return (   <>
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
    </>

    );
};


   
        