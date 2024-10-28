import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const keyboardLayouts = [
  {
    name: "QWERTY",
    description: "Standard layout commonly used worldwide.",
  },
  {
    name: "Colemak",
    description: "Optimized for comfort, reducing finger movement.",
  },
  {
    name: "Dvorak",
    description: "Optimized for speed and typing efficiency.",
  },
  {
    name: "Workman",
    description: "Designed to minimize finger travel distance.",
  }
];

const SetupPage = () => {
  const [learningLayout, setLearningLayout] = useState('');
  const [currentLayout, setCurrentLayout] = useState('');

  const handleLearningLayoutSelection = (layout) => {
    setLearningLayout(layout);
  };

  const handleCurrentLayoutSelection = (layout) => {
    setCurrentLayout(layout);
  };

  const handleSubmit = () => {
    if (!currentLayout || !learningLayout) {
      alert("Please select both the layout you want to learn and your current keyboard layout.");
      return;
    }
    console.log("Learning Layout:", learningLayout);
    console.log("Current Layout:", currentLayout);
    // Proceed to the next page or save the selection as needed
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Setup Your Keyboard Layouts</h2>

      {/* Step 1: Select Layout to Learn */}
      <h3>Select the Layout You Want to Learn</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
        {keyboardLayouts.map((layout) => (
          <Card
            key={layout.name}
            onClick={() => handleLearningLayoutSelection(layout.name)}
            style={{
              border: learningLayout === layout.name ? '2px solid green' : '1px solid #ddd',
              padding: '20px',
              width: '200px',
              cursor: 'pointer',
              borderRadius: '8px'
            }}
          >
            <h4>{layout.name}</h4>
            <p>{layout.description}</p>
            {learningLayout === layout.name && <p>Selected</p>}
          </Card>
        ))}
      </div>

      {/* Step 2: Select Current Layout, displayed below */}
      {learningLayout && (
        <>
          <h3>Select Your Current Keyboard Layout</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
            {keyboardLayouts.map((layout) => (
              <Card
                key={layout.name}
                onClick={() => handleCurrentLayoutSelection(layout.name)}
                style={{
                  border: currentLayout === layout.name ? '2px solid blue' : '1px solid #ddd',
                  padding: '20px',
                  width: '200px',
                  cursor: 'pointer',
                  borderRadius: '8px'
                }}
              >
                <h4>{layout.name}</h4>
                {currentLayout === layout.name && <p>Selected</p>}
              </Card>
            ))}
          </div>
        </>
      )}

      {/* Submit Button */}
      {learningLayout && currentLayout && (
        <button onClick={handleSubmit} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Save and Continue
        </button>
      )}
    </div>
  );
};

export default SetupPage;
