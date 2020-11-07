import React, { PureComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
// import theme from "../../../utils/Theme";

const data = [
  {
    name: "Monday",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tuesday",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wednesday",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thursday",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Friday",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Saturday",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sunday",
    uv: 3490,
    pv: 4300,
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
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
// import React from "react";
// import { useTheme } from "@material-ui/core/styles";
// import {
//   BarChart,
//   Bar,
//   Tooltip,
//   Legend,
//   XAxis,
//   YAxis,
//   Label,
//   ResponsiveContainer,
// } from "recharts";
// // import Title from "./Title";

// import Theme from "../../../utils/Theme";

// const data = [
//   {
//     name: "Monday",
//     amt: 2400,
//   },
//   {
//     name: "Tuesday",
//     amt: 2210,
//   },
//   {
//     name: "Wednesday",
//     amt: 2290,
//   },
//   {
//     name: "Thursday",
//     amt: 2000,
//   },
//   {
//     name: "Friday",
//     amt: 2181,
//   },
//   {
//     name: "Saturday",
//     amt: 2500,
//   },
//   {
//     name: "Sunday",
//     amt: 2100,
//   },
// ];

// export default function Chart() {
//   const theme = useTheme();
//   return (
//     <React.Fragment>
//       <h1>Weekly Volume</h1>
//       <ResponsiveContainer>
//         <BarChart
//           data={data}
//           margin={{
//             top: 16,
//             right: 16,
//             bottom: 0,
//             left: 24,
//           }}
//         >
//           <XAxis dataKey="name" stroke={theme.palette.text.secondary} />
//           <YAxis stroke={theme.palette.text.secondary}>
//             <Label
//               angle={270}
//               position="left"
//               style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
//             >
//               Volume
//             </Label>
//           </YAxis>
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="amt" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>
//     </React.Fragment>
//   );
// }
