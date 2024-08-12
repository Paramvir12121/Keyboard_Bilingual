import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';
import { getTypingSpeed } from '../../hooks/getUserStats';
import Cookies from 'js-cookie';

const TypingSpeedGraph = () => {
  const [typingData, setTypingData] = useState([]);
  const [speedGoal, setSpeedGoal] = useState(10);
  const [maxScore, setMaxScore] = useState(50); // Default to 50 to prevent domain errors

  useEffect(() => {
    const fetchTypingData = async () => {
      const data = await getTypingSpeed();
      
      // Find the maximum score in the data
      let max = 0;
      data.forEach((element) => {
        if (element.score > max) {
          max = element.score;
        }
      });

      // Set maxScore based on the maximum score found
      if (max < 50) {
        setMaxScore(50);
      } else if (max < 100) {
        setMaxScore(100);
      } else if (max < 150) {
        setMaxScore(150);
      } else {
        setMaxScore(max + 10);
      }

      setTypingData(data);
    };

    const fetchSettings = () => {
      const settings = Cookies.get('settings');
      if (settings) {
        try {
          const parseSettings = JSON.parse(settings);
          setSpeedGoal(parseSettings.typing_speed_goal); // Set a default if typing_speed_goal is not defined
        } catch (error) {
          console.error("Error parsing settings from cookies:", error);
        }
      }
    };
    
    fetchTypingData();
    fetchSettings();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={typingData}>
        <XAxis dataKey="name" />
        <YAxis domain={[0, maxScore]} />
        <Tooltip />
        <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
        <ReferenceLine y={speedGoal} stroke="red" label="Your Speed Goal" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TypingSpeedGraph;
