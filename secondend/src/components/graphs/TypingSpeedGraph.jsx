import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { getTypingSpeed } from '../../hooks/getUserStats';

const TypingSpeedGraph = () => {
  const [typingData, setTypingData] = useState([]);

  useEffect(() => {
    const fetchTypingData = async () => {
      const data = await getTypingSpeed();
      setTypingData(data);
      console.log("typing data: ", data);
    };

    fetchTypingData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={typingData}>
        <XAxis dataKey="name" />
        {/* name Y axis WPM */}
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
        {/* <Line type="monotone" dataKey="accuracy" stroke="#ffffff" strokeWidth={2} /> */}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TypingSpeedGraph;
