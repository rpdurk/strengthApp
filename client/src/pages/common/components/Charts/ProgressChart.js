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
    date: "11/9",
    Volume: 2400,
  },
  {
    date: "11/10",
    Volume: 1398,
  },
  {
    date: "11/11",
    Volume: 9800,
  },
  {
    date: "11/12",
    Volume: 3908,
  },
  {
    date: "11/13",
    Volume: 4800,
  },
  {
    date: "11/14",
    Volume: 3800,
  },
  {
    date: "11/15",
    Volume: 4300,
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
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Volume"
            stroke="#ff5722"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
