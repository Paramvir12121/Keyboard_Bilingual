import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import baseApi from '../../hooks/baseApi';
import Cookies from 'js-cookie';

const Settings = () => {
    const api = baseApi();
    const defaultSettings = {
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
    };

    const [settings, setSettings] = useState(() => {
        const savedSettings = Cookies.get('settings');
        return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
    });

    const [saveStatus, setSaveStatus] = useState(null);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const response = await api.get('/settings');
            setSettings(response.data);
            Cookies.set('settings', JSON.stringify(response.data), { expires: 365 });
        } catch (error) {
            console.error('Error fetching settings:', error);
            setSaveStatus({ type: 'danger', message: 'Error fetching settings. Please try again.' });
        }
    };

    const handleChange = (key, value) => {
        setSettings(prevSettings => {
            const updatedSettings = {
                ...prevSettings,
                [key]: value
            };
            Cookies.set('settings', JSON.stringify(updatedSettings), { expires: 365 });
            return updatedSettings;
        });
    };

    const handleNestedChange = (section, key, value) => {
        setSettings(prevSettings => {
            const updatedSettings = {
                ...prevSettings,
                [section]: {
                    ...prevSettings[section],
                    [key]: value
                }
            };
            Cookies.set('settings', JSON.stringify(updatedSettings), { expires: 365 });
            return updatedSettings;
        });
    };

    const saveSettings = async () => {
        try {
            await api.post('/settings', settings);
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
                {/* General Settings */}
                <Card className="mb-4">
                    <Card.Header>General Settings</Card.Header>
                    <Card.Body>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Keyboard Layout</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    as="select"
                                    value={settings.keyboard_layout}
                                    onChange={e => handleChange('keyboard_layout', e.target.value)}
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
                                    onChange={e => handleChange('font_size', e.target.value)}
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
                                    onChange={e => handleNestedChange('audio_feedback', 'key_press_sound', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Completion Sound</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.audio_feedback.completion_sound}
                                    onChange={e => handleNestedChange('audio_feedback', 'completion_sound', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Error Sound</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.audio_feedback.error_sound}
                                    onChange={e => handleNestedChange('audio_feedback', 'error_sound', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Background Music</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.audio_feedback.background_music.enabled}
                                    onChange={e => handleNestedChange('audio_feedback', 'background_music', 'enabled', e.target.checked)}
                                />
                                <Form.Label>Volume</Form.Label>
                                <Form.Control
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.1"
                                    value={settings.audio_feedback.background_music.volume}
                                    onChange={e => handleNestedChange('audio_feedback', 'background_music', 'volume', e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                    </Card.Body>
                </Card>

                {/* Feedback Settings */}
                <Card className="mb-4">
                    <Card.Header>Feedback Settings</Card.Header>
                    <Card.Body>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Show Success Rate</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.feedback_settings.show_success_rate}
                                    onChange={e => handleNestedChange('feedback_settings', 'show_success_rate', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Show Average Time</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.feedback_settings.show_average_time}
                                    onChange={e => handleNestedChange('feedback_settings', 'show_average_time', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Enable Error Heatmap</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.feedback_settings.enable_error_heatmap}
                                    onChange={e => handleNestedChange('feedback_settings', 'enable_error_heatmap', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                    </Card.Body>
                </Card>

                {/* Advanced Learning Options */}
                <Card className="mb-4">
                    <Card.Header>Advanced Learning Options</Card.Header>
                    <Card.Body>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Typing Speed Goal (WPM)</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="number"
                                    value={settings.advanced_learning_options.typing_speed_goal}
                                    onChange={e => handleNestedChange('advanced_learning_options', 'typing_speed_goal', e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Accuracy Goal (%)</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="number"
                                    value={settings.advanced_learning_options.accuracy_goal}
                                    onChange={e => handleNestedChange('advanced_learning_options', 'accuracy_goal', e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                    </Card.Body>
                </Card>

                {/* Account Management */}
                <Card className="mb-4">
                    <Card.Header>Account Management</Card.Header>
                    <Card.Body>
                        <Col sm={9}>
                            Change pasword Here
                        </Col>

                        {/* <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Change Password</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="password"
                                    value={settings.account_management.change_password}
                                    onChange={e => handleNestedChange('account_management', 'change_password', e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Manage Subscriptions</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="text"
                                    value={settings.account_management.manage_subscriptions}
                                    onChange={e => handleNestedChange('account_management', 'manage_subscriptions', e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Delete Account</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="text"
                                    value={settings.account_management.delete_account}
                                    onChange={e => handleNestedChange('account_management', 'delete_account', e.target.value)}
                                />
                            </Col>
                        </Form.Group> */}
                    </Card.Body>
                </Card>

                {/* Notifications */}
                <Card className="mb-4">
                    <Card.Header>Notifications</Card.Header>
                    <Card.Body>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Email Notifications</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.notifications.email_notifications}
                                    onChange={e => handleNestedChange('notifications', 'email_notifications', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>App Notifications</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.notifications.app_notifications}
                                    onChange={e => handleNestedChange('notifications', 'app_notifications', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Reminders</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.notifications.reminders.enabled}
                                    onChange={e => handleNestedChange('notifications', 'reminders', 'enabled', e.target.checked)}
                                />
                                <Form.Label>Time</Form.Label>
                                <Form.Control
                                    type="time"
                                    value={settings.notifications.reminders.time}
                                    onChange={e => handleNestedChange('notifications', 'reminders', 'time', e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                    </Card.Body>
                </Card>

                <Button variant="primary" onClick={saveSettings}>
                    Save Settings
                </Button>
            </Form>
        </Container>
    );
};

export default Settings;
