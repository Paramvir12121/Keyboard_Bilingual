import React from 'react';
import TypingSpeedGraph from '../../components/graphs/TypingSpeedGraph';
import AccuracyGraph from '../../components/graphs/AccuracyGraph';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Graphs = () => {
  return (
    
      <Row>
        <Col lg={6} className="mb-3">
          <TypingSpeedGraph />
        </Col>
        <Col lg={6} className="mb-3">
          <AccuracyGraph />
        </Col>
      </Row>
    
  );
}

export default Graphs;
