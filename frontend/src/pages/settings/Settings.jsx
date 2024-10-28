import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import Cookies from 'js-cookie';
import useFetchSettings from '../../hooks/useFetchSettings';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../Routes';


const Settings = () => {
    const { fetchSettings, updateSettings } = useFetchSettings();
    const navigate = useNavigate();
    const defaultSettings = {
        keyboard_layout: 'COLEMAK',
        
        font_size: 'medium',
        key_press_sound: true,
        show_keyboard: true,
        completion_sound: true,
        error_sound: true,
        background_music_enabled: true,
        background_music_volume: 0.5,
        background_music_track: '',
        show_success_rate: true,
        show_average_time: true,
        enable_error_heatmap: true,
        typing_speed_goal: 50,
        accuracy_goal: 90,
        custom_lessons: [],
        email_notifications: true,
        app_notifications: true,
        reminders_enabled: true,
        reminders_time: '18:00'
    };

    const [saveStatus, setSaveStatus] = useState(null);
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        const storedSettings = Cookies.get('settings');
        if (storedSettings) {
            setSettings(JSON.parse(storedSettings));
        } else {
            fetchSettings().then(fetchedSettings => {
                setSettings(fetchedSettings);
                Cookies.set('settings', JSON.stringify(fetchedSettings), { expires: 365 });
            });
        }
    }, []);

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

    const handleSubmit = () => {
        updateSettings(settings)
        //write code to navigate to ROUTES.dashboard
        navigate(ROUTES.DASHBOARD)
    }

    if (!settings) return <div>Loading...</div>;

    return (
        <Container className='my-4'>
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
                            <Form.Label column sm={3}>Learning Layout</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    as="select"
                                    value={settings.user_learning_layout}
                                    onChange={e => handleChange('user_learning_layout', e.target.value)}>
                                    <option value="colemak">Colemak</option>
                                    <option value="colemakdh">Colemak DH</option>
                                    <option value="qwerty">QWERTY</option>
                                    <option value="dvorak">Dvorak</option>
                                    <option value="workman">Workman</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Keyboard Layout</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    as="select"
                                    value={settings.keyboard_layout}
                                    onChange={e => handleChange('keyboard_layout', e.target.value)}>
                                    <option value="colemak">Colemak</option>
                                    <option value="colemakdh">Colemak DH</option>
                                    <option value="qwerty">QWERTY</option>
                                    <option value="dvorak">Dvorak</option>
                                    <option value="workman">Workman</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        
                        {/* <Form.Group as={Row} className="mb-3">
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
                        </Form.Group> */}
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Show Keyboard</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.show_keyboard}
                                    onChange={e => handleChange('show_keyboard', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                    </Card.Body>
                </Card>

                {/* Audio Feedback Settings
                <Card className="mb-4">
                    <Card.Header>Audio Feedback</Card.Header>
                    <Card.Body>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Key Press Sound</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.key_press_sound}
                                    onChange={e => handleChange('key_press_sound', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Completion Sound</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.completion_sound}
                                    onChange={e => handleChange('completion_sound', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Error Sound</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.error_sound}
                                    onChange={e => handleChange('error_sound', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Background Music Enabled</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.background_music_enabled}
                                    onChange={e => handleChange('background_music_enabled', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Background Music Volume</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.1"
                                    value={settings.background_music_volume}
                                    onChange={e => handleChange('background_music_volume', e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Background Music Track</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="text"
                                    value={settings.background_music_track}
                                    onChange={e => handleChange('background_music_track', e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                    </Card.Body>
                </Card> */}

                {/* Feedback Settings */}
                <Card className="mb-4">
                    <Card.Header>Feedback Settings</Card.Header>
                    <Card.Body>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Show Success Rate</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.show_success_rate}
                                    onChange={e => handleChange('show_success_rate', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Show Average Time</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.show_average_time}
                                    onChange={e => handleChange('show_average_time', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Enable Error Heatmap</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.enable_error_heatmap}
                                    onChange={e => handleChange('enable_error_heatmap', e.target.checked)}
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
                                    value={settings.typing_speed_goal}
                                    onChange={e => handleChange('typing_speed_goal', e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Accuracy Goal (%)</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="number"
                                    value={settings.accuracy_goal}
                                    onChange={e => handleChange('accuracy_goal', e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Custom Lessons</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    as="textarea"
                                    value={settings.custom_lessons.join('\n')}
                                    onChange={e => handleChange('custom_lessons', e.target.value.split('\n'))}
                                />
                            </Col>
                        </Form.Group>
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
                                    checked={settings.email_notifications}
                                    onChange={e => handleChange('email_notifications', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>App Notifications</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.app_notifications}
                                    onChange={e => handleChange('app_notifications', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Reminders Enabled</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.reminders_enabled}
                                    onChange={e => handleChange('reminders_enabled', e.target.checked)}
                                />
                                <Form.Label>Reminders Time</Form.Label>
                                <Form.Control
                                    type="time"
                                    value={settings.reminders_time}
                                    onChange={e => handleChange('reminders_time', e.target.value)}
                                />
                            </Col>
                            {/* below button is too large, limit its size */}
                           
                        </Form.Group>
                    </Card.Body>
                    <Button variant="primary"  onClick={handleSubmit} className=" m-3 btn-sm">
                                Save Settings
                            </Button>
                </Card>
            </Form>
        </Container>
    );
};

export default Settings;
