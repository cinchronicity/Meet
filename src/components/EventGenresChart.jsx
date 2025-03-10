import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import PropTypes from "prop-types";


const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = useMemo(
    () => ["React", "JavaScript", "Node", "jQuery", "Angular"],
    []
  ); //useMemo is used to store the genres array in memory so its not recalculated every time the component re-renders

  const COLORS = ["#03befc", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF"];

  const getData = useCallback(() => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );
      return { name: genre, value: filteredEvents.length };
    });
    return data;
  }, [events, genres]);

  useEffect(() => {
    setData(getData());
  }, [getData]);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius+20;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    return percent ? (
      <text
        x={x}
        y={y}
        fill={COLORS[index % COLORS.length]} 
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <p>Topic&apos;s Available</p>
      <PieChart margin={{ left: 20, right: 20 }}>
        <Tooltip />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={130}
          labelLine={true}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="#fff" 
              strokeWidth={2} 
            />
          ))}
        </Pie>
        <Legend
          iconSize={15}
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{ paddingTop: "20px" }} 
          formatter={(value) => (
            <span
              style={{ color: "#000", fontSize: "11px", fontWeight: "300" }}
            >
              {value}
            </span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};


EventGenresChart.propTypes = {
  events: PropTypes.array.isRequired,
};
export default EventGenresChart;
