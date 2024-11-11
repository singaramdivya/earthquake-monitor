import React from 'react';
import useEarthquakeStore from '../store/earthquakeStore';

const FilterPanel = () => {
  const { filters, setFilters } = useEarthquakeStore();

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-3">Filters</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Minimum Magnitude
          </label>
          <input
            type="range"
            min="0"
            max="9"
            step="0.1"
            value={filters.minMagnitude}
            onChange={(e) => handleFilterChange('minMagnitude', parseFloat(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-gray-600">{filters.minMagnitude}</span>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Time Range
          </label>
          <select
            value={filters.timeRange}
            onChange={(e) => handleFilterChange('timeRange', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="hour">Past Hour</option>
            <option value="day">Past Day</option>
            <option value="week">Past Week</option>
            <option value="month">Past Month</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;