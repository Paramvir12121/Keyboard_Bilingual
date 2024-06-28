import React, { useState, useEffect } from 'react';

const Countdown = ({ seconds, buttonLogicState }) => {
    const [count, setCount] = useState(seconds);
    const [isActive, setIsActive] = useState(buttonLogicState);

    useEffect(() => {
      let timer;
      if (isActive && count > 0) {
        timer = setInterval(() => {
          setCount((prevCount) => prevCount - 1);
        }, 1000);
      } else if (count === 0) {
        setIsActive(false);
      }
    }, [count, isActive]);

    return (
        <div>
            <h1>Countdown: {count}</h1>
            {flag && <p>Countdown finished!</p>}
        </div>
    );
};

export default Countdown;