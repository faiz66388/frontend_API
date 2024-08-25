import React from 'react';

const MultiSelectDropdown = ({ options, selectedOptions, onChange }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    if (selectedOptions.includes(value)) {
      onChange(selectedOptions.filter(option => option !== value));
    } else {
      onChange([...selectedOptions, value]);
    }
  };

  return (
    <div>
      <label>Select Filters: </label>
      <select multiple value={selectedOptions} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MultiSelectDropdown;
