import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { getTypingSpeed } from '../../hooks/getUserStats';

const AccuracyGraph = () => {
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
        <YAxis domain={[75, 100]} />
        <Tooltip />
        <Line type="monotone" dataKey="accuracy" stroke="#ffffff" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AccuracyGraph;
