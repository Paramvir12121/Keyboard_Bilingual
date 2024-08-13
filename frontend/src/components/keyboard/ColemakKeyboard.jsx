import React, { useState, useEffect } from 'react';
import ColemakKeyboardSvg from './ColemakKeyboardSvg';

const qwertyToColemak = {
  'q': 'q', 'w': 'w', 'e': 'f', 'r': 'p', 't': 'g', 'y': 'j', 'u': 'l', 'i': 'u', 'o': 'y', 'p': ';',
  'a': 'a', 's': 'r', 'd': 's', 'f': 't', 'g': 'd', 'h': 'h', 'j': 'n', 'k': 'e', 'l': 'i', ';': 'o',
  'z': 'z', 'x': 'x', 'c': 'c', 'v': 'v', 'b': 'b', 'n': 'k', 'm': 'm', ',': ',', '.': '.', '/': '/',
  '[': '[', ']': ']', '\\': '\\', '`': '`', '-': '-', '=': '=', '1': '1', '2': '2', '3': '3', '4': '4',
  '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '0': '0'
};

const colemakKeyMap = {
  'q': 'keyQ', 'w': 'keyW', 'f': 'keyE', 'p': 'keyR', 'g': 'keyT', 'j': 'keyY', 'l': 'keyU', 'u': 'keyI', 'y': 'keyO', ';': 'keyP',
  'a': 'keyA', 'r': 'keyS', 's': 'keyD', 't': 'keyF', 'd': 'keyG', 'h': 'keyH', 'n': 'keyJ', 'e': 'keyK', 'i': 'keyL', 'o': 'keySemicolon',
  'z': 'keyZ', 'x': 'keyX', 'c': 'keyC', 'v': 'keyV', 'b': 'keyB', 'k': 'keyN', 'm': 'keyM', ',': 'keyComma', '.': 'keyPeriod', '/': 'keySlash',
  '[': 'keyBracketLeft', ']': 'keyBracketRight', '\\': 'keyBackslash', '`': 'keyGrave', '-': 'keyMinus', '=': 'keyEqual', '1': 'key1',
  '2': 'key2', '3': 'key3', '4': 'key4', '5': 'key5', '6': 'key6', '7': 'key7', '8': 'key8', '9': 'key9', '0': 'key0'
};

const ColemakKeyboard = () => {
  const [pressedKey, setPressedKey] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const qwertyKey = e.key.toLowerCase();
      if (qwertyToColemak[qwertyKey]) {
        const colemakChar = qwertyToColemak[qwertyKey];
        const colemakKey = colemakKeyMap[colemakChar];
        setPressedKey(colemakKey);
      }
    };

    const handleKeyUp = () => {
      setPressedKey(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

 
};

export default ColemakKeyboard;
