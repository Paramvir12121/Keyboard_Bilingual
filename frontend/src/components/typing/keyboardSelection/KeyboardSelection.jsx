import React, { useState, useEffect } from 'react';
import ColemakKeyboardSvg from '../../keyboardSvgs.jsx/ColemakKeyboardSvg';
import QwertyKeyboard from '../../keyboardSvgs.jsx/QwertyKeyboard';
import DvorakKeyboardSvg from '../../keyboardSvgs.jsx/DvorakKeyboardSvg';

const KeyboardSelection = ({ userLearningLayout, userKeyboardLayout, showKeyboard }) => {
    const [pressedKey, setPressedKey] = useState(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            let key = event.key.toLowerCase();

            // Translate the key from user's physical layout to the learning layout
            if (userKeyboardLayout[key]) {
                key = userKeyboardLayout[key];
            }

            // Map the translated key to the corresponding key in the learning layout
            if (userLearningLayout[key]) {
                setPressedKey(userLearningLayout[key]);
            } else {
                setPressedKey(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', () => setPressedKey(null)); // Reset on key up

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', () => setPressedKey(null));
        };
    }, [userLearningLayout, userKeyboardLayout]);

    return (
        <div>
            {showKeyboard && (
                <>
                    {userLearningLayout === 'colemak' && <ColemakKeyboardSvg pressedKey={pressedKey} />}
                    {userLearningLayout === 'qwerty' && <QwertyKeyboard pressedKey={pressedKey} />}
                    {userLearningLayout === 'dvorak' && <DvorakKeyboardSvg pressedKey={pressedKey} />}
                </>
            )}
        </div>
    );
};

export default KeyboardSelection;
