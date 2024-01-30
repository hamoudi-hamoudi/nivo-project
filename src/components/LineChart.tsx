import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Props } from "../types/dataType";
import useLineChartData from "../hooks/useLineChartData";

// the data is not complete for all the month of the years, so it was a problem using the code from the nivo line directly
// I use the format of xScale and yScale from Time Scale in nivo line docs
// to correct the name of the month I use D3 docs https://d3js.org/d3-time-format

const LineChart = ({ data }: Props) => {
  const dataFormatted = useLineChartData({ data });

  return (
    <div className="w-full h-full">
      <ResponsiveLine
        data={dataFormatted}
        margin={{ top: 50, right: 110, bottom: 50, left: 70 }}
        xScale={{
          format: "%m",
          precision: "month",
          type: "time",
          useUTC: false,
        }}
        yScale={{
          type: "linear",
        }}
        yFormat=" >-.2f"
        curve="natural" // changing the line type
        axisTop={null}
        axisRight={null}
        axisBottom={{
          format: "%B", // show the full name of the month
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "average spend",
          legendOffset: -60, // adjust the space
          legendPosition: "middle",
        }}
        colors={{ scheme: "category10" }}
        pointSize={9}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        areaOpacity={0}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 107,
            translateY: -16,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 79,
            itemHeight: 26,
            itemOpacity: 0.75,
            symbolSize: 14,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        motionConfig="default"
      />
    </div>
  );
};
export default LineChart;
