import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { format } from 'date-fns';
import L from 'leaflet';

export function QuakeMarker({ quake, onSelect, isSelected }) {
  const [longitude, latitude] = quake.geometry.coordinates;
  const { mag, place, time } = quake.properties;

  // Create custom icon based on magnitude
  const getMarkerColor = (magnitude) => {
    if (magnitude >= 7) return '#FF0000';
    if (magnitude >= 5) return '#FF6B00';
    if (magnitude >= 3) return '#FFB700';
    return '#00FF00';
  };

  const iconSize = Math.max(8, mag * 4);
  const icon = L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="
      background-color: ${getMarkerColor(mag)};
      width: ${iconSize}px;
      height: ${iconSize}px;
      border-radius: 50%;
      border: ${isSelected ? '2px solid #000' : 'none'};
      opacity: 0.8;
    "></div>`,
    iconSize: [iconSize, iconSize],
  });

  return (
    <Marker
      position={[latitude, longitude]}
      icon={icon}
      eventHandlers={{
        click: () => onSelect(quake),
      }}
    >
      <Popup>
        <div className="text-sm">
          <h3 className="font-bold mb-2">{place}</h3>
          <p><strong>Magnitude:</strong> {mag}</p>
          <p><strong>Time:</strong> {format(new Date(time), 'PPpp')}</p>
        </div>
      </Popup>
    </Marker>
  );
}

export default QuakeMarker;