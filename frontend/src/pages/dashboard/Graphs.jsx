import React, { useEffect, useState } from 'react';
import TypingSpeedGraph from '../../components/graphs/TypingSpeedGraph';
import AccuracyGraph from '../../components/graphs/AccuracyGraph';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getUserLesonData } from '../../hooks/getUserStats';

const Graphs = () => {
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
    
      <Row>
        <Col lg={6} className="mb-3">
            <TypingSpeedGraph userTypingData={userTypingData}/>
        </Col>
        <Col lg={6} className="mb-3">
        <AccuracyGraph userTypingData={userTypingData}/>
        </Col>
      </Row>
    
  );
}

export default Graphs;
