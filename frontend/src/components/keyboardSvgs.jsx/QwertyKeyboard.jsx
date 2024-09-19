import React from 'react';

// Finger color mapping with transparency
const fingerColorMap = {
  leftPinky: 'rgba(255, 111, 97, 0.2)',     // Coral
  leftRing: 'rgba(255, 171, 97, 0.2)',      // Light coral
  leftMiddle: 'rgba(255, 213, 97, 0.2)',    // Yellow
  leftIndex: 'rgba(97, 255, 97, 0.2)',      // Green
  rightIndex: 'rgba(97, 210, 255, 0.2)',    // Light blue
  rightMiddle: 'rgba(97, 150, 255, 0.2)',   // Blue
  rightRing: 'rgba(150, 97, 255, 0.2)',     // Purple
  rightPinky: 'rgba(255, 97, 171, 0.2)',    // Pink
  thumb: 'rgba(97, 255, 150, 0.2)',         // Light green
};

const QwertyKeyboard = ({ pressedKey }) => {
  return (
    <div style={{ width: '100%', height: 'auto' }}>
      <svg width="100%" height="auto" viewBox="0 0 1200 350" preserveAspectRatio="xMidYMid meet">
        {/* Row 1 */}
        <rect id="keyGrave" x="10" y="10" width="50" height="50" style={{ fill: fingerColorMap.leftPinky }} className={`key ${pressedKey === 'keyGrave' ? 'key-pressed' : ''}`} />
        <text x="30" y="40" className="key-text">`</text>

        <rect id="key1" x="65" y="10" width="50" height="50" style={{ fill: fingerColorMap.leftPinky }} className={`key ${pressedKey === 'key1' ? 'key-pressed' : ''}`} />
        <text x="85" y="40" className="key-text">1</text>

        <rect id="key2" x="120" y="10" width="50" height="50" style={{ fill: fingerColorMap.leftRing }} className={`key ${pressedKey === 'key2' ? 'key-pressed' : ''}`} />
        <text x="140" y="40" className="key-text">2</text>

        <rect id="key3" x="175" y="10" width="50" height="50" style={{ fill: fingerColorMap.leftMiddle }} className={`key ${pressedKey === 'key3' ? 'key-pressed' : ''}`} />
        <text x="195" y="40" className="key-text">3</text>

        <rect id="key4" x="230" y="10" width="50" height="50" style={{ fill: fingerColorMap.leftIndex }} className={`key ${pressedKey === 'key4' ? 'key-pressed' : ''}`} />
        <text x="250" y="40" className="key-text">4</text>

        <rect id="key5" x="285" y="10" width="50" height="50" style={{ fill: fingerColorMap.leftIndex }} className={`key ${pressedKey === 'key5' ? 'key-pressed' : ''}`} />
        <text x="305" y="40" className="key-text">5</text>

        <rect id="key6" x="340" y="10" width="50" height="50" style={{ fill: fingerColorMap.rightIndex }} className={`key ${pressedKey === 'key6' ? 'key-pressed' : ''}`} />
        <text x="360" y="40" className="key-text">6</text>

        <rect id="key7" x="395" y="10" width="50" height="50" style={{ fill: fingerColorMap.rightIndex }} className={`key ${pressedKey === 'key7' ? 'key-pressed' : ''}`} />
        <text x="415" y="40" className="key-text">7</text>

        <rect id="key8" x="450" y="10" width="50" height="50" style={{ fill: fingerColorMap.rightMiddle }} className={`key ${pressedKey === 'key8' ? 'key-pressed' : ''}`} />
        <text x="470" y="40" className="key-text">8</text>

        <rect id="key9" x="505" y="10" width="50" height="50" style={{ fill: fingerColorMap.rightRing }} className={`key ${pressedKey === 'key9' ? 'key-pressed' : ''}`} />
        <text x="525" y="40" className="key-text">9</text>

        <rect id="key0" x="560" y="10" width="50" height="50" style={{ fill: fingerColorMap.rightRing }} className={`key ${pressedKey === 'key0' ? 'key-pressed' : ''}`} />
        <text x="580" y="40" className="key-text">0</text>

        <rect id="keyMinus" x="615" y="10" width="50" height="50" style={{ fill: fingerColorMap.rightPinky }} className={`key ${pressedKey === 'keyMinus' ? 'key-pressed' : ''}`} />
        <text x="635" y="40" className="key-text">-</text>

        <rect id="keyEqual" x="670" y="10" width="50" height="50" style={{ fill: fingerColorMap.rightPinky }} className={`key ${pressedKey === 'keyEqual' ? 'key-pressed' : ''}`} />
        <text x="690" y="40" className="key-text">=</text>

        <rect id="keyBackspace" x="725" y="10" width="110" height="50" style={{ fill: fingerColorMap.rightPinky }} className={`key ${pressedKey === 'keyBackspace' ? 'key-pressed' : ''}`} />
        <text x="780" y="40" className="key-text">Backspace</text>

        {/* Row 2 */}
        <rect id="keyTab" x="10" y="70" width="80" height="50" style={{ fill: fingerColorMap.leftPinky }} className={`key ${pressedKey === 'keyTab' ? 'key-pressed' : ''}`} />
        <text x="40" y="100" className="key-text">Tab</text>

        <rect id="keyQ" x="95" y="70" width="50" height="50" style={{ fill: fingerColorMap.leftPinky }} className={`key ${pressedKey === 'keyQ' ? 'key-pressed' : ''}`} />
        <text x="120" y="100" className="key-text">Q</text>

        <rect id="keyW" x="150" y="70" width="50" height="50" style={{ fill: fingerColorMap.leftRing }} className={`key ${pressedKey === 'keyW' ? 'key-pressed' : ''}`} />
        <text x="175" y="100" className="key-text">W</text>

        <rect id="keyE" x="205" y="70" width="50" height="50" style={{ fill: fingerColorMap.leftMiddle }} className={`key ${pressedKey === 'keyE' ? 'key-pressed' : ''}`} />
        <text x="230" y="100" className="key-text">E</text>

        <rect id="keyR" x="260" y="70" width="50" height="50" style={{ fill: fingerColorMap.leftIndex }} className={`key ${pressedKey === 'keyR' ? 'key-pressed' : ''}`} />
        <text x="285" y="100" className="key-text">R</text>

        <rect id="keyT" x="315" y="70" width="50" height="50" style={{ fill: fingerColorMap.leftIndex }} className={`key ${pressedKey === 'keyT' ? 'key-pressed' : ''}`} />
        <text x="340" y="100" className="key-text">T</text>

        <rect id="keyY" x="370" y="70" width="50" height="50" style={{ fill: fingerColorMap.rightIndex }} className={`key ${pressedKey === 'keyY' ? 'key-pressed' : ''}`} />
        <text x="395" y="100" className="key-text">Y</text>

        <rect id="keyU" x="425" y="70" width="50" height="50" style={{ fill: fingerColorMap.rightIndex }} className={`key ${pressedKey === 'keyU' ? 'key-pressed' : ''}`} />
        <text x="450" y="100" className="key-text">U</text>

        <rect id="keyI" x="480" y="70" width="50" height="50" style={{ fill: fingerColorMap.rightMiddle }} className={`key ${pressedKey === 'keyI' ? 'key-pressed' : ''}`} />
        <text x="505" y="100" className="key-text">I</text>

        <rect id="keyO" x="535" y="70" width="50" height="50" style={{ fill: fingerColorMap.rightRing }} className={`key ${pressedKey === 'keyO' ? 'key-pressed' : ''}`} />
        <text x="560" y="100" className="key-text">O</text>

        <rect id="keyP" x="590" y="70" width="50" height="50" style={{ fill: fingerColorMap.rightRing }} className={`key ${pressedKey === 'keyP' ? 'key-pressed' : ''}`} />
        <text x="615" y="100" className="key-text">P</text>

        <rect id="keyBracketLeft" x="645" y="70" width="50" height="50" style={{ fill: fingerColorMap.rightPinky }} className={`key ${pressedKey === 'keyBracketLeft' ? 'key-pressed' : ''}`} />
        <text x="670" y="100" className="key-text">[</text>

        <rect id="keyBracketRight" x="700" y="70" width="50" height="50" style={{ fill: fingerColorMap.rightPinky }} className={`key ${pressedKey === 'keyBracketRight' ? 'key-pressed' : ''}`} />
        <text x="725" y="100" className="key-text">]</text>

        <rect id="keyBackslash" x="755" y="70" width="80" height="50" style={{ fill: fingerColorMap.rightPinky }} className={`key ${pressedKey === 'keyBackslash' ? 'key-pressed' : ''}`} />
        <text x="785" y="100" className="key-text">\\</text>

        {/* Row 3 */}
        <rect id="keyCapsLock" x="10" y="130" width="90" height="50" style={{ fill: fingerColorMap.leftPinky }} className={`key ${pressedKey === 'keyCapsLock' ? 'key-pressed' : ''}`} />
        <text x="40" y="160" className="key-text">Caps</text>

        <rect id="keyA" x="105" y="130" width="50" height="50" style={{ fill: fingerColorMap.leftPinky }} className={`key ${pressedKey === 'keyA' ? 'key-pressed' : ''}`} />
        <text x="125" y="160" className="key-text">A</text>

        <rect id="keyS" x="160" y="130" width="50" height="50" style={{ fill: fingerColorMap.leftRing }} className={`key ${pressedKey === 'keyS' ? 'key-pressed' : ''}`} />
        <text x="180" y="160" className="key-text">S</text>

        <rect id="keyD" x="215" y="130" width="50" height="50" style={{ fill: fingerColorMap.leftMiddle }} className={`key ${pressedKey === 'keyD' ? 'key-pressed' : ''}`} />
        <text x="235" y="160" className="key-text">D</text>

        <rect id="keyF" x="270" y="130" width="50" height="50" style={{ fill: fingerColorMap.leftIndex }} className={`key ${pressedKey === 'keyF' ? 'key-pressed' : ''}`} />
        <text x="290" y="160" className="key-text">F</text>

        <rect id="keyG" x="325" y="130" width="50" height="50" style={{ fill: fingerColorMap.leftIndex }} className={`key ${pressedKey === 'keyG' ? 'key-pressed' : ''}`} />
        <text x="345" y="160" className="key-text">G</text>

        <rect id="keyH" x="380" y="130" width="50" height="50" style={{ fill: fingerColorMap.rightIndex }} className={`key ${pressedKey === 'keyH' ? 'key-pressed' : ''}`} />
        <text x="400" y="160" className="key-text">H</text>

        <rect id="keyJ" x="435" y="130" width="50" height="50" style={{ fill: fingerColorMap.rightIndex }} className={`key ${pressedKey === 'keyJ' ? 'key-pressed' : ''}`} />
        <text x="455" y="160" className="key-text">J</text>

        <rect id="keyK" x="490" y="130" width="50" height="50" style={{ fill: fingerColorMap.rightMiddle }} className={`key ${pressedKey === 'keyK' ? 'key-pressed' : ''}`} />
        <text x="510" y="160" className="key-text">K</text>

        <rect id="keyL" x="545" y="130" width="50" height="50" style={{ fill: fingerColorMap.rightRing }} className={`key ${pressedKey === 'keyL' ? 'key-pressed' : ''}`} />
        <text x="565" y="160" className="key-text">L</text>

        <rect id="keySemicolon" x="600" y="130" width="50" height="50" style={{ fill: fingerColorMap.rightRing }} className={`key ${pressedKey === 'keySemicolon' ? 'key-pressed' : ''}`} />
        <text x="620" y="160" className="key-text">;</text>

        <rect id="keyQuote" x="655" y="130" width="50" height="50" style={{ fill: fingerColorMap.rightPinky }} className={`key ${pressedKey === 'keyQuote' ? 'key-pressed' : ''}`} />
        <text x="675" y="160" className="key-text">'</text>

        <rect id="keyEnter" x="710" y="130" width="105" height="50" style={{ fill: fingerColorMap.rightPinky }} className={`key ${pressedKey === 'keyEnter' ? 'key-pressed' : ''}`} />
        <text x="755" y="160" className="key-text">Enter</text>

        {/* Row 4 */}
        <rect id="keyShiftLeft" x="10" y="190" width="115" height="50" style={{ fill: fingerColorMap.leftPinky }} className={`key ${pressedKey === 'keyShiftLeft' ? 'key-pressed' : ''}`} />
        <text x="40" y="220" className="key-text">Shift</text>

        <rect id="keyZ" x="130" y="190" width="50" height="50" style={{ fill: fingerColorMap.leftPinky }} className={`key ${pressedKey === 'keyZ' ? 'key-pressed' : ''}`} />
        <text x="150" y="220" className="key-text">Z</text>

        <rect id="keyX" x="185" y="190" width="50" height="50" style={{ fill: fingerColorMap.leftRing }} className={`key ${pressedKey === 'keyX' ? 'key-pressed' : ''}`} />
        <text x="205" y="220" className="key-text">X</text>

        <rect id="keyC" x="240" y="190" width="50" height="50" style={{ fill: fingerColorMap.leftMiddle }} className={`key ${pressedKey === 'keyC' ? 'key-pressed' : ''}`} />
        <text x="260" y="220" className="key-text">C</text>

        <rect id="keyV" x="295" y="190" width="50" height="50" style={{ fill: fingerColorMap.leftIndex }} className={`key ${pressedKey === 'keyV' ? 'key-pressed' : ''}`} />
        <text x="315" y="220" className="key-text">V</text>

        <rect id="keyB" x="350" y="190" width="50" height="50" style={{ fill: fingerColorMap.leftIndex }} className={`key ${pressedKey === 'keyB' ? 'key-pressed' : ''}`} />
        <text x="370" y="220" className="key-text">B</text>

        <rect id="keyN" x="405" y="190" width="50" height="50" style={{ fill: fingerColorMap.rightIndex }} className={`key ${pressedKey === 'keyN' ? 'key-pressed' : ''}`} />
        <text x="425" y="220" className="key-text">N</text>

        <rect id="keyM" x="460" y="190" width="50" height="50" style={{ fill: fingerColorMap.rightIndex }} className={`key ${pressedKey === 'keyM' ? 'key-pressed' : ''}`} />
        <text x="480" y="220" className="key-text">M</text>

        <rect id="keyComma" x="515" y="190" width="50" height="50" style={{ fill: fingerColorMap.rightRing }} className={`key ${pressedKey === 'keyComma' ? 'key-pressed' : ''}`} />
        <text x="535" y="220" className="key-text">,</text>

        <rect id="keyPeriod" x="570" y="190" width="50" height="50" style={{ fill: fingerColorMap.rightRing }} className={`key ${pressedKey === 'keyPeriod' ? 'key-pressed' : ''}`} />
        <text x="590" y="220" className="key-text">.</text>

        <rect id="keySlash" x="625" y="190" width="50" height="50" style={{ fill: fingerColorMap.rightPinky }} className={`key ${pressedKey === 'keySlash' ? 'key-pressed' : ''}`} />
        <text x="645" y="220" className="key-text">/</text>

        <rect id="keyShiftRight" x="680" y="190" width="135" height="50" style={{ fill: fingerColorMap.rightPinky }} className={`key ${pressedKey === 'keyShiftRight' ? 'key-pressed' : ''}`} />
        <text x="725" y="220" className="key-text">Shift</text>

        {/* Row 5 */}
        <rect id="keyCtrlLeft" x="10" y="250" width="75" height="50" style={{ fill: fingerColorMap.leftPinky }} className={`key ${pressedKey === 'keyCtrlLeft' ? 'key-pressed' : ''}`} />
        <text x="35" y="280" className="key-text">Ctrl</text>

        <rect id="keyAltLeft" x="90" y="250" width="75" height="50" style={{ fill: fingerColorMap.leftPinky }} className={`key ${pressedKey === 'keyAltLeft' ? 'key-pressed' : ''}`} />
        <text x="115" y="280" className="key-text">Alt</text>

        <rect id="keySpace" x="170" y="250" width="350" height="50" style={{ fill: fingerColorMap.thumb }} className={`key ${pressedKey === 'keySpace' ? 'key-pressed' : ''}`} />
        <text x="350" y="280" className="key-text">Space</text>

        <rect id="keyAltRight" x="525" y="250" width="75" height="50" style={{ fill: fingerColorMap.rightPinky }} className={`key ${pressedKey === 'keyAltRight' ? 'key-pressed' : ''}`} />
        <text x="550" y="280" className="key-text">Alt</text>

        <rect id="keyCtrlRight" x="605" y="250" width="75" height="50" style={{ fill: fingerColorMap.rightPinky }} className={`key ${pressedKey === 'keyCtrlRight' ? 'key-pressed' : ''}`} />
        <text x="630" y="280" className="key-text">Ctrl</text>
      </svg>
    </div>
  );
};

export default QwertyKeyboard;
