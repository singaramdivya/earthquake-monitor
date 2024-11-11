import React from 'react';
import { format } from 'date-fns';

export function QuakeDetails({ quake, onClose }) {
  const { properties, geometry } = quake;
  const [longitude, latitude, depth] = geometry.coordinates;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        ×
      </button>
      
      <h2 className="text-xl font-bold mb-4">Earthquake Details</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">Location</h3>
          <p>{properties.place}</p>
        </div>
        <div>
          <h3 className="font-semibold">Magnitude</h3>
          <p className={getMagnitudeColor(properties.mag)}>
            {properties.mag}
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Coordinates</h3>
          <p>{latitude.toFixed(4)}°N, {longitude.toFixed(4)}°E</p>
        </div>
        <div>
          <h3 className="font-semibold">Depth</h3>
          <p>{depth.toFixed(2)} km</p>
        </div>
        <div>
          <h3 className="font-semibold">Time</h3>
          <p>{format(new Date(properties.time), 'PPpp')}</p>
        </div>
        <div>
          <h3 className="font-semibold">Status</h3>
          <p className="capitalize">{properties.status}</p>
        </div>
      </div>
    </div>
  );
}

function getMagnitudeColor(magnitude) {
  if (magnitude >= 7) return 'text-red-600 font-bold';
  if (magnitude >= 5) return 'text-orange-600 font-bold';
  if (magnitude >= 3) return 'text-yellow-600';
  return 'text-green-600';
}

export default QuakeDetails;