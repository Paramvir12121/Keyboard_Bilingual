import React, { useState, useEffect } from 'react';
// Add other layouts as needed


const KeyboardTrainer = ({ baseLayout, targetLayout }) => {
  const [pressedKey, setPressedKey] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const baseKey = e.key.toLowerCase();
      if (baseLayout[baseKey]) {
        const targetChar = baseLayout[baseKey];
        const targetKey = targetLayout[targetChar];
        setPressedKey(targetKey);
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
  }, [baseLayout, targetLayout]);

  return (
    <div>
      <p>Pressed Key: {pressedKey}</p>
      {/* You can add more UI here to display the key visually or perform other tasks */}
    </div>
  );
};

export default KeyboardTrainer;
