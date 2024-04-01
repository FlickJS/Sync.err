import React from "react";
import StaticDataChart from "../components/dashboards/StaticDataChart";
import LatestErrorsTable from "../components/dashboards/LatestErrorsTable";

const App: React.FC = () => {
  const staticData = [
    {
      "2024": {
        April: {
          "04.01": [
            {
              message: "ReferenceError: variable is not defined",
              url: "https://example.com/error/referenceerror",
            },
          ],
          "04.02": [
            {
              message: "RangeError: Maximum call stack size exceeded",
              url: "https://example.com/error/rangeerror",
            },
            {
              message:
                "TypeError: Cannot set properties of null (setting 'innerHTML')",
              url: "https://example.com/error/typeerror",
            },
          ],
          "04.03": [
            {
              message: "EvalError: Call to eval() blocked by CSP",
              url: "https://example.com/error/evalerror",
            },
            {
              message: "URIError: URI malformed",
              url: "https://example.com/error/urierror",
            },
            {
              message: "TypeError: Object doesn't support property or method",
              url: "https://example.com/error/typeerror2",
            },
            {
              message: "ReferenceError: function is not defined",
              url: "https://example.com/error/referenceerror2",
            },
          ],
          "04.04": [
            {
              message: "SyntaxError: Unexpected end of input",
              url: "https://example.com/error/syntaxerror",
            },
          ],
          "04.05": [
            {
              message: "RangeError: Invalid array length",
              url: "https://example.com/error/rangeerror2",
            },
            {
              message: "SyntaxError: Unexpected string",
              url: "https://example.com/error/syntaxerror2",
            },
          ],
          "04.06": [
            {
              message: "TypeError: Failed to fetch",
              url: "https://example.com/error/typeerror3",
            },
          ],
        },
      },
    },
  ];

  return (
    <div className="main__container flex flex-col justify-center flex-center items-center">
      <h1 className="pb-6">Dashboard</h1>
      <StaticDataChart data={staticData} />
      <LatestErrorsTable data={staticData} />
    </div>
  );
};

export default App;
