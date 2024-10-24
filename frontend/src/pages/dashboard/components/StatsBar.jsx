import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const StatsBar = ({ userTypingData, userSettingsData }) => {
  const speedGoal = userSettingsData?.typing_speed_goal || 'N/A';
  const [averageSpeed, setAverageSpeed] = useState(0);
  const [averageAccuracy, setAverageAccuracy] = useState(0);
  const [mostFrequentErrorKey, setMostFrequentErrorKey] = useState('');
  const [errorRate, setErrorRate] = useState(0);
  const [averageSpeedLast5, setAverageSpeedLast5] = useState(0);

  useEffect(() => {
    if (userTypingData && userTypingData.length > 0) {
      const totalLessons = userTypingData.length;

      // Calculate average speed (WPM)
      const totalSpeed = userTypingData.reduce((sum, lesson) => sum + lesson.score, 0);
      setAverageSpeed((totalSpeed / totalLessons).toFixed(2));

      // Calculate average accuracy
      const totalAccuracy = userTypingData.reduce((sum, lesson) => sum + lesson.accuracy, 0);
      setAverageAccuracy((totalAccuracy / totalLessons).toFixed(2));

      // Calculate average speed for the last 5 lessons
      const last5Lessons = userTypingData.slice(-5);
      const totalSpeedLast5 = last5Lessons.reduce((sum, lesson) => sum + lesson.score, 0);
      setAverageSpeedLast5((totalSpeedLast5 / last5Lessons.length).toFixed(2));

      // Calculate the most frequent error key
      const errorKeyCount = {};
      userTypingData.forEach(lesson => {
        lesson.error_keys.forEach(key => {
          if (errorKeyCount[key]) {
            errorKeyCount[key] += 1;
          } else {
            errorKeyCount[key] = 1;
          }
        });
      });

      const mostFrequentKey = Object.keys(errorKeyCount).reduce((a, b) =>
        errorKeyCount[a] > errorKeyCount[b] ? a : b, '');

      setMostFrequentErrorKey(mostFrequentKey[0]);

      // Calculate error rate (Total errors across all lessons)
      const totalErrors = userTypingData.reduce((sum, lesson) => sum + lesson.error_keys.length, 0);
      const errorRateValue = ((totalErrors / totalLessons) * 100).toFixed(2);
      setErrorRate(errorRateValue);
    }
  }, [userTypingData]);

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
            <p>{averageSpeedLast5} WPM</p>
          </Col>

          <Col className="text-center">
            <h6>Problematic Key</h6>
            <p>{mostFrequentErrorKey || 'None'}</p>
          </Col>

          <Col className="text-center">
            <h6>Accuracy</h6>
            <p>{averageAccuracy}%</p>
          </Col>

          {/* <Col className="text-center">
            <h6>Error Rate</h6>
            <p>{errorRate}%</p>
          </Col> */}
        </Row>
      </Container>
    </Nav>
  );
};

export default StatsBar;
