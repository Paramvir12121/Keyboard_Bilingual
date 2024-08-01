import React,{useState, useEffect} from 'react'
import { LineChart, Line } from 'recharts';
import {getTypingSpeed} from '../../hooks/getUserStats';

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
    <>
    <LineChart width={300} height={100} data={typingData}>
        <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="accuracy" stroke="#ffffff" strokeWidth={2} />
      </LineChart>
      <button onClick={() => getTypingSpeed()}>Get Typing Speed</button>
    </>
  )
}

export default TypingSpeedGraph