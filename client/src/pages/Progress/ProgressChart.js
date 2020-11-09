import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    Previous: 4000,
    Current: 2400,
    amt: 2400,
  },
  {
    name: "Tuesday",
    Previous: 3000,
    Current: 1398,
    amt: 2210,
  },
  {
    name: "Wednesday",
    Previous: 2000,
    Current: 9800,
    amt: 2290,
  },
  {
    name: "Thursday",
    Previous: 2780,
    Current: 3908,
    amt: 2000,
  },
  {
    name: "Friday",
    Previous: 1890,
    Current: 4800,
    amt: 2181,
  },
  {
    name: "Saturday",
    Previous: 2390,
    Current: 3800,
    amt: 2500,
  },
  {
    name: "Sunday",
    Previous: 3490,
    Current: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    return (
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Current"
            stroke="#ff5722"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Previous" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
