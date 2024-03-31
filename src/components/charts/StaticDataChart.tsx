import React, { useEffect } from "react";

interface StaticData {
  [year: string]: {
    [month: string]: {
      [day: string]: number;
    };
  };
}

const StaticDataChart: React.FC<{ data: StaticData[] }> = ({ data }) => {
  return (
    <div>
      <h2>Statistics</h2>
    </div>
  );
};

export default StaticDataChart;
