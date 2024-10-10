import React, { useState, useEffect, useCallback, useRef } from 'react';
import Cookies from 'js-cookie';
import TextDisplay from './display/TextDisplay';
import Results from './results/Results';
import ResultNavbar from './results/ResultNavbar';
import KeyboardSelection from './keyboardSelection/KeyboardSelection';
import { layoutMappings } from './layoutMapping/LayoutMapping';
import { userKeyboardLayouts } from '../keyboard/userKeyboardLayouts';
import { keyIdTo } from '../keyboard/KeyIdTo';

const TypingViewer = ({ words, lessonId }) => {
  const [displayText, setDisplayText] = useState('');
  const [cursorIndex, setCursorIndex] = useState(0);
  const [isWrongKey, setIsWrongKey] = useState(false);
  const [userLearningLayout, setUserLearningLayout] = useState('qwerty');
  const [userKeyboardLayout, setUserKeyboardLayout] = useState('qwerty');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const [keysTyped, setKeysTyped] = useState(0);
  const [wordsTyped, setWordsTyped] = useState(0);
  const [lessonEnded, setLessonEnded] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [wrongKeysPressedCount, setWrongKeysPressedCount] = useState({});
  const [pressedKey, setPressedKey] = useState(null);
  const [results, setResults] = useState(null);
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
          setUserLearningLayout(parseSettings.user_learning_layout);
          setUserKeyboardLayout(parseSettings.keyboard_layout);
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
        if (layoutMappings[userKeyboardLayout] && layoutMappings[userKeyboardLayout][userLearningLayout]) {
            const conversionMap = layoutMappings[userKeyboardLayout][userLearningLayout];
            
            
        }
        setKeysTyped(prev => prev + 1);
        // Update the pressedKey state to the corresponding key ID
        setPressedKey(pressedKey);
        // convert pressed key to the key in the learning layout
        // pressedKey = keyIdTo['qwerty'][pressedKey] ;
        // console.log('First Conversion pressedKey:', pressedKey);
        // pressedKey = userKeyboardLayouts['colemak'][pressedKey];
        // console.log('Second Conversion pressedKey:', pressedKey);
        
        if (pressedKey === displayText[cursorIndex] || (pressedKey === ' ' && displayText[cursorIndex] === ' ')) {
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
    };
    const handleKeyUp = () => {
        // Reset the pressedKey state when the key is released
        setPressedKey(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
    };
}, [cursorIndex, displayText, userKeyboardLayout, userLearningLayout, startTime]);


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
      setResults(calculateStats());
    }
  }, [lessonEnded]);

  return (
    <>      
      {timerRef.current && <p>Time Elapsed: {elapsedTime} seconds</p>}
      {lessonEnded ? 
        <>
        <Results stats={results} lessonId={lessonId} /> 
        <ResultNavbar lessonId={lessonId} />
        </>
        : 
        <>
        <TextDisplay displayText={displayText} cursorIndex={cursorIndex} isWrongKey={isWrongKey} />
        <KeyboardSelection userLearningLayout={userLearningLayout} userKeyboardLayout={userKeyboardLayout} showKeyboard={showKeyboard} pressedKey={pressedKey}/>
          
        </>
      }
     
    </>
  );
};
export default TypingViewer;