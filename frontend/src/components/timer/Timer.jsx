// Timer.jsx
import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimerEnd }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const timerId = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      onTimerEnd();
    }
  }, [time, onTimerEnd]);

  return (
    <div className="timer">
      Time remaining: {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}
    </div>
  );
};

export default Timer;