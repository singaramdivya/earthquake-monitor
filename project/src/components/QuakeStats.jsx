import React from 'react';

export function QuakeStats({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard
        title="Total Earthquakes"
        value={stats.total}
        color="blue"
      />
      <StatCard
        title="Average Magnitude"
        value={stats.avgMagnitude.toFixed(2)}
        color="green"
      />
      <StatCard
        title="Highest Magnitude"
        value={stats.maxMagnitude.toFixed(1)}
        color="red"
      />
      <StatCard
        title="Last Hour"
        value={stats.recentCount}
        color="purple"
      />
    </div>
  );
}

function StatCard({ title, value, color }) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    purple: 'bg-purple-100 text-purple-800'
  };

  return (
    <div className={`p-4 rounded-lg ${colorClasses[color]} text-center`}>
      <h3 className="text-sm font-medium mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

export default QuakeStats;