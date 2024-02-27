import React, { useState, useEffect } from  'react';
import './App.css';
import * as d3 from 'd3';
import * as d3c from 'd3-collection';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';
import 'bootstrap/dist/css/bootstrap.css';
import { ButtonGroup, ButtonToggle } from 'reactstrap';

function MyButtons(props)
{
  let dataItems = props.keys.map((item) => {
    return (
      <ButtonToggle 
      key={item}
      text={item}
      onClick={() => props.clickHandler(item)}
      >
          {item}
      </ButtonToggle>
    )
    });

  return (
    <ButtonGroup>
      {dataItems}
    </ButtonGroup>
  );
}

function App() {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState();
  const [xVariable, setXVariable] = useState('Country');

  const updateSelection = (s) => {
    setXVariable(s);
  }

  useEffect(() => {
    //componentDidMount logic
    d3.csv('data/medalists.csv').then((d) => {
      setData(d);
    })
  })

  const chartData = d3c.nest()
    .key((d) => d[xVariable])
    .rollup((d) => d.length)
    .entries(data);

  return (
    <div className="container">
      <h1>Olympics!</h1>
      <div>
        <BarChart width={900} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="key" />
          <YAxis dataKey="value" />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
        <div>
          <MyButtons />
        </div>
      </div>
    </div>
  );
}

export default App;
