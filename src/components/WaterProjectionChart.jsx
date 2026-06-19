import React from 'react';

export default function WaterProjectionChart({ inputs, results, t }) {
  // Simple simulation of water table drop over 15 years
  const selectedCrop = results.find(c => c.name === inputs.crop);
  const bestCrop = results[0];
  
  // Calculate a mock trend line based on crop intensity
  const years = Array.from({ length: 6 }, (_, i) => i * 3); // 0, 3, 6, 9, 12, 15 years
  
  // High water usage causes steep drop; low water usage flattens it
  const selectedDrop = years.map(y => Math.max(0, 10 - (y * (selectedCrop.waterPenalty / 8000))));
  const recommendedDrop = years.map(y => Math.max(0, 10 - (y * (bestCrop.waterPenalty / 8000))));

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto mt-6">
      <h3 className="font-bold text-gray-800 text-base mb-2">
        🔮 15-Year Aquifer Depth Projection (Meters Down)
      </h3>
      <p className="text-xs text-gray-500 mb-4">
        Visualizing water table depletion if the district continues growing {inputs.crop} vs. switching to {bestCrop.name}.
      </p>

      {/* Visual Bars representing underground water level */}
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs font-semibold text-red-600 mb-1">
            <span>If staying with {inputs.crop}</span>
            <span>Critical Failure in ~15 Yrs</span>
          </div>
          <div className="w-full bg-gray-100 h-6 rounded-lg overflow-hidden flex">
            {selectedDrop.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-red-500 border-r border-white transition-all duration-500" 
                style={{ width: '16.66%', opacity: val / 10 }}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold text-emerald-700 mb-1">
            <span>If switching to {bestCrop.name}</span>
            <span>Stabilized Lifespan: 40+ Yrs</span>
          </div>
          <div className="w-full bg-gray-100 h-6 rounded-lg overflow-hidden flex">
            {recommendedDrop.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-emerald-500 border-r border-white transition-all duration-500" 
                style={{ width: '16.66%', opacity: Math.max(0.3, val / 10) }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between text-[10px] text-gray-400 mt-1 px-1">
        <span>Current Year</span>
        <span>Year 6</span>
        <span>Year 12</span>
        <span>Year 15+</span>
      </div>
    </div>
  );
}
