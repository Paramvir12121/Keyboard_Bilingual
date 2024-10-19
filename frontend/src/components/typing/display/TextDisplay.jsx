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

  let charIndex = 0; // Keeps track of the global character index

  // Split the text into words and spaces
  const textArray = displayText.split(/(\s+)/);

  const renderedText = textArray.map((textItem, idx) => {
    if (/\s+/.test(textItem)) {
      // It's spaces
      return (
        <span key={`space-${idx}`} className="space">
          {textItem.split('').map((char) => {
            const index = charIndex++;
            return (
              <span
                key={`char-${index}`}
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
            );
          })}
        </span>
      );
    } else {
      // It's a word
      return (
        <span key={`word-${idx}`} className="word">
          {textItem.split('').map((char) => {
            const index = charIndex++;
            return (
              <span
                key={`char-${index}`}
                className={`character ${
                  index === cursorIndex
                    ? isWrongKey
                      ? 'current-character wrong'
                      : 'current-character'
                    : ''
                }`}
              >
                {char}
              </span>
            );
          })}
        </span>
      );
    }
  });

  return (
    <Card className="text-display-card">
      <Card.Body>
        <div style={{ position: 'relative', fontFamily: 'monospace' }}>
          <div ref={textRef} style={{ display: 'flex', flexWrap: 'wrap' }}>
            {renderedText}
          </div>
          <div className="cursor" style={cursorStyle}></div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TextDisplay;
