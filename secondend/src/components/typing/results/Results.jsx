import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import baseApi from '../../../hooks/baseApi';

const Results = ({ lessonId, wpm, accuracy, errorCount, totalCharacters, elapsedTime, wrongKeysPressedCount }) => {
    const [error, setError] = useState(null);

    const api = baseApi();
    console.log("wrongKeysPressedCount", wrongKeysPressedCount);
    let isMounted = true;
    useEffect(() => {
        

        const sendUserLessonData = async () => {
            const userLessonData = {
                completed: true, // Assuming the lesson is completed if results are being shown
                score: wpm, // Using WPM as the score
                completion_time: elapsedTime, // Time taken to complete the lesson
                accuracy: accuracy, // Accuracy percentage
                attempts: 1, // Assuming this is the first attempt for simplicity
                errors: errorCount, // Total errors made
                error_keys: wrongKeysPressedCount // Assuming wrongKeysPressedCount is an array of wrong keys
            };

            try {
                const response = await api.post(`/lessons/user_lesson/${lessonId}`, userLessonData, { withCredentials: true });
                if (isMounted) {
                    console.log(response.data.message);
                }
            } catch (error) {
                if (isMounted) {
                    console.error('Error creating user lesson:', error);
                    setError(error);
                }
                Console.log("error", error);
            }
        };

        sendUserLessonData();

        return () => {
            isMounted = false;
        };
    }, []); // Empty dependency array ensures this runs only once

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
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Wrong Keys Pressed</Card.Title>
                            <Card.Text>
                                {Object.entries(wrongKeysPressedCount).map(([key, count]) => (
                                    <div key={key}>
                                        {key}: {count}
                                    </div>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Results;
