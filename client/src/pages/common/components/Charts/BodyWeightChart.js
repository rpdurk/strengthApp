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
    name: "Jan",
    Lbs: 150,
  },
  {
    name: "Feb",
    Lbs: 170,
  },
  {
    name: "Mar",
    Lbs: 162,
  },
  {
    name: "Apr",
    Lbs: 174,
  },
  {
    name: "May",
    Lbs: 180,
  },
  {
    name: "Jun",
    Lbs: 186,
  },
  {
    name: "Jul",
    Lbs: 161,
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
            dataKey="Lbs"
            stroke="#ff5722"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
