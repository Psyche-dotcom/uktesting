import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChartComponent = () => {
  const [area, setArea] = useState([]);

  const data = [
    { month: "Jan", value: 50 },
    { month: "Feb", value: 52 },
    { month: "Mar", value: 50 },
    { month: "Apr", value: 52 },
    { month: "May", value: 53 },
    { month: "Jun", value: 52 },
  ];
  useEffect(() => {
    setArea(data);
  }, []);

  return (
    <div className="shadow-md rounded-lg overflow-hidden mb-5 bg-white">
      {area.length > 0 ? (
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data} className="w-full">
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis dataKey="month" hide />
            <YAxis hide />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              fill="#d63384"
              stroke="#dc3545"
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <p>Loading area chart...</p>
      )}
    </div>
  );
};

export default AreaChartComponent;
