import React from 'react';

export function MagnitudeFilter({ minMagnitude, onMagnitudeChange }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Minimum Magnitude: {minMagnitude}
      </label>
      <input
        type="range"
        min="0"
        max="9"
        step="0.1"
        value={minMagnitude}
        onChange={(e) => onMagnitudeChange(parseFloat(e.target.value))}
        className="w-full"
      />
    </div>
  );
}

export default MagnitudeFilter;