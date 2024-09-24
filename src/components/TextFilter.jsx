import React from 'react';

function TextFilter({ label, value, onChange, placeholder }) {
  return (
    <label>
      {label}:
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}

export default TextFilter;
