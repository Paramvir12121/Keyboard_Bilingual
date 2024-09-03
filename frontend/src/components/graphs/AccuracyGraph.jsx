import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts';
import { getUserLesonData } from '../../hooks/getUserStats';

const AccuracyGraph = ({userTypingData}) => {
  const [typingData, setTypingData] = useState([]);

  // useEffect(() => {
  //   const fetchTypingData = async () => {
  //     try {
  //       const data = userTypingData;
  //       if (data && Array.isArray(data)) {
  //         setTypingData(data);
  //         console.log("Typing data:", data);
  //       } else {
  //         console.error("No valid typing data available.");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching typing data:", error);
  //     }
  //   };

  //   fetchTypingData();
  // }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={userTypingData}>
        <XAxis dataKey="name" />
        <YAxis dataKey="accuracy" domain={[75, 100]} />
        <Tooltip />
        <ReferenceLine y={100} stroke="green" label="100 Percent Accuracy" />
        <ReferenceLine y={95} stroke="yellow" label="95 Percent Accuracy" />
        <ReferenceLine y={90} stroke="red" label="90 Percent Accuracy" />
        <Line type="monotone" dataKey="accuracy" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AccuracyGraph;
