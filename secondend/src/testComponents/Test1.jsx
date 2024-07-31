import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import useFetchSettings from '../hooks/useFetchSettings';
import { Card, Form, Row, Col } from 'react-bootstrap';

const Test1 = () => {
  const [settings, setSettings] = useState(null);
  const { fetchSettings, updateSettings } = useFetchSettings();

  useEffect(() => {
    const fetchInitialSettings = async () => {
      const fetchedSettings = await fetchSettings();
      setSettings(fetchedSettings || {});
      console.log('Settings:', fetchedSettings);
    };

    if (!settings) {
      fetchInitialSettings();
    }
  }, [settings, fetchSettings]);

  const handleChange = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    Cookies.set('settings', JSON.stringify(newSettings), { expires: 365 });
  };

  if (!settings) return <div>Loading...</div>;

  return (
    <div>
      test1
      <br />
      <br />
      {settings.keyboard_layout}
      <br />
      <button onClick={fetchSettings}>Fetch Settings</button>
      <br />
      <br />
      <button onClick={() => updateSettings(settings)}>Update Settings</button>

      <Card className="mb-4">
        <Card.Header>General Settings</Card.Header>
        <Card.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>Keyboard Layout</Form.Label>
            <Col sm={9}>
              <Form.Control
                as="select"
                value={settings.keyboard_layout || 'qwerty'}
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
                value={settings.font_size || 'medium'}
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
                                    checked={settings.key_press_sound ?? true}
                                    onChange={e => handleChange('key_press_sound', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Completion Sound</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.completion_sound ?? true}
                                    onChange={e => handleChange('completion_sound', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Error Sound</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.error_sound ?? true}
                                    onChange={e => handleChange('error_sound', e.target.checked)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>Background Music</Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="switch"
                                    checked={settings.background_music?.enabled ?? false}
                                    onChange={e => handleChange('background_music', { ...settings.background_music, enabled: e.target.checked })}
                                />
                                <Form.Label>Volume</Form.Label>
                                <Form.Control
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.1"
                                    value={settings.background_music?.volume ?? 0.5}
                                    onChange={e => handleChange('background_music', { ...settings.background_music, volume: e.target.value })}
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
