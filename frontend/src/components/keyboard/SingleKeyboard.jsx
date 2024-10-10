import React, {useState, useEffect} from 'react';
import {ToKeyId} from './ToKeyId';
import {userKeyboardLayouts} from './userKeyboardLayouts';


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

const SingleKeyboard = ({ pressedKey,userKeyboardLayout,userLearningLayout }) => {
    const [pressedKeyId, setPressedKeyId] = useState(pressedKey);

    const layoutKeys = userKeyboardLayouts[userLearningLayout];
    const learningLayoutKeys = userKeyboardLayouts[userKeyboardLayout];

    useEffect(() => {
        if (pressedKey) {
            console.log('Pressed key:', pressedKey);
            const upperKey = pressedKey.toUpperCase();
            const keyId = ToKeyId[userKeyboardLayout][upperKey];
            setPressedKeyId(keyId);

            // Set a timeout to clear the highlight after 0.25 seconds
            const timer = setTimeout(() => {
                setPressedKeyId(''); // Reset pressedKeyId
            }, 250);

            // Clean up the timeout if the component unmounts or pressedKey changes
            return () => {
                clearTimeout(timer); 
            };
        } else {
            setPressedKeyId(''); // Reset immediately if no pressedKey
        }
    }, [pressedKey, userKeyboardLayout]);

    const drawKey = (id, x, y, width, height, primaryKey, fillColor, label = primaryKey) => (
        <g key={id}>
            <rect x={x} y={y} width={width} height={height} style={{ fill: fillColor }} className={`key ${pressedKeyId === id ? 'key-pressed' : ''}`} />
            <text x={x + width / 2} y={y + 25} textAnchor="middle" className="key-text">{layoutKeys[primaryKey] || label}</text>
            <text x={x + width / 2} y={y + 40} textAnchor="middle" className="key-subtext">{learningLayoutKeys[primaryKey] || ''}</text>
        </g>
    );

    return (
        <div style={{ width: '100%', height: 'auto' }}>
            Pressed Key: {pressedKey} <br />
            Predded Key Id: {pressedKeyId}
            <svg width="100%" height="auto" viewBox="0 0 1300 400" preserveAspectRatio="xMidYMid meet">
                {/* Row 1: Numbers and symbols */}
                {drawKey('keyGrave', 10, 10, 50, 50, '`', fingerColorMap.leftPinky)}
                {drawKey('key1', 65, 10, 50, 50, '1', fingerColorMap.leftPinky)}
                {drawKey('key2', 120, 10, 50, 50, '2', fingerColorMap.leftRing)}
                {drawKey('key3', 175, 10, 50, 50, '3', fingerColorMap.leftMiddle)}
                {drawKey('key4', 230, 10, 50, 50, '4', fingerColorMap.leftIndex)}
                {drawKey('key5', 285, 10, 50, 50, '5', fingerColorMap.leftIndex)}
                {drawKey('key6', 340, 10, 50, 50, '6', fingerColorMap.rightIndex)}
                {drawKey('key7', 395, 10, 50, 50, '7', fingerColorMap.rightIndex)}
                {drawKey('key8', 450, 10, 50, 50, '8', fingerColorMap.rightMiddle)}
                {drawKey('key9', 505, 10, 50, 50, '9', fingerColorMap.rightRing)}
                {drawKey('key0', 560, 10, 50, 50, '0', fingerColorMap.rightRing)}
                {drawKey('keyMinus', 615, 10, 50, 50, '-', fingerColorMap.rightPinky)}
                {drawKey('keyEqual', 670, 10, 50, 50, '=', fingerColorMap.rightPinky)}
                {drawKey('keyBackspace', 725, 10, 110, 50, 'Backspace', fingerColorMap.rightPinky, 'Backspace')}

                {/* Row 2: QWERTY */}
                {drawKey('keyTab', 10, 70, 80, 50, 'Tab', fingerColorMap.leftPinky, 'Tab')}
                {drawKey('keyQ', 95, 70, 50, 50, 'Q', fingerColorMap.leftPinky)}
                {drawKey('keyW', 150, 70, 50, 50, 'W', fingerColorMap.leftRing)}
                {drawKey('keyE', 205, 70, 50, 50, 'E', fingerColorMap.leftMiddle)}
                {drawKey('keyR', 260, 70, 50, 50, 'R', fingerColorMap.leftIndex)}
                {drawKey('keyT', 315, 70, 50, 50, 'T', fingerColorMap.leftIndex)}
                {drawKey('keyY', 370, 70, 50, 50, 'Y', fingerColorMap.rightIndex)}
                {drawKey('keyU', 425, 70, 50, 50, 'U', fingerColorMap.rightIndex)}
                {drawKey('keyI', 480, 70, 50, 50, 'I', fingerColorMap.rightMiddle)}
                {drawKey('keyO', 535, 70, 50, 50, 'O', fingerColorMap.rightRing)}
                {drawKey('keyP', 590, 70, 50, 50, 'P', fingerColorMap.rightRing)}
                {drawKey('keyBracketLeft', 645, 70, 50, 50, '[', fingerColorMap.rightPinky)}
                {drawKey('keyBracketRight', 700, 70, 50, 50, ']', fingerColorMap.rightPinky)}
                {drawKey('keyBackslash', 755, 70, 80, 50, '\\', fingerColorMap.rightPinky, '\\')}

                {/* Row 3: Home Row */}
                {drawKey('keyCapsLock', 10, 130, 90, 50, 'CapsLock', fingerColorMap.leftPinky, 'Caps')}
                {drawKey('keyA', 105, 130, 50, 50, 'A', fingerColorMap.leftPinky)}
                {drawKey('keyS', 160, 130, 50, 50, 'S', fingerColorMap.leftRing)}
                {drawKey('keyD', 215, 130, 50, 50, 'D', fingerColorMap.leftMiddle)}
                {drawKey('keyF', 270, 130, 50, 50, 'F', fingerColorMap.leftIndex)}
                {drawKey('keyG', 325, 130, 50, 50, 'G', fingerColorMap.leftIndex)}
                {drawKey('keyH', 380, 130, 50, 50, 'H', fingerColorMap.rightIndex)}
                {drawKey('keyJ', 435, 130, 50, 50, 'J', fingerColorMap.rightIndex)}
                {drawKey('keyK', 490, 130, 50, 50, 'K', fingerColorMap.rightMiddle)}
                {drawKey('keyL', 545, 130, 50, 50, 'L', fingerColorMap.rightRing)}
                {drawKey('keySemicolon', 600, 130, 50, 50, ';', fingerColorMap.rightRing)}
                {drawKey('keyQuote', 655, 130, 50, 50, "'", fingerColorMap.rightPinky)}
                {drawKey('keyEnter', 710, 130, 125, 50, 'Enter', fingerColorMap.rightPinky, 'Enter')}

                {/* Row 4: Bottom Row */}
                {drawKey('keyShiftLeft', 10, 190, 115, 50, 'Shift', fingerColorMap.leftPinky, 'Shift')}
                {drawKey('keyZ', 130, 190, 50, 50, 'Z', fingerColorMap.leftPinky)}
                {drawKey('keyX', 185, 190, 50, 50, 'X', fingerColorMap.leftRing)}
                {drawKey('keyC', 240, 190, 50, 50, 'C', fingerColorMap.leftMiddle)}
                {drawKey('keyV', 295, 190, 50, 50, 'V', fingerColorMap.leftIndex)}
                {drawKey('keyB', 350, 190, 50, 50, 'B', fingerColorMap.leftIndex)}
                {drawKey('keyN', 405, 190, 50, 50, 'N', fingerColorMap.rightIndex)}
                {drawKey('keyM', 460, 190, 50, 50, 'M', fingerColorMap.rightIndex)}
                {drawKey('keyComma', 515, 190, 50, 50, ',', fingerColorMap.rightRing)}
                {drawKey('keyPeriod', 570, 190, 50, 50, '.', fingerColorMap.rightRing)}
                {drawKey('keySlash', 625, 190, 50, 50, '/', fingerColorMap.rightPinky)}
                {drawKey('keyShiftRight', 680, 190, 135, 50, 'Shift', fingerColorMap.rightPinky, 'Shift')}

                {/* Row 5: Space bar and modifiers */}
                {drawKey('keyCtrlLeft', 10, 250, 75, 50, 'Ctrl', fingerColorMap.leftPinky, 'Ctrl')}
                {drawKey('keyAltLeft', 90, 250, 75, 50, 'Alt', fingerColorMap.leftPinky, 'Alt')}
                {drawKey('keySpace', 170, 250, 350, 50, ' ', fingerColorMap.thumb, 'Space')}
                {drawKey('keyAltRight', 525, 250, 75, 50, 'Alt', fingerColorMap.rightPinky, 'Alt')}
                {drawKey('keyCtrlRight', 605, 250, 75, 50, 'Ctrl', fingerColorMap.rightPinky, 'Ctrl')}
            </svg>
        </div>
    );
};

export default SingleKeyboard;
