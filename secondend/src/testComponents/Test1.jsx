import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import baseApi from '../hooks/baseApi';
import useFetchSettings from '../hooks/useFetchSettings';
import { Card, Form, Row, Col } from 'react-bootstrap';

const Test1 = () => {
  const api = baseApi();
  const [settings, setSettings] = useState(null);
  const { fetchSettings, updateSettings } = useFetchSettings();

  const defaultSettings = {
    keyboard_layout: 'QWERTY',
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
    notifications: {
      email_notifications: true,
      app_notifications: true,
      reminders: {
        enabled: true,
        time: '18:00'
      }
    }
  };

  useEffect(() => {
    const storedSettings = Cookies.get('settings');
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings));
    } else {
      setSettings(defaultSettings);
    }
  }, []);

  const handleChange = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    Cookies.set('settings', JSON.stringify(newSettings), { expires: 365 });
  };

  const handleNestedChange= (key, nestedKey, value) => {
    const newSettings = { ...settings, [key]: { ...settings[key], [nestedKey]: value } };
    setSettings(newSettings);
    Cookies.set('settings', JSON.stringify(newSettings), { expires: 365 });
  };

  if (!settings) return <div>Loading...</div>;

  return (
    <div>
      test1
      <br />
      {defaultSettings.keyboard_layout}
      <br />
      {settings.keyboard_layout}
      <br />
      <button onClick={fetchSettings}>Fetch Settings</button>
      <br />
      <br />
      <button onClick={() => updateSettings(defaultSettings)}>Update Settings</button>

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

            <button variant="primary" onClick={() => updateSettings(settings)}>
                    Save Settings
                </button>
          </Form.Group>
        </Card.Body>
      </Card>
    </div>


  );
};

export default Test1;
