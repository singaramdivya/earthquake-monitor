import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { format } from 'date-fns';
import L from 'leaflet';
import useEarthquakeStore from '../store/earthquakeStore';

const EarthquakeMarker = ({ quake }) => {
  const { setSelectedQuake } = useEarthquakeStore();
  const [longitude, latitude, depth] = quake.geometry.coordinates;
  const { mag, place, time } = quake.properties;

  // Create custom icon size based on magnitude
  const iconSize = Math.max(8, mag * 4);
  const icon = L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="
      background-color: ${getColor(mag)};
      width: ${iconSize}px;
      height: ${iconSize}px;
      border-radius: 50%;
      opacity: 0.8;
    "></div>`,
    iconSize: [iconSize, iconSize],
  });

  return (
    <Marker
      position={[latitude, longitude]}
      icon={icon}
      eventHandlers={{
        click: () => setSelectedQuake(quake),
      }}
    >
      <Popup>
        <div className="text-sm">
          <h3 className="font-bold mb-2">{place}</h3>
          <p><strong>Magnitude:</strong> {mag}</p>
          <p><strong>Depth:</strong> {depth.toFixed(2)} km</p>
          <p><strong>Time:</strong> {format(new Date(time), 'PPpp')}</p>
        </div>
      </Popup>
    </Marker>
  );
};

function getColor(magnitude) {
  if (magnitude >= 7) return '#FF0000';
  if (magnitude >= 5) return '#FF6B00';
  if (magnitude >= 3) return '#FFB700';
  return '#00FF00';
}

export default EarthquakeMarker;