import React, { useState, useEffect } from 'react';

const Countdown = ({ seconds }) => {
    const [count, setCount] = useState(seconds);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        if (count === 0) {
            setFlag(true);
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    }, [count]);

    return (
        <div>
            <h1>Countdown: {count}</h1>
            {flag && <p>Countdown finished!</p>}
        </div>
    );
};

export default Countdown;