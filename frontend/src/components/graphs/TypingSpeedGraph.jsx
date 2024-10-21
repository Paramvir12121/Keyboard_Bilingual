import React, { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';
import Cookies from 'js-cookie';
import Card from 'react-bootstrap/Card';

const TypingSpeedGraph = ({ userTypingData }) => {
  const [typingData, setTypingData] = useState([]);
  const [speedGoal, setSpeedGoal] = useState(10);
  const [maxScore, setMaxScore] = useState(50);

  useEffect(() => {
    const fetchTypingData = async () => {
      if (userTypingData && userTypingData.length > 0) {
        // Find the maximum score in the data
        let max = 0;
        userTypingData.forEach((element) => {
          if (element.score > max) {
            max = element.score;
          }
        });

        // Transform userTypingData to match Nivo's expected format
        const transformedData = [
          {
            id: 'Typing Score',
            data: userTypingData.map((element, index) => ({
              x: `Reading ${index + 1}`,
              y: element.score,
            })),
          },
        ];

        setTypingData(transformedData);

        // Set maxScore based on the maximum score found
        if (max < 50) {
          setMaxScore(50);
        } else if (max < 100) {
          setMaxScore(100);
        } else if (max < 150) {
          setMaxScore(150);
        } else {
          setMaxScore(max + 10);
        }
      } else {
        console.error("No typing data available.");
      }
    };

    const fetchSettings = () => {
      const settings = Cookies.get('settings');
      if (settings) {
        try {
          const parseSettings = JSON.parse(settings);
          setSpeedGoal(parseSettings.typing_speed_goal || 10);
        } catch (error) {
          console.error("Error parsing settings from cookies:", error);
        }
      }
    };

    fetchTypingData();
    fetchSettings();
  }, [userTypingData]);

  return (
    <Card className="graph-card">
      <div style={{ height: 300 }}>
        <ResponsiveLine
          data={typingData}
          margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 0, max: maxScore, stacked: false, reverse: false }}
          axisBottom={{
            orient: 'bottom',
            legend: 'Reading',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            orient: 'left',
            legend: 'Score',
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          axisTop={null}
          axisRight={null}
          enableGridX={false}
          enableGridY={false}
          // colors={{ scheme: 'category10' }}
          lineWidth={2}
          pointSize={6}
          pointBorderWidth={2}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[]}
          markers={[
            {
              axis: 'y',
              value: speedGoal,
              lineStyle: { stroke: 'red', strokeWidth: 2 },
              legend: 'Your Speed Goal',
              legendPosition: 'top-left',
            },
          ]}
        />
      </div>
    </Card>
  );
};

export default TypingSpeedGraph;
