import React, { useState, useEffect } from 'react';
import SingleKeyboard from '../../keyboard/SingleKeyboard';

const KeyboardSelection = ({ userLearningLayout, userKeyboardLayout, showKeyboard, pressedKey }) => {
    if (!showKeyboard) {
        return null;  // Don't render anything if the keyboard should not be shown
    }

    return (
        <div className='container-fluid'>
            <div className='keyboard-container'>
            <SingleKeyboard pressedKey={pressedKey} userKeyboardLayout={userKeyboardLayout} userLearningLayout={userLearningLayout}/>
        </div>
        </div>
    );
};

export default KeyboardSelection;
      
