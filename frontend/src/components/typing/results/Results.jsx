import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import baseApi from '../../../hooks/baseApi';

const Results = ({ lessonId, stats }) => {
    const [error, setError] = useState(null);
    const [isMounted, setIsMounted] = useState(true);
    const api = baseApi();

    useEffect(() => {
        const sendUserLessonData = async () => {
            if (!stats) return;

            const userLessonData = {
                completed: true,
                score: stats.wpm.toFixed(0),
                completion_time: stats.elapsedTime,
                accuracy: stats.accuracy.toFixed(0),
                attempts: 1,
                errors: stats.errorCount,
                error_keys: stats.wrongKeysPressedCount
            };

            try {
                
                if (isMounted) {
                    const response = await api.post(`/lessons/user_lesson/${lessonId}`, userLessonData, { withCredentials: true });
                    console.log("I mounted message: ",response.data.message);
                    setIsMounted(false);
                    
                }
            } catch (error) {
                if (isMounted) {
                    console.error('Error creating user lesson:', error);
                    setError(error);
                    setIsMounted(false);
                }
            }
        };

        sendUserLessonData();

        return () => {
            setIsMounted(false);
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