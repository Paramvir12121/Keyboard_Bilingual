import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts';
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
        <XAxis  dataKey="name"/>
        <YAxis dataKey="accuracy" domain={[75, 100]} />
        <Tooltip />
        <ReferenceLine y={100} stroke="green" label="100 Precent Accuracy" />
        <ReferenceLine y={95} stroke="yellow" label="95 Precent Accuracy" />
        <ReferenceLine y={90} stroke="red" label="90 Precent Accuracy" />
        <Line type="monotone" dataKey="accuracy" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AccuracyGraph;
