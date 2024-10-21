import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

// Static user stats (as an example)
const userStats = {
  averageSpeedLast5: 55,
  mostProblematicKey: 'E',
  accuracy: 95,
  errorRate: 5,
};

const StatsBar = ({ userTypingData, userSettingsData }) => {
  // Use optional chaining to safely access properties
  const speedGoal = userSettingsData?.typing_speed_goal || 'N/A';

  // If userTypingData is an array, extract the necessary info (e.g., latest typing speed)
  const latestTypingSpeed = userTypingData?.[0]?.typing_speed_goal || 'N/A'; 

  return (
    <Nav className="stats-bar">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col className="text-center">
            <h6>Speed Goal</h6>
            <p>{speedGoal} WPM</p>
          </Col>

          <Col className="text-center">
            <h6>Avg Speed (Last 5)</h6>
            <p>{userStats.averageSpeedLast5} WPM</p>
          </Col>

          <Col className="text-center">
            <h6>Problematic Key</h6>
            <p>{userStats.mostProblematicKey}</p>
          </Col>

          <Col className="text-center">
            <h6>Accuracy</h6>
            <p>{userStats.accuracy}%</p>
          </Col>

          <Col className="text-center">
            <h6>Error Rate</h6>
            <p>{userStats.errorRate}%</p>
          </Col>
        </Row>
      </Container>
    </Nav>
  );
};

export default StatsBar;
