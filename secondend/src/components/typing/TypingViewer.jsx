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
    }
   
        