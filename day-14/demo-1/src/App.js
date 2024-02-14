import React, { useState } from 'react';
import { range } from 'lodash';
import { MarkSeries, XYPlot, HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from 'react-vis';
import '../node_modules/react-vis/dist/style.css';
import './App.css';

const App = () => {
  // Use useState hook for managing state
  const [numPoints, setNumPoints] = useState(10);

  // Update points: to be assigned to input as event listener
  const updatePoints = (event) => {
    setNumPoints(event.target.value);
  };

  // Compute a set of points from state
  const points = range(numPoints).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  // Return a chart
  return (
    <div className="container">
        {/* Input for updating the number of points */}
        <label htmlFor="num-points">Number of points: </label>
        <input id="num-points" type="number" onChange={updatePoints} value={numPoints} />

        {/* XYPlot component for displaying the chart */}
        <XYPlot height={300} width={300}>
            {/* MarkSeries component displaying the data points */}
            <MarkSeries data={points} />

            {/* Grid lines for better visualization */}
            <HorizontalGridLines />
            <VerticalGridLines />

            {/* X and Y axis with titles */}
            <XAxis title="X Axis" />
            <YAxis title="Y Axis" />
      </XYPlot>
    </div>
  );
};

export default App;