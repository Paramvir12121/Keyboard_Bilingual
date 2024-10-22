import React, { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';
import Card from 'react-bootstrap/Card';

const AccuracyGraph = ({ userTypingData }) => {
  const [typingData, setTypingData] = useState([]);

  useEffect(() => {
    if (userTypingData && userTypingData.length > 0) {
      // Transform the data to the format Nivo expects
      const transformedData = [
        {
          id: 'Accuracy',
          data: userTypingData.map((entry, index) => ({
            x: `Lesson ${index + 1}`, // Assuming each entry represents a lesson
            y: entry.accuracy, // Accuracy data from userTypingData
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
          yScale={{ type: 'linear',  min: 70, max: 100, stacked: false, reverse: false }}
          axisLeft={{
            orient: 'left',
            legend: 'Accuracy (%)',
            legendOffset: -35,
            legendPosition: 'middle',
            // Custom tick values from 0 to 100, in increments of 5 percen
            tickValues: [70,75, 80, 85, 90, 95, 100],
            // tickValues: [0, 5, 10,75, 80, 85, 90, 95, 100],
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
          }}
          legends={[]}
          markers={[
            {
              axis: 'y',
              value: 100,
              lineStyle: { stroke: 'green', strokeWidth: 2 },
              // legend: '100% Accuracy',
              legendPosition: 'top-left',
              legendOffsetY: -10,
              legendOffsetX: -10,
              legendOrientation: 'horizontal',
            },
            {
              axis: 'y',
              value: 95,
              lineStyle: { stroke: 'yellow', strokeWidth: 2 },
              // legend: '95% Accuracy',
              legendPosition: 'top-left',
              legendOffsetY: 10,
              legendOffsetX: -10,
              legendOrientation: 'horizontal',
            },
            {
              axis: 'y',
              value: 90,
              lineStyle: { stroke: 'red', strokeWidth: 2 },
              // legend: '90% Accuracy',
              legendPosition: 'top-left',
              legendOffsetY: 30,
              legendOffsetX: -10,
              legendOrientation: 'horizontal',
            },
          ]}
          tooltip={({ point }) => (
            <div
              style={{
                background: 'white',
                padding: '5px',
                border: '1px solid #ccc',
              }}
            >
              <strong>{point.data.xFormatted}</strong>: {point.data.yFormatted}% accuracy
            </div>
          )}
        />
      </div>
    </Card>
  );
};

export default AccuracyGraph;
