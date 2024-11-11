import React from 'react';
import { format } from 'date-fns';

export function TimeRangeSelector({ timeRange, onTimeRangeChange, lastUpdate }) {
  const timeRanges = [
    { value: 'hour', label: 'Past Hour' },
    { value: 'day', label: 'Past Day' },
    { value: 'week', label: 'Past Week' },
    { value: 'month', label: 'Past Month' }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Time Range
        </label>
        <select
          value={timeRange}
          onChange={(e) => onTimeRangeChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {timeRanges.map(range => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="text-sm text-gray-500">
        Last updated: {format(lastUpdate, 'HH:mm:ss')}
      </div>
    </div>
  );
}

export default TimeRangeSelector;