import React from 'react';

export default function RecommendationCard({ report }) {
  const isCritical = report.clusterExtractionIndex > 75;
  return (
    <div>
      <div className="flex justify-between items-start border-b border-slate-800 pb-4 mb-4">
        <div>
          <h3 className="text-xs font-mono tracking-widest text-slate-400 uppercase">// Network Optimization Output</h3>
          <p className="text-xl font-bold text-white mt-1">Aquifer Grid Matrix: {report.gridId}</p>
        </div>
        <span className={`px-3 py-1 font-mono text-xs border rounded ${
          isCritical ? 'bg-rose-950/50 text-rose-400 border-rose-800' : 'bg-emerald-950/50 text-emerald-400 border-emerald-800'
        }`}>
          {report.stabilityStatus}
        </span>
      </div>
      
      <div className="p-4 bg-slate-900/80 border-l-4 border-cyan-500 rounded-r-xl mt-4">
        <h4 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wide mb-1">🎯 Decoupled Systemic AI Directive:</h4>
        <p className="text-sm text-slate-300 leading-relaxed font-sans">{report.operationalDirective}</p>
      </div>
    </div>
  );
}
