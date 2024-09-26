import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';


const userStats = {
  
  averageSpeedLast5: 55,
  mostProblematicKey: 'E',
  accuracy: 95,
  errorRate: 5,
};

const StatsBar = ({userTypingData, userSettingsData}) => {
  const {
    
    averageSpeedLast5,
    mostProblematicKey,
    accuracy,
    errorRate,
  } = userStats;

  const speedGoal = userSettingsData.typing_speed_goal;
  console.log("Speed Goal:", userSettingsData);

  return (
    <Nav className="stats-bar">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col className="text-center">
            <h6>Speed Goal</h6>
            <p>{userTypingData.typing_speed_goal} WPM</p>
          </Col>

          <Col className="text-center">
            <h6>Avg Speed (Last 5)</h6>
            <p>{averageSpeedLast5} WPM</p>
          </Col>

          <Col className="text-center">
            <h6>Problematic Key</h6>
            <p>{mostProblematicKey}</p>
          </Col>

          <Col className="text-center">
            <h6>Accuracy</h6>
            <p>{accuracy}%</p>
          </Col>

          <Col className="text-center">
            <h6>Error Rate</h6>
            <p>{errorRate}%</p>
          </Col>
        </Row>
      </Container>
    </Nav>
  );
};

export default StatsBar;
