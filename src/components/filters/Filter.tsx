import React, { useState } from "react";

const Filter: React.FC<{ onChange: (value: number) => void }> = ({
  onChange,
}) => {
  const [value, setValue] = useState<number>(10);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value);
    setValue(selectedValue);
    onChange(selectedValue);
  };

  return (
    <div>
      <label htmlFor="filter">Show last:</label>
      <select id="filter" value={value} onChange={handleChange}>
        <option value={10}>10</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </div>
  );
};

export default Filter;
