import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

interface StaticData {
  [year: string]: {
    [month: string]: {
      [day: string]: number;
    };
  };
}

const StaticDataChart: React.FC<{ data: StaticData[] }> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const processedData = data.flatMap((object) =>
      Object.entries(object).flatMap(([year, months]) =>
        Object.entries(months).flatMap(([month, days]) =>
          Object.entries(days).map(([day, value]) => ({
            date: `${day}.${month}.${year}`,
            value,
          }))
        )
      )
    );

    const chartData = {
      labels: processedData.map((d) => d.date),
      datasets: [
        {
          label: "Amount of errors",
          data: processedData.map((d) => d.value),
          backgroundColor: "#646cff",
          borderColor: "#646cff",
          borderWidth: 1,
        },
      ],
    };

    const config = {
      type: "bar",
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const myChart = new Chart(chartRef.current.getContext("2d"), config);

    return () => {
      myChart.destroy();
    };
  }, [data]);

  return (
    <div style={{ width: "800px" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default StaticDataChart;
