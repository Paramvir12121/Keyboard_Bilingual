import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import baseApi from '../../../hooks/baseApi';

const Results = ({ lessonId, stats }) => {
    const [error, setError] = useState(null);
    const api = baseApi();

    useEffect(() => {
        let isMounted = true;

        const sendUserLessonData = async () => {
            if (!stats) return;

            const userLessonData = {
                completed: true,
                score: stats.wpm,
                completion_time: stats.elapsedTime,
                accuracy: stats.accuracy,
                attempts: 1,
                errors: stats.errorCount,
                error_keys: stats.wrongKeysPressedCount
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
            }
        };

        sendUserLessonData();

        return () => {
            isMounted = false;
        };
    }, [api, lessonId, stats]);

    if (!stats) return null;

    return (
        <Container>
            <Card>
                <Card.Body>
                    <h2>Typing Test Results</h2>
                    <div><strong>Words Per Minute:</strong> {stats.wpm.toFixed(2)}</div>
                    <div><strong>Accuracy:</strong> {stats.accuracy.toFixed(2)}%</div>
                    <div><strong>Error Count:</strong> {stats.errorCount}</div>
                    <div><strong>Total Characters:</strong> {stats.totalCharacters}</div>
                    <div><strong>Time Elapsed:</strong> {stats.elapsedTime} seconds</div>
                    <div>
                        <strong>Wrong Keys Pressed:</strong>
                        {Object.entries(stats.wrongKeysPressedCount).map(([key, count]) => (
                            <div key={key}>{key}: {count}</div>
                        ))}
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Results;