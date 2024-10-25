import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { range: "$2000", value: 30 },
  { range: "$2500", value: 50 },
  { range: "$3000", value: 60 },
  { range: "$3500", value: 40 }
];

const PriceRangeGraph = () => {
  return (
    <div style={{ backgroundColor: "#fff", padding: "10px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <h4 style={{ textAlign: "center", color: "#333",  }}>Price Range</h4>
      <BarChart
        width={300}
        height={150}
        data={data}
        style={{ margin: "0 auto" }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="range" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" radius={[5, 5, 0, 0]} />
      </BarChart>
    </div>
  );
};

export default PriceRangeGraph;
