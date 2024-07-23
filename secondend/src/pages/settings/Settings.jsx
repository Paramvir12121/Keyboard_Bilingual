import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import axios from 'axios';

const SettingsPage = () => {
    const [settings, setSettings] = useState({
        keyboard_layout: 'colemak',
        font_size: 'medium',
        audio_feedback: {
            key_press_sound: true,
            completion_sound: true,
            error_sound: true,
            background_music: {
                enabled: true,
                volume: 0.5,
                track: ''
            }
        },
        feedback_settings: {
            show_success_rate: true,
            show_average_time: true,
            enable_error_heatmap: true
        },
        advanced_learning_options: {
            typing_speed_goal: 50,
            accuracy_goal: 90,
            custom_lessons: []
        },
        account_management: {
            change_password: '',
            manage_subscriptions: '',
            delete_account: ''
        },
        notifications: {
            email_notifications: true,
            app_notifications: true,
            reminders: {
                enabled: true,
                time: '18:00'
            }
        }
    });

    const [saveStatus, setSaveStatus] = useState(null);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/settings');
            setSettings(response.data);
        } catch (error) {
            console.error('Error fetching settings:', error);
            setSaveStatus({ type: 'danger', message: 'Error fetching settings. Please try again.' });
        }
    };

    const handleChange = (section, key, value) => {
        setSettings(prevSettings => ({
            ...prevSettings,
            [section]: {
                ...prevSettings[section],
                [key]: value
            }
        }));
    };

    const handleNestedChange = (section, key, nestedKey, value) => {
        setSettings(prevSettings => ({
            ...prevSettings,
            [section]: {
                ...prevSettings[section],
                [key]: {
                    ...prevSettings[section][key],
                    [nestedKey]: value
                }
            }
        }));
    };

    const saveSettings = async () => {
        try {
            await axios.post('http://localhost:5000/api/settings', settings);
            setSaveStatus({ type: 'success', message: 'Settings saved successfully!' });
        } catch (error) {
            console.error('Error saving settings:', error);
            setSaveStatus({ type: 'danger', message: 'Error saving settings. Please try again.' });
        }
    };

    return (
        <Container>
            <h1 className="my-4">Settings</h1>
            {saveStatus && (
                <Alert variant={saveStatus.type} onClose={() => setSaveStatus(null)} dismissible>
                    {saveStatus.message}
                </Alert>
            )}
            <Form>
                <Card className="mb-4">
                    <Card.Header>General Settings</Card.Header>
                    <Card.Body>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Keyboard Layout</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    as="select"
                                    value={settings.keyboard_layout}
                                    onChange={e => handleChange('keyboard_layout', 'keyboard_layout', e.target.value)}
                                >
                                    <option value="colemak">Colemak</option>
                                    <option value="qwerty">QWERTY</option>
                                    <option value="dvorak">Dvorak</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Font Size</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    as="select"
                                    value={settings.font_size}
                                    onChange={e => handleChange('font_size', 'font_size', e.target.value)}
                                >
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Card.Body>
                </Card>

                {/* Audio Feedback Settings */}
                <Card className="mb-4">
                    <Card.Header>Audio Feedback</Card.Header>
                    <Card.Body>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Key Press Sound</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.audio_feedback.key_press_sound}
                                    onChange={e => handleNestedChange('audio_feedback', 'key_press_sound', 'enabled', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        {/* Add similar Form.Group components for other audio feedback settings */}
                    </Card.Body>
                </Card>

                {/* Add more Card components for other setting sections */}

                <Button variant="primary" onClick={saveSettings}>
                    Save Settings
                </Button>
            </Form>
        </Container>
    );
};

export default SettingsPage;