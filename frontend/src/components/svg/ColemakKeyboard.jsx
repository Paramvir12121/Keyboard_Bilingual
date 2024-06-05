import React, { useState, useEffect } from 'react';

const qwertyToColemak = {
  'q': 'q', 'w': 'w', 'e': 'f', 'r': 'p', 't': 'g', 'y': 'j', 'u': 'l', 'i': 'u', 'o': 'y', 'p': ';',
  'a': 'a', 's': 'r', 'd': 's', 'f': 't', 'g': 'd', 'h': 'h', 'j': 'n', 'k': 'e', 'l': 'i', ';': 'o',
  'z': 'z', 'x': 'x', 'c': 'c', 'v': 'v', 'b': 'b', 'n': 'k', 'm': 'm', ',': ',', '.': '.', '/': '/'
};

const keyMap = {
  'q': 'keyQ', 'w': 'keyW', 'e': 'keyE', 'r': 'keyR', 't': 'keyT', 'y': 'keyY', 'u': 'keyU', 'i': 'keyI', 'o': 'keyO', 'p': 'keyP',
  'a': 'keyA', 's': 'keyS', 'd': 'keyD', 'f': 'keyF', 'g': 'keyG', 'h': 'keyH', 'j': 'keyJ', 'k': 'keyK', 'l': 'keyL', ';': 'keySemicolon',
  'z': 'keyZ', 'x': 'keyX', 'c': 'keyC', 'v': 'keyV', 'b': 'keyB', 'n': 'keyN', 'm': 'keyM', ',': 'keyComma', '.': 'keyPeriod', '/': 'keySlash',
};

