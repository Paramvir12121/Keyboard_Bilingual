import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import useFetchSettings from '../../hooks/useFetchSettings';
import { useNavigate } from 'react-router-dom';
import baseApi from '../../hooks/baseApi';

const keyboardLayouts = [
  { name: "QWERTY", code: "qwerty", description: "Standard layout commonly used worldwide." },
  { name: "Colemak", code: "colemak", description: "Optimized for comfort, reducing finger movement." },
  { name: "Dvorak", code: "dvorak", description: "Optimized for speed and typing efficiency." },
  { name: "Workman", code: "workman", description: "Designed to minimize finger travel distance." }
];

const SetupPage = () => {
  const navigate = useNavigate();
  const { updateSettings } = useFetchSettings(false);
  const api = baseApi();
  const [learningLayout, setLearningLayout] = useState('');
  const [currentLayout, setCurrentLayout] = useState('');
  const [speedGoal, setSpeedGoal] = useState(60); // Default speed goal

  const handleLearningLayoutSelection = (layoutCode) => {
    setLearningLayout(layoutCode);
  };

  const handleCurrentLayoutSelection = (layoutCode) => {
    setCurrentLayout(layoutCode);
  };

  const handleSpeedGoalChange = (event) => {
    setSpeedGoal(event.target.value);
  };

  const handleSubmit = async () => {
    if (!currentLayout || !learningLayout) {
      alert("Please select both the layout you want to learn and your current keyboard layout.");
      return;
    }

    const newSettings = {
      user_learning_layout: learningLayout,
      keyboard_layout: currentLayout,
      typing_speed_goal: parseInt(speedGoal, 10),
      // Include other default settings as needed
    };

    try {
      await updateSettings(newSettings);
      console.log("Settings updated successfully");

      // Fetch lessons after updating settings
      const response = await api.get('/lessons/all', { withCredentials: true });
      const lessons = response.data.lessons;

      if (lessons && lessons.length > 0) {
        // Filter lessons based on the selected learning layout
        const filteredLessons = lessons.filter(
          lesson => lesson.keyboard_type === learningLayout || lesson.keyboard_type === 'all'
        );

        if (filteredLessons.length > 0) {
          const firstLessonId = filteredLessons[0].id;
          navigate(`/lesson/${firstLessonId}`); // Use the correct path
        } else {
          alert("No lessons found for the selected keyboard layout.");
        }
      } else {
        alert("No lessons found.");
      }
    } catch (error) {
      console.error("Error updating settings or fetching lessons:", error);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Setup Your Keyboard Layouts</h1>

      {/* Step 1: Select Layout to Learn */}
      <h3>Select the Layout You Want to Learn</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
        {keyboardLayouts.map((layout) => (
          <Card
            key={layout.name}
            onClick={() => handleLearningLayoutSelection(layout.code)}
            style={{
              border: learningLayout === layout.code ? '2px solid green' : '1px solid #ddd',
              padding: '20px',
              width: '200px',
              cursor: 'pointer',
              borderRadius: '8px'
            }}
          >
            <h4>{layout.name}</h4>
            <p>{layout.description}</p>
            {learningLayout === layout.code && <p>Selected</p>}
          </Card>
        ))}
      </div>

      {/* Step 2: Select Current Layout */}
      {learningLayout && (
        <>
          <h3>Select Layout of Keyboard You Are Currently Using</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
            {keyboardLayouts.map((layout) => (
              <Card
                key={layout.name}
                onClick={() => handleCurrentLayoutSelection(layout.code)}
                style={{
                  border: currentLayout === layout.code ? '2px solid blue' : '1px solid #ddd',
                  padding: '20px',
                  width: '200px',
                  cursor: 'pointer',
                  borderRadius: '8px'
                }}
              >
                <h4>{layout.name}</h4>
                {currentLayout === layout.code && <p>Selected</p>}
              </Card>
            ))}
          </div>
        </>
      )}

      {/* Step 3: Enter Typing Speed Goal */}
      {learningLayout && currentLayout && (
        <>
          <h3>Set Your Typing Speed Goal (WPM)</h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
            <span>30</span>
            <input
              type="range"
              min="30"
              max="100"
              value={speedGoal}
              onChange={handleSpeedGoalChange}
              style={{ width: '200px' }}
            />
            <span>100</span>
          </div>
          <p>Your goal: {speedGoal} WPM</p>
        </>
      )}

      {/* Submit Button */}
      {learningLayout && currentLayout && (
        <button onClick={handleSubmit} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Start your first lesson
        </button>
      )}
    </div>
  );
};

export default SetupPage;
