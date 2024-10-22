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
          // enableCrosshair={false}
          lineWidth={2}
          pointSize={6}
          pointBorderWidth={2}
          pointLabelYOffset={-12}
          useMesh={true}
          crosshairType="y"
          tooltip={({ point }) => (
            <div
              style={{
                // make background transparent
                background: 'rgba(0,0,0,0.3)',
                color: 'var(--text-color)',
                padding: '5px',
                borderRadius: 'var(--minor-border-radius)',
                // border: '1px solid #ccc',
              }}
            >
               {point.data.yFormatted} wpm
            </div>
          )}
          colors={['var(--primary-color)']}
          theme={{
            axis: {
              domain: {},
              ticks: {
                line: {
                  stroke: 'var(--primary-color)',
                },
                text: {
                  fill: 'var(--text-dim-color)',
                },
              },
              legend: {
                text: {
                  fill: 'var(--text-dim-color)',
                },
              },
            },
            grid: {
              line: {
                stroke: 'var(--grid-line-color)',
              },
            },
            crosshair: {
              line: {
                stroke: 'var(--secondary-color)', // Custom color for crosshairs
                strokeWidth: 1,                  // Crosshair line width
                strokeDasharray: '.5 .5',          // Dashed line style for crosshairs
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
            }
            
           
            
          ]}
        />
      </div>
    </Card>
  );
};

export default TypingSpeedGraph;