const ColemakKeyboard = () => {
  const [pressedKey, setPressedKey] = useState(null);
  const [colemakKey, setColemakKey] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const qwertyKey = e.key.toLowerCase();
        console.log("qwertyKey :", qwertyKey)
        const colemakChar = qwertyToColemak[qwertyKey];
        console.log("colemakChar: ", colemakChar)
        console.log("Pressed key: ", pressedKey)
        if (colemakChar) {
          setPressedKey(keyMap[colemakChar]);
          setColemakKey(colemakChar);
        }
        

    };

    const handleKeyUp = (e) => {
      const qwertyKey = e.key.toLowerCase();
    
        setPressedKey(null);
        setColemakKey(null);
      
        
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <svg width="850" height="300" viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
      {/* <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#f0f0f0', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#d0d0d0', stopOpacity: 1 }} />
        </linearGradient>
      </defs> */}
      <rect width="100%" height="100%" fill="url(#grad1)" />
      <style>
        {`
          .key {
            fill: #ffffff;
            stroke: #333333;
            stroke-width: 2;
            rx: 10;
            ry: 10;
          }
          .key-text {
            font-family: 'Arial', sans-serif;
            font-size: 18px;
            text-anchor: middle;
            fill: #333333;
            pointer-events: none;
          }
          .key-pressed {
            fill: orange;
          }
        `}
      </style>
      {/* Row 1 */}
      <rect id="keyQ" x="10" y="10" width="60" height="60" className={`key ${pressedKey === 'keyQ' ? 'key-pressed' : ''}`} />
      <text x="40" y="50" className="key-text">Q</text>

      <rect id="keyW" x="80" y="10" width="60" height="60" className={`key ${pressedKey === 'keyW' ? 'key-pressed' : ''}`} />
      <text x="110" y="50" className="key-text">W</text>

      <rect id="keyE" x="150" y="10" width="60" height="60" className={`key ${pressedKey === 'keyE' ? 'key-pressed' : ''}`} />
      <text x="180" y="50" className="key-text">F</text>

      <rect id="keyR" x="220" y="10" width="60" height="60" className={`key ${pressedKey === 'keyR' ? 'key-pressed' : ''}`} />
      <text x="250" y="50" className="key-text">P</text>

      <rect id="keyT" x="290" y="10" width="60" height="60" className={`key ${pressedKey === 'keyT' ? 'key-pressed' : ''}`} />
      <text x="320" y="50" className="key-text">G</text>

      <rect id="keyY" x="360" y="10" width="60" height="60" className={`key ${pressedKey === 'keyY' ? 'key-pressed' : ''}`} />
      <text x="390" y="50" className="key-text">J</text>

      <rect id="keyU" x="430" y="10" width="60" height="60" className={`key ${pressedKey === 'keyU' ? 'key-pressed' : ''}`} />
      <text x="460" y="50" className="key-text">L</text>

      <rect id="keyI" x="500" y="10" width="60" height="60" className={`key ${pressedKey === 'keyI' ? 'key-pressed' : ''}`} />
      <text x="530" y="50" className="key-text">U</text>

      <rect id="keyO" x="570" y="10" width="60" height="60" className={`key ${pressedKey === 'keyO' ? 'key-pressed' : ''}`} />
      <text x="600" y="50" className="key-text">Y</text>

      <rect id="keySemicolon" x="640" y="10" width="60" height="60" className={`key ${pressedKey === 'keySemicolon' ? 'key-pressed' : ''}`} />
      <text x="670" y="50" className="key-text">;</text>

      <rect x="710" y="10" width="80" height="60" className="key" />
      <text x="750" y="50" className="key-text">Back</text>

      {/* Row 2 */}
      <rect id="keyA" x="25" y="80" width="60" height="60" className={`key ${pressedKey === 'keyA' ? 'key-pressed' : ''}`} />
      <text x="55" y="120" className="key-text">A</text>

      <rect id="keyR" x="95" y="80" width="60" height="60" className={`key ${pressedKey === 'keyR' ? 'key-pressed' : ''}`} />
      <text x="125" y="120" className="key-text">R</text>

      <rect id="keyS" x="165" y="80" width="60" height="60" className={`key ${pressedKey === 'keyS' ? 'key-pressed' : ''}`} />
      <text x="195" y="120" className="key-text">S</text>

      <rect id="keyT" x="235" y="80" width="60" height="60" className={`key ${pressedKey === 'keyT' ? 'key-pressed' : ''}`} />
      <text x="265" y="120" className="key-text">T</text>

      <rect id="keyD" x="305" y="80" width="60" height="60" className={`key ${pressedKey === 'keyD' ? 'key-pressed' : ''}`} />
      <text x="335" y="120" className="key-text">D</text>

      <rect id="keyH" x="375" y="80" width="60" height="60" className={`key ${pressedKey === 'keyH' ? 'key-pressed' : ''}`} />
      <text x="405" y="120" className="key-text">H</text>

      <rect id="keyN" x="445" y="80" width="60" height="60" className={`key ${pressedKey === 'keyN' ? 'key-pressed' : ''}`} />
      <text x="475" y="120" className="key-text">N</text>

      <rect id="keyE" x="515" y="80" width="60" height="60" className={`key ${pressedKey === 'keyE' ? 'key-pressed' : ''}`} />
      <text x="545" y="120" className="key-text">E</text>

      <rect id="keyI" x="585" y="80" width="60" height="60" className={`key ${pressedKey === 'keyI' ? 'key-pressed' : ''}`} />
      <text x="615" y="120" className="key-text">I</text>

      <rect id="keyO" x="655" y="80" width="60" height="60" className={`key ${pressedKey === 'keyO' ? 'key-pressed' : ''}`} />
      <text x="685" y="120" className="key-text">O</text>

      <rect x="725" y="80" width="65" height="60" className="key" />
      <text x="757.5" y="120" className="key-text">Enter</text>

      {/* Row 3 */}
      <rect id="keyShift" x="40" y="150" width="80" height="60" className="key" />
      <text x="80" y="190" className="key-text">Shift</text>

      <rect id="keyZ" x="130" y="150" width="60" height="60" className={`key ${pressedKey === 'keyZ' ? 'key-pressed' : ''}`} />
      <text x="160" y="190" className="key-text">Z</text>

      <rect id="keyX" x="200" y="150" width="60" height="60" className={`key ${pressedKey === 'keyX' ? 'key-pressed' : ''}`} />
      <text x="230" y="190" className="key-text">X</text>

      <rect id="keyC" x="270" y="150" width="60" height="60" className={`key ${pressedKey === 'keyC' ? 'key-pressed' : ''}`} />
      <text x="300" y="190" className="key-text">C</text>

      <rect id="keyV" x="340" y="150" width="60" height="60" className={`key ${pressedKey === 'keyV' ? 'key-pressed' : ''}`} />
      <text x="370" y="190" className="key-text">V</text>

      <rect id="keyB" x="410" y="150" width="60" height="60" className={`key ${pressedKey === 'keyB' ? 'key-pressed' : ''}`} />
      <text x="440" y="190" className="key-text">B</text>

      <rect id="keyK" x="480" y="150" width="60" height="60" className={`key ${pressedKey === 'keyK' ? 'key-pressed' : ''}`} />
      <text x="510" y="190" className="key-text">K</text>

      <rect id="keyM" x="550" y="150" width="60" height="60" className={`key ${pressedKey === 'keyM' ? 'key-pressed' : ''}`} />
      <text x="580" y="190" className="key-text">M</text>

      <rect id="keyComma" x="620" y="150" width="60" height="60" className={`key ${pressedKey === 'keyComma' ? 'key-pressed' : ''}`} />
      <text x="650" y="190" className="key-text">,</text>

      <rect id="keyPeriod" x="690" y="150" width="60" height="60" className={`key ${pressedKey === 'keyPeriod' ? 'key-pressed' : ''}`} />
      <text x="720" y="190" className="key-text">.</text>

      <rect id="keySlash" x="760" y="150" width="60" height="60" className={`key ${pressedKey === 'keySlash' ? 'key-pressed' : ''}`} />
      <text x="790" y="190" className="key-text">/</text>
    </svg>
  );
};

export default ColemakKeyboard;
