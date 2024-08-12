// CountdownTimer.js
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialSeconds, onCountdownEnd }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      onCountdownEnd();
    }

    return () => clearInterval(timer);
  }, [isActive, seconds, onCountdownEnd]);

  const startCountdown = () => {
    setIsActive(true);
    setSeconds(initialSeconds);
    console.log("Countdown started")
  };

  return (
    <div>
      <button onClick={startCountdown} disabled={isActive}>
        Request Code
      </button>
      {isActive && <p>Resend code in {seconds} seconds</p>}
    </div>
  );
};

export default CountdownTimer;
