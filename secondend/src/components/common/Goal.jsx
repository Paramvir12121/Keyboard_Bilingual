import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Goal = () => {
    const [goal, setGoal] = useState(null);

    useEffect(() => {
        const settings = Cookies.get('settings');
        if (settings) {
            const parsedSettings = JSON.parse(settings);
            setGoal(parsedSettings.typing_speed_goal);
        }
    }, []);

    if (goal === null) return <div>Loading...</div>;

    return (
        <div>
            <h2>Your Goal is {goal}</h2>
        </div>
    );
}

export default Goal;
