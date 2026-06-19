import React from 'react';

export default function WaterProjectionChart({ index }) {
  const isHigh = index > 75;
  return (
    <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800">
      <div className="flex justify-between text-xs font-mono mb-2">
        <span className="text-slate-400">Cluster Extraction Load Index:</span>
        <span className={isHigh ? "text-rose-400" : "text-emerald-400 font-bold"}>
          {index}% Capacity
        </span>
      </div>
      <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-500 ${isHigh ? 'bg-rose-500' : 'bg-emerald-500'}`}
          style={{ width: `${index}%` }}
        ></div>
      </div>
    </div>
  );
}
