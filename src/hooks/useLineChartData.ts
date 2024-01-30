import React from "react";
import { Props, Accumulator } from "../types/dataType";

// custom hook to format the data like it's shown in documentation
// I used the AI for the reduce
// according to the data the logic way is that x should be the month and y should be the average spend

const useLineChartData = ({ data }: Props) => {
  const formattedData = Object.entries(
    data.reduce((acc: Accumulator, { year, month, averageSpend }) => {
      const id = year.toString();
      acc[id] = acc[id] || [];
      acc[id].push({ x: String(month), y: averageSpend });
      return acc;
    }, {})
  ).map(([id, data]) => {
    return { id, data };
  });

  return formattedData;
};
export default useLineChartData;
