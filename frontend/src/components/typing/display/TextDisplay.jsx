import React, { useRef, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const TextDisplay = ({ displayText, cursorIndex, isWrongKey }) => {
  const textRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
  const [cursorWidth, setCursorWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      const spans = textRef.current.querySelectorAll('.character');
      const currentSpan = spans[cursorIndex];
      if (currentSpan) {
        const {
          offsetLeft: left,
          offsetTop: top,
          offsetWidth: width,
          offsetHeight: height,
        } = currentSpan;
        setCursorPosition({ left, top: top + height });
        setCursorWidth(width);
      }
    }
  }, [cursorIndex, displayText]);

  const cursorStyle = {
    position: 'absolute',
    left: cursorPosition.left,
    top: cursorPosition.top,
    width: cursorWidth,
    height: '2px', // Thickness of the underscore
    transition: 'left 0.1s ease, top 0.1s ease',
    backgroundColor: isWrongKey ? 'rgba(198, 46, 46, 1)' : 'rgba(119, 205, 255, 1)',
    pointerEvents: 'none',
  };

  return (
    <Card className="text-display-card">
      <Card.Body>
        <div style={{ position: 'relative', fontFamily: 'monospace' }}>
          <div ref={textRef} style={{ display: 'flex', flexWrap: 'wrap' }}>
            {displayText.split('').map((char, index) => (
              <span
                key={index}
                className={`character ${
                  index === cursorIndex
                    ? isWrongKey
                      ? 'current-character wrong'
                      : 'current-character'
                    : ''
                }`}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
          <div className="cursor" style={cursorStyle}></div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TextDisplay;
