interface ErrorData {
  [year: string]: {
    [month: string]: {
      [day: string]: {
        message: string;
        url: string;
      }[];
    };
  };
}

interface LatestErrorsTableProps {
  data: ErrorData[];
}

const LatestErrorsTable: React.FC<LatestErrorsTableProps> = ({ data }) => {
  const errorsList = data.flatMap((object) =>
    Object.entries(object).flatMap(([year, months]) =>
      Object.entries(months).flatMap(([month, days]) =>
        Object.entries(days).flatMap(([day, errors]) =>
          errors.map((error) => ({
            date: `${year}-${month}-${day}`,
            message: error.message,
            url: error.url,
          }))
        )
      )
    )
  );

  return (
    <div>
      <h2 className="text-center text-3xl pb-2">Latest Errors</h2>
      <table className="border-spacing-3">
        <thead>
          <tr>
            <th className="pr-2 pl-2">Date</th>
            <th className="pr-2 pl-2">Error Message</th>
            <th className="pr-2 pl-2">URL</th>
          </tr>
        </thead>
        <tbody>
          {errorsList.map((error, index) => (
            <tr key={index}>
              <td className="pr-2 pl-2">{error.date}</td>
              <td className="pr-2 pl-2">{error.message}</td>
              <td className="pr-2 pl-2">
                <a href={error.url} target="_blank" rel="noopener noreferrer">
                  {error.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestErrorsTable;
