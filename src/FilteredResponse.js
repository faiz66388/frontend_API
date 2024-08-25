import React from 'react';

const FilteredResponse = ({ response, filters }) => {
  const { numbers, alphabets, highest_lowercase_alphabet } = response;

  return (
    <div>
      {filters.includes('Numbers') && (
        <div>
          <strong>Numbers:</strong> {numbers.join(', ')}
        </div>
      )}
      {filters.includes('Alphabets') && (
        <div>
          <strong>Alphabets:</strong> {alphabets.join(', ')}
        </div>
      )}
      {filters.includes('Highest Lowercase Alphabet') && (
        <div>
          <strong>Highest Lowercase Alphabet:</strong> {highest_lowercase_alphabet.join(', ')}
        </div>
      )}
    </div>
  );
};

export default FilteredResponse;
