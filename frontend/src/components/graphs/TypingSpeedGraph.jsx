import React, { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';
import Cookies from 'js-cookie';
import Card from 'react-bootstrap/Card';

const TypingSpeedGraph = ({ userTypingData }) => {
  const [typingData, setTypingData] = useState([]);
  const [speedGoal, setSpeedGoal] = useState(10);
  const [maxScore, setMaxScore] = useState(50);

  useEffect(() => {
    const fetchTypingData = () => {
      if (userTypingData && Array.isArray(userTypingData) && userTypingData.length > 0) {
        const validData = userTypingData.filter(
          (entry) => entry && typeof entry.score === 'number'
        );

        const transformedData = [
          {
            id: 'Typing Score',
            data: validData.map((element, index) => ({
              x: `Reading ${index + 1}`,
              y: element.score,
            })),
          },
        ];

        // Debugging log to inspect transformed data
        console.log("Transformed Data:", transformedData);

        setTypingData(transformedData);

        // Calculate maxScore based on valid data
        const max = Math.max(50, ...validData.map((element) => element.score));
        setMaxScore(max < 50 ? 50 : max + 10);
      } else {
        console.error("No valid typing data available.");
        setTypingData([
          {
            id: 'Typing Score',
            data: [{ x: 'No Data', y: 0 }],
          },
        ]); // Set a fallback data structure
      }
    };

    const fetchSettings = () => {
      const settings = Cookies.get('settings');
      if (settings) {
        try {
          const parseSettings = JSON.parse(settings);
          setSpeedGoal(parseSettings.typing_speed_goal || 10);
        } catch (error) {
          console.error("Invalid JSON format in settings cookie:", error);
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
          margin={{ top: 5, right: 5, bottom: 5, left: 45 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 0, max: maxScore, stacked: false, reverse: false }}
          axisBottom={null}
          axisLeft={{
            orient: 'left',
            legend: 'Score',
            legendOffset: -30,
            legendPosition: 'middle',
            tickValues: Array.from({ length: Math.ceil(maxScore / 25) + 1 }, (_, i) => i * 25),
            tickLabelComponent: (props) => (
              <text {...props} className="graph-axis-labels" />
            ),
          }}
          axisTop={null}
          axisRight={null}
          enableGridX={false}
          enableGridY={false}
          enablePoints={true}
          lineWidth={2}
          pointSize={6}
          pointBorderWidth={2}
          pointLabelYOffset={-12}
          useMesh={true}
          crosshairType="y"
          tooltip={({ point }) => (
            <div
              style={{
                background: 'rgba(0,0,0,0.3)',
                color: 'var(--text-color)',
                padding: '5px',
                borderRadius: 'var(--minor-border-radius)',
              }}
            >
              {point.data.yFormatted} wpm
            </div>
          )}
          colors={['var(--primary-color)']}
          theme={{
            axis: {
              ticks: {
                line: { stroke: 'var(--primary-color)' },
                text: { fill: 'var(--text-dim-color)' },
              },
              legend: {
                text: { fill: 'var(--text-dim-color)' },
              },
            },
            grid: {
              line: { stroke: 'var(--grid-line-color)' },
            },
            crosshair: {
              line: {
                stroke: 'var(--secondary-color)',
                strokeWidth: 1,
                strokeDasharray: '.5 .5',
              },
            },
          }}
          legends={[]}
          markers={[
            {
              axis: 'y',
              value: speedGoal,
              lineStyle: { stroke: 'var(--secondary-color)', strokeWidth: 2 },
              legend: `Speed Goal (${speedGoal})`,
              legendPosition: 'top-left',
              legendOffsetY: -10,
              legendOffsetX: -10,
              legendOrientation: 'horizontal',
            },
          ]}
        />
      </div>
    </Card>
  );
};

export default TypingSpeedGraph;
