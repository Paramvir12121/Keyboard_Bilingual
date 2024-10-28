import React, { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';
import Card from 'react-bootstrap/Card';

const AccuracyGraph = ({ userTypingData }) => {
  const [typingData, setTypingData] = useState([]);

  useEffect(() => {
    if (userTypingData && Array.isArray(userTypingData)) {
      const validData = userTypingData.filter((entry) => entry && typeof entry.accuracy === 'number');
      const transformedData = [
        {
          id: 'Accuracy',
          data: validData.map((entry, index) => ({
            x: `Lesson ${index + 1}`,
            y: entry.accuracy,
          })),
        },
      ];
      setTypingData(transformedData);
    }
  }, [userTypingData]);

  return (
    <Card className="graph-card">
      <div style={{ height: 300 }}>
        <ResponsiveLine
          data={typingData}
          margin={{ top: 5, right: 5, bottom: 5, left: 45 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 70, max: 100, stacked: false, reverse: false }}
          axisLeft={{
            orient: 'left',
            legend: 'Accuracy (%)',
            legendOffset: -35,
            legendPosition: 'middle',
            tickValues: [70, 75, 80, 85, 90, 95, 100],
            tickLabelComponent: (props) => (
              <text {...props} className="graph-axis-labels" />
            ),
          }}
          axisBottom={null}
          axisTop={null}
          axisRight={null}
          enableGridX={false}
          enableGridY={true}
          enablePoints={true}
          pointSize={6}
          pointBorderWidth={2}
          pointLabelYOffset={-12}
          useMesh={true}
          lineWidth={2}
          colors={['var(--primary-color)']}
          crosshairType="y" // This ensures only the horizontal crosshair appears
          theme={{
            axis: {
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
              value: 100,
              lineStyle: { stroke: 'green', strokeWidth: 2 },
              legendPosition: 'top-left',
              legendOffsetY: -10,
              legendOffsetX: -10,
              legendOrientation: 'horizontal',
            },
            {
              axis: 'y',
              value: 95,
              lineStyle: { stroke: 'yellow', strokeWidth: 2 },
              legendPosition: 'top-left',
              legendOffsetY: 10,
              legendOffsetX: -10,
              legendOrientation: 'horizontal',
            },
            {
              axis: 'y',
              value: 90,
              lineStyle: { stroke: 'red', strokeWidth: 2 },
              legendPosition: 'top-left',
              legendOffsetY: 30,
              legendOffsetX: -10,
              legendOrientation: 'horizontal',
            },
          ]}
          tooltip={({ point }) => (
            <div
              style={{
                background: 'rgba(0,0,0,0.3)',
                color: 'var(--text-color)',
                padding: '5px',
                borderRadius: 'var(--minor-border-radius)',
              }}
            >
              {point.data.yFormatted}% accuracy
            </div>
          )}
        />
      </div>
    </Card>
  );
};

export default AccuracyGraph;
