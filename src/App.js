import React, { useState,  useEffect} from 'react';
import InputForm from './InputForm';
import MultiSelectDropdown from './MultiSelectDropdown';
import FilteredResponse from './FilteredResponse';

const App = () => {
  const [response, setResponse] = useState(null);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    document.title = 'ABCD123'; // Replace with your actual roll number
  }, []);

  const handleSubmit = async (jsonInput) => {
    try {
      const res = await fetch('http://localhost:5000/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonInput),
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>BFHL Frontend</h1>
      <InputForm onSubmit={handleSubmit} />
      {response && (
        <>
          <MultiSelectDropdown
            options={['Numbers', 'Alphabets', 'Highest Lowercase Alphabet']}
            selectedOptions={filters}
            onChange={setFilters}
          />
          <FilteredResponse response={response} filters={filters} />
        </>
      )}
    </div>
  );
};

export default App;
