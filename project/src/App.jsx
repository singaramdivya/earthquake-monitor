import React from 'react';
import EarthquakeMap from './components/EarthquakeMap';
import './App.css';

export function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Real-Time Earthquake Monitor</h1>
      <EarthquakeMap />
    </div>
  );
}

export default App;