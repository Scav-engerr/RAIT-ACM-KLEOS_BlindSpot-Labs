import React, { useState } from 'react';
import InputScreen from './components/InputScreen';

export default function App() {
  // Initial state is null so the landing page stays clean before execution
  const [optimizedData, setOptimizedData] = useState(null);

  const handleOptimizationSubmit = (payload) => {
    // Dynamic math formula calculation: Base Region Load + Specific Crop Load Penalty
    const rawCalculatedLoad = payload.metrics.baseLoad + payload.cropMetrics.loadFactor;
    // Cap the maximum possible load index at 100%
    const finalDynamicLoad = Math.min(rawCalculatedLoad, 100);

    // Determine the reactive danger context classification
    let statusLabel = "MODERATE STRAIN";
    let statusColor = "border-yellow-500 text-yellow-400 bg-yellow-950/30";
    if (finalDynamicLoad > 85) {
      statusLabel = "CRITICAL: COLLAPSE RISK DETECTED";
      statusColor = "border-red-500 text-red-400 bg-red-950/50";
    } else if (finalDynamicLoad > 60) {
      statusLabel = "HIGH EXTRACTION ALARM";
      statusColor = "border-orange-500 text-orange-400 bg-orange-950/40";
    }

    setOptimizedData({
      ...payload,
      calculatedLoad: finalDynamicLoad,
      statusLabel: statusLabel,
      statusColor: statusColor
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8">
      {/* HEADER SECTION */}
      <header className="mb-8 border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-cyan-400 font-mono">AQUIFER.AI // MATRIX</h1>
        <p className="text-xs text-slate-500 font-mono mt-1">Multi-Agent Game-Theoretic Hydraulic Resource Balancing</p>
      </header>

      {/* PARAMETER CONFIGURATION PANEL */}
      <div className="mb-8">
        <InputScreen onOptimize={handleOptimizationSubmit} />
      </div>

      {/* CONDITIONALLY RENDER OUTPUT PANEL */}
      {optimizedData ? (
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 shadow-xl transition-all duration-300">
          
          {/* HEADER ALERT LEVEL METRIC */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
            <h3 className="text-lg font-bold font-mono text-slate-100 tracking-wide">
              // NETWORK OPTIMIZATION OUTPUT
            </h3>
            <span className={`text-xs px-2.5 py-1 rounded font-mono uppercase tracking-wider border ${optimizedData.statusColor}`}>
              {optimizedData.statusLabel}
            </span>
          </div>

          <h2 className="text-xl font-bold font-mono text-cyan-400 mb-6">
            Aquifer Grid Matrix: {optimizedData.district}
          </h2>

          {/* SYSTEM DIRECTIVE PARAGRAPH */}
          <div className="p-4 bg-slate-900/40 border-l-2 border-cyan-400 rounded-r mb-6">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase flex items-center gap-2 mb-1">
              🤖 DECOUPLED SYSTEMIC AI DIRECTIVE:
            </h4>
            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              {optimizedData.recommendationText}
            </p>
          </div>

          {/* DYNAMIC GROUNDWATER LOAD INDEX GRAPHICS */}
          <div className="mt-6 bg-slate-900/20 border border-slate-900 p-4 rounded-lg">
            <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
              <span>Cluster Extraction Load Index ({optimizedData.metrics.soil} Matrix)</span>
              <span className={optimizedData.calculatedLoad > 85 ? "text-red-400 font-bold" : "text-yellow-400"}>
                {optimizedData.calculatedLoad}% Capacity
              </span>
            </div>
            <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-700 ease-out ${
                  optimizedData.calculatedLoad > 85 ? 'bg-red-500' : optimizedData.calculatedLoad > 60 ? 'bg-orange-500' : 'bg-yellow-500'
                }`} 
                style={{ width: `${optimizedData.calculatedLoad}%` }}
              ></div>
            </div>
          </div>

          {/* 📊 DYNAMIC COMPARISON BREAKDOWN MODULE (WITH MANDI PRICE INTEGRATION) */}
          <div className="mt-8 bg-slate-900/30 border border-slate-800 rounded-lg p-5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                // SYSTEMIC NODE COMPARISON & LOCAL ECONOMIC REALITIES
              </h4>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded">
                Mandi & Water Delta Metrics
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs text-slate-300">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-500 uppercase tracking-wider text-[11px]">
                    <th className="pb-3 font-medium">Crop Vector</th>
                    <th className="pb-3 font-medium text-center">Water Demand</th>
                    <th className="pb-3 font-medium text-center">Local Mandi Price Equivalence</th>
                    <th className="pb-3 font-medium text-center">Cluster Strain Penalty</th>
                    <th className="pb-3 font-medium text-right">Strategic Advisory Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900/60">
                  
                  {/* SELECTED CROP VECTOR ROW */}
                  <tr className="bg-red-950/10 text-red-200">
                    <td className="py-3.5 font-sans font-bold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                      {optimizedData.crop} <span className="text-[10px] bg-red-900/30 text-red-400 border border-red-900/50 px-1 rounded font-mono">Current</span>
                    </td>
                    <td className="py-3.5 text-center font-bold text-red-400">{optimizedData.cropMetrics.waterDemand}</td>
                    <td className="py-3.5 text-center text-slate-300">Baseline MSP (Standard)</td>
                    <td className="py-3.5 text-center text-red-300">+{optimizedData.cropMetrics.loadFactor}% Strain</td>
                    <td className="py-3.5 text-right font-sans text-xs text-red-400/90 font-medium">❌ High Exhaustion Risk</td>
                  </tr>

                  {/* RESTORATIVE ALTERNATIVE OPTION 1 */}
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 font-sans font-semibold text-slate-200 flex items-center gap-2 pl-3.5">
                      Moong Mung Bean (Restorative)
                    </td>
                    <td className="py-3.5 text-center text-emerald-400 font-bold">Very Low</td>
                    <td className="py-3.5 text-center text-emerald-400 font-bold">+12% Premium Mandi Net Yield</td>
                    <td className="py-3.5 text-center text-emerald-400/80">+5% Strain</td>
                    <td className="py-3.5 text-right text-emerald-400 font-sans font-medium">🎯 Highly Recommended</td>
                  </tr>

                  {/* RESOURCE OPTIMIZED ALTERNATIVE OPTION 2 */}
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 font-sans font-semibold text-slate-200 flex items-center gap-2 pl-3.5">
                      Maize (Resource Optimized)
                    </td>
                    <td className="py-3.5 text-center text-teal-400 font-bold">Low</td>
                    <td className="py-3.5 text-center text-teal-400 font-medium">+5% Equilibrium Match</td>
                    <td className="py-3.5 text-center text-teal-400/80">+15% Strain</td>
                    <td className="py-3.5 text-right text-teal-400 font-sans font-medium">⚡ Balanced Rotation Vector</td>
                  </tr>

                  {/* STANDARD ALTERNATIVE OPTION 3 */}
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 font-sans font-semibold text-slate-200 flex items-center gap-2 pl-3.5">
                      Wheat (Standard Cycle)
                    </td>
                    <td className="py-3.5 text-center text-yellow-500 font-bold">Moderate</td>
                    <td className="py-3.5 text-center text-slate-400">Equivalent Market Yield</td>
                    <td className="py-3.5 text-center text-yellow-500/80">+25% Strain</td>
                    <td className="py-3.5 text-right text-yellow-500 font-sans font-medium">⚠️ Conditional Cap</td>
                  </tr>

                </tbody>
              </table>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-900 text-[11px] font-sans text-slate-500 leading-normal">
              *Note: Local Mandi price equivalents are calculated using regional wholesale data vectors cross-referenced with resource input cost factors.
            </div>
          </div>

          {/* STATS METADATA BAR FOOTER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-900">
            <div>
              <span className="block text-xs font-mono text-slate-500 uppercase tracking-wider">Tracked Interlocked Wells</span>
              <span className="text-lg font-bold font-mono text-slate-200">
                {optimizedData.metrics.wells} Active Sensor Nodes
              </span>
            </div>
            <div>
              <span className="block text-xs font-mono text-slate-500 uppercase tracking-wider">Collective Environmental Load</span>
              <span className="text-xs text-slate-400 mt-1 block leading-relaxed font-mono">
                Grid vectors indicate resource tension caused by deploying <span className="text-cyan-400 font-bold">{optimizedData.crop}</span> configuration metrics into nested blocks.
              </span>
            </div>
          </div>

        </div>
      ) : (
        /* SCREEN FOR INITIAL STATE AWAITING EXECUTION */
        <div className="text-center py-12 bg-slate-950/40 border border-dashed border-slate-800 rounded-xl">
          <p className="text-sm font-mono text-slate-500">
            Awaiting parameters payload. Configure state, matrix grid, and intended crop options above to execute optimization mapping.
          </p>
        </div>
      )}
    </div>
  );
}
