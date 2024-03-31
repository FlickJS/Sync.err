import React from "react";
import StaticDataChart from "../components/charts/StaticDataChart";

const App: React.FC = () => {
  const staticData = [
    {
      "2024": {
        January: { "01.01": 5 },
        April: {
          "04.01": Math.floor(Math.random() * 101),
          "04.02": Math.floor(Math.random() * 101),
          "04.03": Math.floor(Math.random() * 101),
          "04.04": Math.floor(Math.random() * 101),
          "04.05": Math.floor(Math.random() * 101),
          "04.06": Math.floor(Math.random() * 101),
          "04.07": Math.floor(Math.random() * 101),
          "04.08": Math.floor(Math.random() * 101),
          "04.09": Math.floor(Math.random() * 101),
          "04.10": Math.floor(Math.random() * 101),
          "04.11": Math.floor(Math.random() * 101),
          "04.12": Math.floor(Math.random() * 101),
          "04.13": Math.floor(Math.random() * 101),
          "04.14": Math.floor(Math.random() * 101),
          "04.15": Math.floor(Math.random() * 101),
          "04.16": Math.floor(Math.random() * 101),
          "04.17": Math.floor(Math.random() * 101),
          "04.18": Math.floor(Math.random() * 101),
          "04.19": Math.floor(Math.random() * 101),
          "04.20": Math.floor(Math.random() * 101),
          "04.21": Math.floor(Math.random() * 101),
          "04.22": Math.floor(Math.random() * 101),
          "04.23": Math.floor(Math.random() * 101),
          "04.24": Math.floor(Math.random() * 101),
          "04.25": Math.floor(Math.random() * 101),
          "04.26": Math.floor(Math.random() * 101),
          "04.27": Math.floor(Math.random() * 101),
          "04.28": Math.floor(Math.random() * 101),
          "04.29": Math.floor(Math.random() * 101),
          "04.30": Math.floor(Math.random() * 101),
        },
      },
    },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <StaticDataChart data={staticData} />
    </div>
  );
};

export default App;
