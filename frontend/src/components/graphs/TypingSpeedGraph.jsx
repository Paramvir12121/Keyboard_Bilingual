import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';
import Cookies from 'js-cookie';
import Card from 'react-bootstrap/Card';

const TypingSpeedGraph = ({ userTypingData }) => {
  const [typingData, setTypingData] = useState([]);
  const [speedGoal, setSpeedGoal] = useState(10);
  const [maxScore, setMaxScore] = useState(50);

  useEffect(() => {
    const fetchTypingData = async () => {
      if (userTypingData && userTypingData.length > 0) {
        // Find the maximum score in the data
        let max = 0;
        userTypingData.forEach((element) => {
          if (element.score > max) {
            max = element.score;
          }
        });

        setTypingData(userTypingData);

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
      } else {
        console.error("No typing data available.");
      }
    };

    const fetchSettings = () => {
      const settings = Cookies.get('settings');
      if (settings) {
        try {
          const parseSettings = JSON.parse(settings);
          setSpeedGoal(parseSettings.typing_speed_goal || 10);
        } catch (error) {
          console.error("Error parsing settings from cookies:", error);
        }
      }
    };

    fetchTypingData();
    fetchSettings();
  }, [userTypingData]);

  return (
    <Card className="graph-card">
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={typingData}>
        <XAxis dataKey="lesson_name" /> {/* Make sure the key matches your data */}
        <YAxis domain={[0, maxScore]} />
        <Tooltip />
        <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
        <ReferenceLine y={speedGoal} stroke="red" label="Your Speed Goal" />
      </LineChart>
    </ResponsiveContainer>
    </Card>
  );
}

export default TypingSpeedGraph;
