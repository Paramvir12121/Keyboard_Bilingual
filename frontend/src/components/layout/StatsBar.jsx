import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

// Example props structure:
const userStats = {
  speedGoal: 60,
  averageSpeedLast5: 55,
  mostProblematicKey: 'E',
  accuracy: 95,
  errorRate: 5,
};

const StatsBar = () => {
  const {
    speedGoal,
    averageSpeedLast5,
    mostProblematicKey,
    accuracy,
    errorRate,
  } = userStats;

  return (
    <Nav className="p-3 bg-light border rounded shadow-sm">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          {/* Speed Goal */}
          <Col className="text-center">
            <h6 className="mb-0">Speed Goal</h6>
            <p className="text-muted mb-0">{speedGoal} WPM</p>
          </Col>

          {/* Average Speed (Last 5 Lessons) */}
          <Col className="text-center">
            <h6 className="mb-0">Avg Speed (Last 5)</h6>
            <p className="text-muted mb-0">{averageSpeedLast5} WPM</p>
          </Col>

          {/* Most Problematic Key */}
          <Col className="text-center">
            <h6 className="mb-0">Problematic Key</h6>
            <p className="text-muted mb-0">{mostProblematicKey}</p>
          </Col>

          {/* Accuracy */}
          <Col className="text-center">
            <h6 className="mb-0">Accuracy</h6>
            <p className="text-muted mb-0">{accuracy}%</p>
          </Col>

          {/* Error Rate */}
          <Col className="text-center">
            <h6 className="mb-0">Error Rate</h6>
            <p className="text-muted mb-0">{errorRate}%</p>
          </Col>
        </Row>
      </Container>
    </Nav>
  );
};

export default StatsBar;
