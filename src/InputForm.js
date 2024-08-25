import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const parsedJson = JSON.parse(jsonInput);
      if (Array.isArray(parsedJson.data)) {
        setError('');
        onSubmit(parsedJson);
      } else {
        setError('JSON must contain a "data" array.');
      }
    } catch (e) {
      setError('Invalid JSON format.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          rows="10"
          cols="50"
          placeholder='Enter JSON: { "data": ["A", "1", "b", "5"] }'
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default InputForm;
