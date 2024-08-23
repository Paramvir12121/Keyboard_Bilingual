import React from 'react';
import AccuracyGraph from '../../components/graphs/AccuracyGraph';
import TypingSpeedGraph from '../../components/graphs/TypingSpeedGraph';

const StatsPage = () => {
    return (
        <div>
            Stats Page
            <AccuracyGraph />
            <TypingSpeedGraph />    
        </div>
    );
};

export default StatsPage;