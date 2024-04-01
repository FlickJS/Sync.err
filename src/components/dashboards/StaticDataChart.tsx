import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

interface ErrorData {
  [year: string]: {
    [month: string]: {
      [day: string]: string[];
    };
  };
}

const StaticDataChart: React.FC<{ data: ErrorData[] }> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const processedData = data.flatMap((object) =>
      Object.entries(object).flatMap(([year, months]) =>
        Object.entries(months).flatMap(([month, days]) =>
          Object.entries(days).map(([day, errors]) => ({
            date: `${day}.${month}.${year}`,
            value: errors.length,
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
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    if (chartRef.current) {
      const myChart = new Chart(chartRef.current.getContext("2d"), config);

      return () => {
        myChart.destroy();
      };
    }
  }, [data]);

  return (
    <div style={{ width: "800px" }} className="pb-6">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default StaticDataChart;
