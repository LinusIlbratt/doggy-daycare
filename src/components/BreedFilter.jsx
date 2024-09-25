import React from 'react';

function BreedFilter({ breeds, selectedBreed, setBreedFilter }) {
  
  const sortedBreeds = breeds.sort((a, b) => a.localeCompare(b));

  return (  
      <select
        value={selectedBreed}
        onChange={(e) => setBreedFilter(e.target.value)}
      >
        <option value="">All breeds</option>
        {sortedBreeds.map(breed => (
          <option key={breed} value={breed}>
            {breed.charAt(0).toUpperCase() + breed.slice(1)}
          </option>
        ))}
      </select>
    
  );
}

export default BreedFilter;
