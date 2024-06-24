import React, { useState, useEffect } from 'react';

const CountdownTimer = (props) => {
    const [time, setTime] = useState(props.seconds);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
            if (time === 0) {  
                clearInterval(timer);
            }
        }, 1000);
            // stop the timer when it reaches 0
        
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <div>Countdown: {time} seconds</div>
        </div>
    );
};

export default CountdownTimer;
    