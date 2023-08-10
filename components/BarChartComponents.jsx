import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = () => {
  const [bar, setBar] = useState([]);
  const data = [
    { month: "Jan", value1: 100, value2: 200, value3: 300 },
    { month: "Feb", value1: 150, value2: 250, value3: 350 },
    { month: "Mar", value1: 200, value2: 300, value3: 400 },
    { month: "Apr", value1: 250, value2: 350, value3: 450 },
    { month: "May", value1: 300, value2: 400, value3: 500 },
    { month: "Jun", value1: 350, value2: 450, value3: 550 },
  ];
  useEffect(() => {
    setBar(data);
  }, []);
  const axisLineStyle = {
    stroke: "transparent",
  };

  const tickLineStyle = {
    stroke: "transparent",
  };

  return (
    <div className="bg-lblue shadow-md rounded-lg overflow-hidden mb-5">
      <div>
        {bar.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} barGap={0} barSize={20}>
              <CartesianGrid
                strokeDasharray="0"
                horizontal={false}
                vertical={false}
              />
              <XAxis
                axisLine={axisLineStyle}
                tickLine={tickLineStyle}
                dataKey="month"
                hide
              />
              <YAxis axisLine={axisLineStyle} tickLine={tickLineStyle} hide />
              <Tooltip />

              <Bar dataKey="value1" fill="#8884d8" isAnimationActive={false} />
              <Bar dataKey="value2" fill="#82ca9d" isAnimationActive={false} />
              <Bar dataKey="value3" fill="#ffffff" isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p>Loading bar...</p>
        )}
      </div>
      <div class="grid grid-cols-2 gap-4 bg-white rounded-lg p-5">
        <div>
          <h4 className="text-h3">Total minutes Sold</h4>
          <h4 className="text-h4">$650</h4>
        </div>
        <div>
          <h5>Total Minutes Amount generated</h5>
          <h6 className="text-h4">$29,500</h6>
        </div>
        <div>
          <h5>Total Minutes used</h5>
          <h6 className="text-h4">$29,500</h6>
        </div>
        <div>
          <h5>Total minutes used Amount generated</h5>
          <h6 className="text-h4">$1,129,500</h6>
        </div>
      </div>
    </div>
  );
};

export default BarChartComponent;
