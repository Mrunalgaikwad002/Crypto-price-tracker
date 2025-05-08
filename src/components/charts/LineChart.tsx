import React from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 150px;
  height: 40px;
  position: relative;
  padding: 5px 0;
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

interface LineChartProps {
  data: number[];
  color?: string;
}

export const LineChart: React.FC<LineChartProps> = ({ data, color = '#16c784' }) => {
  if (!data || data.length === 0) return null;

  // Find min and max values for scaling
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min;

  // Calculate points for the line
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((value - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  // Create the path for the line
  const pathData = `M ${points}`;

  return (
    <ChartContainer>
      <SVG viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVG>
    </ChartContainer>
  );
}; 