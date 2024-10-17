import React, { useRef, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const TextDisplay = ({ displayText, cursorIndex, isWrongKey }) => {
  const textRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
  const [cursorSize, setCursorSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (textRef.current) {
      const spans = textRef.current.querySelectorAll('.character');
      const currentSpan = spans[cursorIndex];
      if (currentSpan) {
        const { offsetLeft: left, offsetTop: top, offsetWidth: width, offsetHeight: height } = currentSpan;
        setCursorPosition({ left, top });
        setCursorSize({ width, height });
      }
    }
  }, [cursorIndex, displayText]);

  const cursorStyle = {
    position: 'absolute',
    left: cursorPosition.left,
    top: cursorPosition.top,
    width: cursorSize.width,
    height: cursorSize.height,
    transition: 'left 0.1s ease, top 0.1s ease',
    backgroundColor: isWrongKey ? 'rgba(255, 0, 0, 0.3)' : 'rgba(0, 0, 255, 0.2)',
    pointerEvents: 'none',
  };

  return (
    <Card className="text-display-card">
      <Card.Body>
        <div style={{ position: 'relative', fontFamily: 'monospace' }}>
          <div ref={textRef} style={{ display: 'flex', flexWrap: 'wrap' }}>
            {displayText.split('').map((char, index) => (
              <span key={index} className="character">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
          <span className="cursor" style={cursorStyle}></span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TextDisplay;
