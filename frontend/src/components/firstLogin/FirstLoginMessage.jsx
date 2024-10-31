// FirstLoginMessage.jsx
import React from 'react';

const FirstLoginMessage = ({ closeOverlay, startSetup }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Keyboard Bilingual!</h1>
      <p>
        Enhance your typing skills by learning a new keyboard layout without losing proficiency in your current one.
      </p>
      <p>Let's get started by selecting your current keyboard layout and the one you'd like to learn.</p>
      <button
        onClick={startSetup}
        style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px' }}
      >
        Start Setup
      </button>
      <button
        onClick={closeOverlay}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Start Typing
      </button>
    </div>
  );
};

export default FirstLoginMessage;
