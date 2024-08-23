import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import baseApi from '../../../hooks/baseApi';
import ResultNavbar from './ResultNavbar';


const Results = ({ lessonId, wpm, accuracy, errorCount, totalCharacters, elapsedTime, wrongKeysPressedCount }) => {
    const [error, setError] = useState(null);

    const api = baseApi();
    useEffect(() => {
        let isMounted = true;

        const sendUserLessonData = async () => {
            const userLessonData = {
                completed: true,
                score: wpm,
                completion_time: elapsedTime,
                accuracy: accuracy,
                attempts: 1,
                errors: errorCount,
                error_keys: wrongKeysPressedCount
            };
            console.log('WPM:', wpm, 'Accuracy:', accuracy);


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
            }
        };

        sendUserLessonData();

        return () => {
            isMounted = false;
        };
    }, [api, lessonId, wpm, accuracy, errorCount, totalCharacters, elapsedTime, wrongKeysPressedCount]);

    return (
        <Container>
            <Card>
                <Card.Body>
                    <h2>Typing Test Results</h2>
                    <div>
                        <strong>Words Per Minute:</strong> {wpm.toFixed(2)}
                    </div>
                    <div>
                        <strong>Accuracy:</strong> {accuracy.toFixed(2)}%
                    </div>
                    <div>
                        <strong>Error Count:</strong> {errorCount}
                    </div>
                    <div>
                        <strong>Total Characters:</strong> {totalCharacters}
                    </div>
                    <div>
                        <strong>Time Elapsed:</strong> {elapsedTime} seconds
                    </div>
                    <div>
                        <strong>Wrong Keys Pressed:</strong>
                            {Object.entries(wrongKeysPressedCount).map(([key, count]) => (
                                <div key={key}>{key}: {count}</div>
                            ))}
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Results;
