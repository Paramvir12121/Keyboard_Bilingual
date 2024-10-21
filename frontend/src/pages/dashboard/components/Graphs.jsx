import React, { useEffect, useState } from 'react';
import TypingSpeedGraph from '../../../components/graphs/TypingSpeedGraph';
import AccuracyGraph from '../../../components/graphs/AccuracyGraph';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getUserLesonData } from '../../../hooks/getUserStats';
import StatsBar from './StatsBar';
import useFetchSettings from '../../../hooks/useFetchSettings';

const Graphs = () => {
  const [userTypingData, setUserTypingData] = useState([]);
  const { settings: userSettingsData, error } = useFetchSettings(); // Access settings directly

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

    fetchTypingData(); // Only fetch typing data, no need to call fetchSettings again
  }, []);

  if (error) {
    return <div>Error fetching settings: {error.message}</div>;
  }

  if (!userSettingsData) {
    return <div>Loading...</div>; // Show a loading state if settings are not yet loaded
  }

  return (
    <>
      <StatsBar userTypingData={userTypingData} userSettingsData={userSettingsData}/>
      <Row>
        <Col lg={6} className="mb-3">
            <TypingSpeedGraph userTypingData={userTypingData}/>
        </Col>
        <Col lg={6} className="mb-3">
        <AccuracyGraph userTypingData={userTypingData}/>
        </Col>
      </Row>
    </>
  );
}

export default Graphs;
