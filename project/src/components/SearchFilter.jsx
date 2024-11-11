import React from 'react';

export function SearchFilter({ searchQuery, onSearchChange, minMagnitude, onMagnitudeChange }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search Location
        </label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by location..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
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
    </div>
  );
}

export default SearchFilter;