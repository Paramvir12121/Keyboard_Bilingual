import React, { useState, useEffect } from 'react';

const Countdown = ({seconds}) => {
    const [count, setCount] = useState(seconds);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isDisabled && count > 0) {
          interval = setInterval(() => {
            setCount(count => count - 1);
          }, 1000);
        } else if (!isDisabled && count !== 0) {
          setIsDisabled(false);
          clearInterval(interval);
          console.log("Countdown ended")
          setCount(seconds);
        }
        return () => clearInterval(interval);
      }, [isDisabled, count]);

    const startCountDown = () => {
      setIsDisabled(true);
      setCount(seconds);
      console.log("Countdown started")
     
    }

    return (
        <div>
            <h1>Countdown: {count}</h1>
            <button onClick={startCountDown} disabled={isDisabled}>Start</button>
            
        </div>
    );
};

export default Countdown;