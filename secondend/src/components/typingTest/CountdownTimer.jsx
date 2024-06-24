import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ seconds }) => {
    const [time, setTime] = useState(seconds);

    useEffect(() => {
        if (time <= 0) return;

        const timer = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    return (
        <div>
            <div>{time}</div>
        </div>
    );
};

export default CountdownTimer;
