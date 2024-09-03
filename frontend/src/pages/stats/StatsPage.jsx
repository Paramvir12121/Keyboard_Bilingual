import { useEffect, useState } from 'react';
import AccuracyGraph from '../../components/graphs/AccuracyGraph';
import TypingSpeedGraph from '../../components/graphs/TypingSpeedGraph';
import { getUserLesonData } from '../../hooks/getUserStats';

const StatsPage = () => {
    const [userTypingData, setUserTypingData] = useState([]);

    useEffect(() => {
        const fetchTypingData = async () => {
          try {
            const data = await getUserLesonData();
            if (data && Array.isArray(data)) {
                setUserTypingData(data);
              console.log("Typing data:", data);
            } else {
              console.error("No valid typing data available.");
            }
          } catch (error) {
            console.error("Error fetching typing data:", error);
          }
        };
    
        fetchTypingData();
      }, []);

    return (
        <div>
            Stats Page
            <AccuracyGraph userTypingData={userTypingData}/>
            <TypingSpeedGraph userTypingData={userTypingData}/>    
        </div>
    );
};

export default StatsPage;