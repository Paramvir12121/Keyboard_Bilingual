import React from 'react';

const Keyboard = () => {
  // Define a simple array of key symbols
  const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];

  // Function to handle key click
  const handleKeyClick = (keySymbol) => {
    console.log(`Key ${keySymbol} clicked`);
  };

  return (
    <div className="keyboard">
      {keys.map((keySymbol, index) => (
        <button key={index} onClick={() => handleKeyClick(keySymbol)}>
          {keySymbol}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;