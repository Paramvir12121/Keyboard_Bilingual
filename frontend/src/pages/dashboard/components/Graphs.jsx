import React from 'react';
import TypingSpeedGraph from '../../../components/graphs/TypingSpeedGraph';
import AccuracyGraph from '../../../components/graphs/AccuracyGraph';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StatsBar from './StatsBar';
import FirstLoginMessage from '../../../components/firstLogin/FirstLoginMessage';

const Graphs = ({ userTypingData, userSettingsData }) => {
  if (!userTypingData || !userSettingsData) {
    return null;
  }

  if (!userTypingData.length) {
    return <FirstLoginMessage />;
  }

  return (
    <>
      <StatsBar userTypingData={userTypingData} userSettingsData={userSettingsData} />
      <Row>
        <Col lg={6} className="mb-3">
          <TypingSpeedGraph userTypingData={userTypingData} />
        </Col>
        <Col lg={6} className="mb-3">
          <AccuracyGraph userTypingData={userTypingData} />
        </Col>
      </Row>
    </>
  );
};

export default Graphs;
