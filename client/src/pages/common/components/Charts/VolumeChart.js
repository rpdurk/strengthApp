import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const VolumeChart = (props) => {
  return (
    <ResponsiveContainer>
      <LineChart
        width={500}
        height={300}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='Current'
          stroke='#ff5722'
          activeDot={{ r: 8 }}
        />
        <Line type='monotone' dataKey='Previous' stroke='#82ca9d' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VolumeChart;
