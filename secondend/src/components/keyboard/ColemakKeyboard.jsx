import React, { useState, useEffect } from 'react';

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

  return (
    <div style={{ width: '100%', height: 'auto' }}>
      <h1>Colemak Keyboard</h1>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 1200 350"
        preserveAspectRatio="xMidYMid meet"
      >
        <style>
          {`
          .key {
            fill: none;
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
          .subtext {
            font-family: 'Arial', sans-serif;
            font-size: 12px;
            text-anchor: middle;
            fill: #666666;
            pointer-events: none;
          }
          .key-pressed {
            fill: orange;
          }
        `}
        </style>
        {/* Row 1 */}
        <rect id="keyGrave" x="10" y="10" width="60" height="60" className={`key ${pressedKey === 'keyGrave' ? 'key-pressed' : ''}`} />
        <text x="40" y="40" className="key-text">`</text>
        <text x="40" y="60" className="subtext">`</text>

        <rect id="key1" x="80" y="10" width="60" height="60" className={`key ${pressedKey === 'key1' ? 'key-pressed' : ''}`} />
        <text x="110" y="40" className="key-text">1</text>
        <text x="110" y="60" className="subtext">1</text>

        <rect id="key2" x="150" y="10" width="60" height="60" className={`key ${pressedKey === 'key2' ? 'key-pressed' : ''}`} />
        <text x="180" y="40" className="key-text">2</text>
        <text x="180" y="60" className="subtext">2</text>

        <rect id="key3" x="220" y="10" width="60" height="60" className={`key ${pressedKey === 'key3' ? 'key-pressed' : ''}`} />
        <text x="250" y="40" className="key-text">3</text>
        <text x="250" y="60" className="subtext">3</text>

        <rect id="key4" x="290" y="10" width="60" height="60" className={`key ${pressedKey === 'key4' ? 'key-pressed' : ''}`} />
        <text x="320" y="40" className="key-text">4</text>
        <text x="320" y="60" className="subtext">4</text>

        <rect id="key5" x="360" y="10" width="60" height="60" className={`key ${pressedKey === 'key5' ? 'key-pressed' : ''}`} />
        <text x="390" y="40" className="key-text">5</text>
        <text x="390" y="60" className="subtext">5</text>

        <rect id="key6" x="430" y="10" width="60" height="60" className={`key ${pressedKey === 'key6' ? 'key-pressed' : ''}`} />
        <text x="460" y="40" className="key-text">6</text>
        <text x="460" y="60" className="subtext">6</text>

        <rect id="key7" x="500" y="10" width="60" height="60" className={`key ${pressedKey === 'key7' ? 'key-pressed' : ''}`} />
        <text x="530" y="40" className="key-text">7</text>
        <text x="530" y="60" className="subtext">7</text>

        <rect id="key8" x="570" y="10" width="60" height="60" className={`key ${pressedKey === 'key8' ? 'key-pressed' : ''}`} />
        <text x="600" y="40" className="key-text">8</text>
        <text x="600" y="60" className="subtext">8</text>

        <rect id="key9" x="640" y="10" width="60" height="60" className={`key ${pressedKey === 'key9' ? 'key-pressed' : ''}`} />
        <text x="670" y="40" className="key-text">9</text>
        <text x="670" y="60" className="subtext">9</text>

        <rect id="key0" x="710" y="10" width="60" height="60" className={`key ${pressedKey === 'key0' ? 'key-pressed' : ''}`} />
        <text x="740" y="40" className="key-text">0</text>
        <text x="740" y="60" className="subtext">0</text>

        <rect id="keyMinus" x="780" y="10" width="60" height="60" className={`key ${pressedKey === 'keyMinus' ? 'key-pressed' : ''}`} />
        <text x="810" y="40" className="key-text">-</text>
        <text x="810" y="60" className="subtext">-</text>

        <rect id="keyEqual" x="850" y="10" width="60" height="60" className={`key ${pressedKey === 'keyEqual' ? 'key-pressed' : ''}`} />
        <text x="880" y="40" className="key-text">=</text>
        <text x="880" y="60" className="subtext">=</text>

        <rect id="keyBackspace" x="920" y="10" width="180" height="60" className={`key ${pressedKey === 'keyBackspace' ? 'key-pressed' : ''}`} />
        <text x="1010" y="40" className="key-text">Backspace</text>

        {/* Row 2 */}
        <rect id="keyTab" x="10" y="80" width="90" height="60" className={`key ${pressedKey === 'keyTab' ? 'key-pressed' : ''}`} />
        <text x="55" y="110" className="key-text">Tab</text>

        <rect id="keyQ" x="110" y="80" width="60" height="60" className={`key ${pressedKey === 'keyQ' ? 'key-pressed' : ''}`} />
        <text x="140" y="110" className="key-text">Q</text>
        <text x="140" y="130" className="subtext">Q</text>

        <rect id="keyW" x="180" y="80" width="60" height="60" className={`key ${pressedKey === 'keyW' ? 'key-pressed' : ''}`} />
        <text x="210" y="110" className="key-text">W</text>
        <text x="210" y="130" className="subtext">W</text>

        <rect id="keyE" x="250" y="80" width="60" height="60" className={`key ${pressedKey === 'keyE' ? 'key-pressed' : ''}`} />
        <text x="280" y="110" className="key-text">F</text>
        <text x="280" y="130" className="subtext">E</text>

        <rect id="keyR" x="320" y="80" width="60" height="60" className={`key ${pressedKey === 'keyR' ? 'key-pressed' : ''}`} />
        <text x="350" y="110" className="key-text">P</text>
        <text x="350" y="130" className="subtext">R</text>

        <rect id="keyT" x="390" y="80" width="60" height="60" className={`key ${pressedKey === 'keyT' ? 'key-pressed' : ''}`} />
        <text x="420" y="110" className="key-text">G</text>
        <text x="420" y="130" className="subtext">T</text>

        <rect id="keyY" x="460" y="80" width="60" height="60" className={`key ${pressedKey === 'keyY' ? 'key-pressed' : ''}`} />
        <text x="490" y="110" className="key-text">J</text>
        <text x="490" y="130" className="subtext">Y</text>

        <rect id="keyU" x="530" y="80" width="60" height="60" className={`key ${pressedKey === 'keyU' ? 'key-pressed' : ''}`} />
        <text x="560" y="110" className="key-text">L</text>
        <text x="560" y="130" className="subtext">U</text>

        <rect id="keyI" x="600" y="80" width="60" height="60" className={`key ${pressedKey === 'keyI' ? 'key-pressed' : ''}`} />
        <text x="630" y="110" className="key-text">U</text>
        <text x="630" y="130" className="subtext">I</text>

        <rect id="keyO" x="670" y="80" width="60" height="60" className={`key ${pressedKey === 'keyO' ? 'key-pressed' : ''}`} />
        <text x="700" y="110" className="key-text">Y</text>
        <text x="700" y="130" className="subtext">O</text>

        <rect id="keyP" x="740" y="80" width="60" height="60" className={`key ${pressedKey === 'keyP' ? 'key-pressed' : ''}`} />
        <text x="770" y="110" className="key-text">;</text>
        <text x="770" y="130" className="subtext">P</text>

        <rect id="keyBracketLeft" x="810" y="80" width="60" height="60" className={`key ${pressedKey === 'keyBracketLeft' ? 'key-pressed' : ''}`} />
        <text x="840" y="110" className="key-text">[</text>
        <text x="840" y="130" className="subtext">[</text>

        <rect id="keyBracketRight" x="880" y="80" width="60" height="60" className={`key ${pressedKey === 'keyBracketRight' ? 'key-pressed' : ''}`} />
        <text x="910" y="110" className="key-text">]</text>
        <text x="910" y="130" className="subtext">]</text>

        <rect id="keyBackslash" x="950" y="80" width="150" height="60" className={`key ${pressedKey === 'keyBackslash' ? 'key-pressed' : ''}`} />
        <text x="1025" y="110" className="key-text">\\</text>
        <text x="1025" y="130" className="subtext">\\</text>

        {/* Row 3 */}
        <rect id="keyCapsLock" x="10" y="150" width="100" height="60" className={`key ${pressedKey === 'keyCapsLock' ? 'key-pressed' : ''}`} />
        <text x="60" y="180" className="key-text">Caps</text>

        <rect id="keyA" x="120" y="150" width="60" height="60" className={`key ${pressedKey === 'keyA' ? 'key-pressed' : ''}`} />
        <text x="150" y="180" className="key-text">A</text>
        <text x="150" y="200" className="subtext">A</text>

        <rect id="keyS" x="190" y="150" width="60" height="60" className={`key ${pressedKey === 'keyS' ? 'key-pressed' : ''}`} />
        <text x="220" y="180" className="key-text">R</text>
        <text x="220" y="200" className="subtext">S</text>

        <rect id="keyD" x="260" y="150" width="60" height="60" className={`key ${pressedKey === 'keyD' ? 'key-pressed' : ''}`} />
        <text x="290" y="180" className="key-text">S</text>
        <text x="290" y="200" className="subtext">D</text>

        <rect id="keyF" x="330" y="150" width="60" height="60" className={`key ${pressedKey === 'keyF' ? 'key-pressed' : ''}`} />
        <text x="360" y="180" className="key-text">T</text>
        <text x="360" y="200" className="subtext">F</text>

        <rect id="keyG" x="400" y="150" width="60" height="60" className={`key ${pressedKey === 'keyG' ? 'key-pressed' : ''}`} />
        <text x="430" y="180" className="key-text">D</text>
        <text x="430" y="200" className="subtext">G</text>

        <rect id="keyH" x="470" y="150" width="60" height="60" className={`key ${pressedKey === 'keyH' ? 'key-pressed' : ''}`} />
        <text x="500" y="180" className="key-text">H</text>
        <text x="500" y="200" className="subtext">H</text>

        <rect id="keyJ" x="540" y="150" width="60" height="60" className={`key ${pressedKey === 'keyJ' ? 'key-pressed' : ''}`} />
        <text x="570" y="180" className="key-text">N</text>
        <text x="570" y="200" className="subtext">J</text>

        <rect id="keyK" x="610" y="150" width="60" height="60" className={`key ${pressedKey === 'keyK' ? 'key-pressed' : ''}`} />
        <text x="640" y="180" className="key-text">E</text>
        <text x="640" y="200" className="subtext">K</text>

        <rect id="keyL" x="680" y="150" width="60" height="60" className={`key ${pressedKey === 'keyL' ? 'key-pressed' : ''}`} />
        <text x="710" y="180" className="key-text">I</text>
        <text x="710" y="200" className="subtext">L</text>

        <rect id="keySemicolon" x="750" y="150" width="60" height="60" className={`key ${pressedKey === 'keySemicolon' ? 'key-pressed' : ''}`} />
        <text x="780" y="180" className="key-text">O</text>
        <text x="780" y="200" className="subtext">;</text>

        <rect id="keyQuote" x="820" y="150" width="60" height="60" className={`key ${pressedKey === 'keyQuote' ? 'key-pressed' : ''}`} />
        <text x="850" y="180" className="key-text">'</text>
        <text x="850" y="200" className="subtext">'</text>

        <rect id="keyEnter" x="890" y="150" width="210" height="60" className={`key ${pressedKey === 'keyEnter' ? 'key-pressed' : ''}`} />
        <text x="995" y="180" className="key-text">Enter</text>

        {/* Row 4 */}
        <rect id="keyShiftLeft" x="10" y="220" width="140" height="60" className={`key ${pressedKey === 'keyShiftLeft' ? 'key-pressed' : ''}`} />
        <text x="80" y="250" className="key-text">Shift</text>

        <rect id="keyZ" x="160" y="220" width="60" height="60" className={`key ${pressedKey === 'keyZ' ? 'key-pressed' : ''}`} />
        <text x="190" y="250" className="key-text">Z</text>
        <text x="190" y="270" className="subtext">Z</text>

        <rect id="keyX" x="230" y="220" width="60" height="60" className={`key ${pressedKey === 'keyX' ? 'key-pressed' : ''}`} />
        <text x="260" y="250" className="key-text">X</text>
        <text x="260" y="270" className="subtext">X</text>

        <rect id="keyC" x="300" y="220" width="60" height="60" className={`key ${pressedKey === 'keyC' ? 'key-pressed' : ''}`} />
        <text x="330" y="250" className="key-text">C</text>
        <text x="330" y="270" className="subtext">C</text>

        <rect id="keyV" x="370" y="220" width="60" height="60" className={`key ${pressedKey === 'keyV' ? 'key-pressed' : ''}`} />
        <text x="400" y="250" className="key-text">V</text>
        <text x="400" y="270" className="subtext">V</text>

        <rect id="keyB" x="440" y="220" width="60" height="60" className={`key ${pressedKey === 'keyB' ? 'key-pressed' : ''}`} />
        <text x="470" y="250" className="key-text">B</text>
        <text x="470" y="270" className="subtext">B</text>

        <rect id="keyN" x="510" y="220" width="60" height="60" className={`key ${pressedKey === 'keyN' ? 'key-pressed' : ''}`} />
        <text x="540" y="250" className="key-text">K</text>
        <text x="540" y="270" className="subtext">N</text>

        <rect id="keyM" x="580" y="220" width="60" height="60" className={`key ${pressedKey === 'keyM' ? 'key-pressed' : ''}`} />
        <text x="610" y="250" className="key-text">M</text>
        <text x="610" y="270" className="subtext">M</text>

        <rect id="keyComma" x="650" y="220" width="60" height="60" className={`key ${pressedKey === 'keyComma' ? 'key-pressed' : ''}`} />
        <text x="680" y="250" className="key-text">,</text>
        <text x="680" y="270" className="subtext">,</text>

        <rect id="keyPeriod" x="720" y="220" width="60" height="60" className={`key ${pressedKey === 'keyPeriod' ? 'key-pressed' : ''}`} />
        <text x="750" y="250" className="key-text">.</text>
        <text x="750" y="270" className="subtext">.</text>

        <rect id="keySlash" x="790" y="220" width="60" height="60" className={`key ${pressedKey === 'keySlash' ? 'key-pressed' : ''}`} />
        <text x="820" y="250" className="key-text">/</text>
        <text x="820" y="270" className="subtext">/</text>

        <rect id="keyShiftRight" x="860" y="220" width="240" height="60" className={`key ${pressedKey === 'keyShiftRight' ? 'key-pressed' : ''}`} />
        <text x="980" y="250" className="key-text">Shift</text>

        {/* Row 5 */}
        <rect id="keyCtrlLeft" x="10" y="290" width="100" height="60" className={`key ${pressedKey === 'keyCtrlLeft' ? 'key-pressed' : ''}`} />
        <text x="60" y="320" className="key-text">Ctrl</text>

        <rect id="keyAltLeft" x="120" y="290" width="100" height="60" className={`key ${pressedKey === 'keyAltLeft' ? 'key-pressed' : ''}`} />
        <text x="170" y="320" className="key-text">Alt</text>

        <rect id="keySpace" x="230" y="290" width="500" height="60" className={`key ${pressedKey === 'keySpace' ? 'key-pressed' : ''}`} />
        <text x="480" y="320" className="key-text">Space</text>

        <rect id="keyAltRight" x="740" y="290" width="100" height="60" className={`key ${pressedKey === 'keyAltRight' ? 'key-pressed' : ''}`} />
        <text x="790" y="320" className="key-text">Alt</text>

        <rect id="keyCtrlRight" x="850" y="290" width="100" height="60" className={`key ${pressedKey === 'keyCtrlRight' ? 'key-pressed' : ''}`} />
        <text x="900" y="320" className="key-text">Ctrl</text>
      </svg>
    </div>
  );
};

export default ColemakKeyboard;
