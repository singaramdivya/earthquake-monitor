import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

// Custom marker icon to prevent default marker issue with react-leaflet and leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const EarthquakeMap = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch earthquake data from the USGS Earthquake API
  useEffect(() => {
    const fetchEarthquakes = async () => {
      try {
        const response = await axios.get(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
        );
        setEarthquakes(response.data.features);
      } catch (error) {
        console.error("Error fetching earthquake data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEarthquakes();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading earthquakes...</p>
      ) : (
        <MapContainer center={[20, 0]} zoom={2} style={{ height: "80vh", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {earthquakes.map((quake) => {
            const [longitude, latitude] = quake.geometry.coordinates;
            return (
              <Marker key={quake.id} position={[latitude, longitude]}>
                <Popup>
                  <strong>Magnitude:</strong> {quake.properties.mag}<br />
                  <strong>Location:</strong> {quake.properties.place}<br />
                  <strong>Time:</strong> {new Date(quake.properties.time).toLocaleString()}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      )}
    </div>
  );
};

export default EarthquakeMap;
