import React from 'react';

function OtherFilters({ ageFilter, setAgeFilter, sexFilter, setSexFilter }) {
  return (
    <div>
      <label>
        Age:
        <input
          type="number"
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value)}
          placeholder="Enter age"
        />
      </label>

      <label>
        Sex:
        <select value={sexFilter} onChange={(e) => setSexFilter(e.target.value)}>
          <option value="">Both</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
    </div>
  );
}

export default OtherFilters;
