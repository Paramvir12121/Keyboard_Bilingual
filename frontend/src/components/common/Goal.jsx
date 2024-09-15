import React, { useState, useEffect } from 'react';
import { Card, Spinner, Container, Row, Col } from 'react-bootstrap';
import Cookies from 'js-cookie';

const Goal = () => {
  const [goal, setGoal] = useState(null);

  useEffect(() => {
    const settings = Cookies.get('settings');
    if (settings) {
      const parsedSettings = JSON.parse(settings);
      setGoal(parsedSettings.typing_speed_goal);
    }
  }, []);

  if (goal === null) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <Spinner animation="border" role="status" variant="primary" size="sm">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="text-center shadow-sm border-0" style={{ backgroundColor: '#f0f4f8' }}>
            <Card.Body>
              <Card.Title className="mb-3" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#333' }}>
                Your Typing Speed Goal
              </Card.Title>
              <Card.Text className="h4" style={{ color: '#007bff', fontSize: '2rem', fontWeight: '700' }}>
                {goal} WPM
              </Card.Text>
              <hr />
              <Card.Text style={{ color: '#6c757d', fontSize: '0.9rem' }}>
                Keep practicing to reach your goal!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Goal;
