import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Results = ({ wpm, accuracy, errorCount, totalCharacters, elapsedTime }) => {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2>Typing Test Results</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Words Per Minute</Card.Title>
              <Card.Text className="display-4">{wpm.toFixed(2)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Accuracy</Card.Title>
              <Card.Text className="display-4">{accuracy.toFixed(2)}%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Error Count</Card.Title>
              <Card.Text className="display-4">{errorCount}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Total Characters</Card.Title>
              <Card.Text className="display-4">{totalCharacters}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Time Elapsed</Card.Title>
              <Card.Text className="display-4">{elapsedTime} seconds</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Results;