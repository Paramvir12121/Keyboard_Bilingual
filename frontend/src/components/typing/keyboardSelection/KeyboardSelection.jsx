import React, { useState, useEffect } from 'react';
import ColemakKeyboardSvg from '../../keyboardSvgs.jsx/ColemakKeyboardSvg';
import QwertyKeyboard from '../../keyboardSvgs.jsx/QwertyKeyboard';
import DvorakKeyboardSvg from '../../keyboardSvgs.jsx/DvorakKeyboardSvg';
import SingleKeyboard from '../../../testComponents/SingleKeyboard';

const KeyboardSelection = ({ userLearningLayout, userKeyboardLayout, showKeyboard, pressedKey }) => {
    if (!showKeyboard) {
        return null;  // Don't render anything if the keyboard should not be shown
    }

    // let KeyboardComponent;

    // switch (userLearningLayout) {
    //     case 'colemak':
    //         KeyboardComponent = ColemakKeyboardSvg;
    //         break;
    //     case 'dvorak':
    //         KeyboardComponent = DvorakKeyboardSvg;
    //         break;
    //     case 'workman':
    //         KeyboardComponent = WorkmanKeyboardSvg;
    //         break;
    //     case 'qwerty':
    //     default:
    //         KeyboardComponent = QwertyKeyboard;
    //         break;
    // }

    return (
        <div className='container-lg'>
            {/* <KeyboardComponent pressedKey={pressedKey} /> */}
            <SingleKeyboard pressedKey={pressedKey} userKeyboardLayout={userKeyboardLayout} userLearningLayout={userLearningLayout}/>
        </div>
    );
};

export default KeyboardSelection;
      
