import React from 'react';
import { Card } from 'react-bootstrap';


const TextDisplay = ({ displayText, cursorIndex, isWrongKey }) => {
  return (
    <Card className="text-display-card">
      <Card.Body>
        {displayText.split('').map((char, index) => (
          <span 
            key={index} 
            className={`character ${index === cursorIndex ? (isWrongKey ? 'cursor wrong' : 'cursor') : ''}`}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </Card.Body>
    </Card>
  );
};

export default TextDisplay;