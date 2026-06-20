import React, { useState } from 'react';
import InputScreen from './components/InputScreen';
// Import your other dashboard cards below...

export default function App() {
  // 1. This central state holds the payload passed from Step 2
  const [optimizedData, setOptimizedData] = useState(null);

  const handleOptimizationSubmit = (payload) => {
    setOptimizedData(payload);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8">
      {/* HEADER SECTION */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-cyan-400 font-mono">AQUIFER.AI // MATRIX</h1>
      </header>

      {/* STEP 2 FORM COMPONENT */}
      <div className="mb-8">
        <InputScreen onOptimize={handleOptimizationSubmit} />
      </div>

      {/* DASHBOARD OUTPUT PANEL */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold font-mono text-slate-100">
            // NETWORK OPTIMIZATION OUTPUT
          </h3>
          <span className="text-xs bg-red-950/50 border border-red-500 text-red-400 px-2 py-1 rounded font-mono uppercase tracking-wider">
            Critical: Collapse Risk Detected
          </span>
        </div>

        <h2 className="text-xl font-bold font-mono text-slate-200 mb-6">
          Aquifer Grid Matrix: {optimizedData ? optimizedData.district : "LH-412"}
        </h2>

        {/* 🎯 STEP 3 EDIT: DYNAMIC AI RECOVERY PARAGRAPH */}
        <div className="mt-4 p-4 bg-slate-900/50 border-l-2 border-cyan-400 rounded-r">
          <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase flex items-center gap-2">
            🛑 DECOUPLED SYSTEMIC AI DIRECTIVE:
          </h4>
          <p className="text-sm text-slate-300 font-sans leading-relaxed mt-2">
            {optimizedData ? (
              optimizedData.recommendationText
            ) : (
              "The system has flagged your farm coordinates as a PRIME PIVOT NODE. To balance Grid LH-412 back under safe carrying thresholds, a localized 22% shift in the collective crop layout is required. Pivoting your node to a Restorative crop stabilizes the local hydraulic ecosystem pressure."
            )}
          </p>
        </div>

        {/* CLUSTER LOAD INDEX METRICS */}
        <div className="mt-6">
          <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
            <span>Cluster Extraction Load Index</span>
            <span className="text-red-400">
              {optimizedData ? `${optimizedData.metrics.baseLoad}% Capacity` : "100% Capacity"}
            </span>
          </div>
          <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-red-500 h-full transition-all duration-500" 
              style={{ width: `${optimizedData ? optimizedData.metrics.baseLoad : 100}%` }}
            ></div>
          </div>
        </div>

        {/* STATS FOOTER ROW */}
        <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-900">
          <div>
            <span className="block text-xs font-mono text-slate-500 uppercase tracking-wider">Tracked Interlocked Wells</span>
            <span className="text-xl font-bold font-mono text-slate-200">
              {optimizedData ? `${optimizedData.metrics.wells} Active Nodes` : "54 Active Nodes"}
            </span>
          </div>
          <div>
            <span className="block text-xs font-mono text-slate-500 uppercase tracking-wider">Collective Environmental Load</span>
            <span className="text-sm text-slate-300 mt-1 block">
              {optimizedData ? (
                `Your shared aquifer grid is experiencing high-velocity depletion due to standard ${optimizedData.crop} profiles in neighboring nodes.`
              ) : (
                "Your shared aquifer grid (LH-412) is experiencing high-velocity depletion due to severe flood-irrigation saturation in neighboring nodes."
              )}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
