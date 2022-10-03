import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { AxisOptions, Chart } from "react-charts";
import { Box } from "@chakra-ui/react";

const data = [
  { name: "Jan", value: 1230 },
  { name: "Feb", value: 124 },
  { name: "Mar", value: 925 },
  { name: "Apr",value: 126 },
  { name: "May", value: 1270 },
  { name: "Jun", value: 123 },
  { name: "Jul", value: 524 },
  { name: "Aug", value: 1250 },
  { name: "Sep", value: 326 },
  { name: "Oct", value: 1270 },
  { name: "Nov", value: 126 },
  { name: "Dec", value: 327 }
];

export default function OverviewGraph() {
  return (
    <Box zIndex='1' mt='0.5rem' size={["sm",'sm','md','lg']} pr='2rem'>
      <Box fontWeight={'500'} ml='80%' mb='0.5rem'>Invoices issued in 2022</Box>
      <BarChart width={830} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="green" />
      </BarChart>
    </Box>
  );
}
