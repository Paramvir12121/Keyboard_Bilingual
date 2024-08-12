import React, { useState, useEffect } from 'react'

const KeyPress = () => {
    const [keys, setKeys] = useState([]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      setKeys((prevKeys) => [...prevKeys, event.key].slice(-10));
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  return (
    <div className="App">
      <h1>Key Tracker</h1>
      <p>Press any key to see it displayed below:</p>
      <div className="key-display">
        {keys.map((key, index) => (
          <span key={index} className="key">
            {key}
          </span>
        ))}
      </div>
    </div>
  )
}

export default KeyPress

