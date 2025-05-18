import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "فروردین",
    total: 1800000,
  },
  {
    name: "اردیبهشت",
    total: 2200000,
  },
  {
    name: "خرداد",
    total: 2700000,
  },
  {
    name: "تیر",
    total: 1600000,
  },
  {
    name: "مرداد",
    total: 3100000,
  },
  {
    name: "شهریور",
    total: 2800000,
  },
  {
    name: "مهر",
    total: 3600000,
  },
  {
    name: "آبان",
    total: 3200000,
  },
  {
    name: "آذر",
    total: 2900000,
  },
  {
    name: "دی",
    total: 3300000,
  },
  {
    name: "بهمن",
    total: 4100000,
  },
  {
    name: "اسفند",
    total: 4800000,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value / 1000000}M`}
        />
        <Tooltip 
          formatter={(value) => [`${value.toLocaleString()} تومان`, 'فروش']}
          labelFormatter={(label) => `ماه: ${label}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
