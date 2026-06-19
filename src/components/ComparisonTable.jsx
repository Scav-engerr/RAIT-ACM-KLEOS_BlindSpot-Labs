import React from 'react';

export default function ComparisonTable({ report, currentCrop }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
      <div>
        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Tracked Interlocked Wells</p>
        <p className="text-lg font-bold text-slate-200 mt-0.5 font-mono">{report.activeBorewells} Active Nodes</p>
      </div>
      <div>
        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Collective Environmental Load</p>
        <p className="text-sm text-slate-300 mt-1 leading-relaxed">{report.clusterImpactMessage}</p>
      </div>
    </div>
  );
}
