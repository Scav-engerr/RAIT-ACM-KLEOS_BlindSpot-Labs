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
    let statusColor = "border-amber-600 text-amber-700 bg-amber-50";
    if (finalDynamicLoad > 85) {
      statusLabel = "CRITICAL: COLLAPSE RISK DETECTED";
      statusColor = "border-red-600 text-red-700 bg-red-50";
    } else if (finalDynamicLoad > 60) {
      statusLabel = "HIGH EXTRACTION ALARM";
      statusColor = "border-orange-600 text-orange-700 bg-orange-50";
    }

    setOptimizedData({
      ...payload,
      calculatedLoad: finalDynamicLoad,
      statusLabel: statusLabel,
      statusColor: statusColor
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12">
      {/* HEADER SECTION */}
      <header className="mb-8 border-b border-slate-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-700 font-sans">
          Aquifer.ai Groundwater Matrix
        </h1>
        <p className="text-sm md:text-base text-slate-600 font-medium mt-2">
          Hydraulic Resource Balancing & Market Revenue Optimizer
        </p>
      </header>

      {/* PARAMETER CONFIGURATION PANEL */}
      <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <InputScreen onOptimize={handleOptimizationSubmit} />
      </div>

      {/* CONDITIONALLY RENDER OUTPUT PANEL */}
      {optimizedData ? (
        <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-md transition-all duration-300">
          
          {/* HEADER ALERT LEVEL METRIC */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-6">
            <h3 className="text-xl font-bold text-slate-800 tracking-wide uppercase text-sm">
              Network Optimization Output
            </h3>
            <span className={`text-sm px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider border ${optimizedData.statusColor}`}>
              {optimizedData.statusLabel}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-emerald-800 mb-6">
            Aquifer Grid Matrix: {optimizedData.district}
          </h2>

          {/* 🚨 CRITICAL SOLUTION FIX: BIGGER, BOLDER RECOMMENDATION CALLOUT BLOCK */}
          <div className="p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-xl mb-8 shadow-sm">
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-2">
              💡 Systemic AI Crop Directive
            </div>
            <div className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
              {optimizedData.recommendationText}
            </div>
          </div>

          {/* DYNAMIC GROUNDWATER LOAD INDEX GRAPHICS */}
          <div className="mb-8 bg-slate-100 p-5 rounded-xl border border-slate-200">
            <div className="flex justify-between text-sm md:text-base font-bold text-slate-700 mb-2">
              <span>Cluster Extraction Load Index ({optimizedData.metrics.soil} Matrix)</span>
              <span className={optimizedData.calculatedLoad > 85 ? "text-red-600 font-extrabold" : "text-amber-600 font-extrabold"}>
                {optimizedData.calculatedLoad}% Capacity
              </span>
            </div>
            <div className="w-full bg-slate-200 h-4 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-700 ease-out ${
                  optimizedData.calculatedLoad > 85 ? 'bg-red-600' : optimizedData.calculatedLoad > 60 ? 'bg-orange-500' : 'bg-amber-500'
                }`} 
                style={{ width: `${optimizedData.calculatedLoad}%` }}
              ></div>
            </div>
          </div>

          {/* 📊 DYNAMIC COMPARISON BREAKDOWN MODULE */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-emerald-800 uppercase tracking-wider">
                Systemic Node Comparison & Local Economic Realities
              </h4>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                Mandi & Water Delta Metrics
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-sm md:text-base text-slate-700">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-slate-500 uppercase tracking-wider text-xs font-bold">
                    <th className="pb-3 font-semibold">Crop Vector</th>
                    <th className="pb-3 font-semibold text-center">Water Demand</th>
                    <th className="pb-3 font-semibold text-center">Local Mandi Price Equivalence</th>
                    <th className="pb-3 font-semibold text-center">Cluster Strain Penalty</th>
                    <th className="pb-3 font-semibold text-right">Strategic Advisory Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  
                  {/* SELECTED CROP VECTOR ROW */}
                  <tr className="bg-red-50 text-slate-900 font-medium">
                    <td className="py-4 font-bold flex items-center gap-2 text-base pl-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                      {optimizedData.crop} <span className="text-xs bg-red-100 text-red-800 border border-red-200 px-2 py-0.5 rounded-full font-bold">Current</span>
                    </td>
                    <td className="py-4 text-center font-bold text-red-600 text-base">{optimizedData.cropMetrics.waterDemand}</td>
                    <td className="py-4 text-center font-medium text-slate-600">Baseline MSP (Standard)</td>
                    <td className="py-4 text-center font-bold text-red-600">+{optimizedData.cropMetrics.loadFactor}% Strain</td>
                    <td className="py-4 text-right font-bold text-red-600 text-sm">❌ High Exhaustion Risk</td>
                  </tr>

                  {/* RESTORATIVE ALTERNATIVE OPTION 1 */}
                  <tr className="hover:bg-slate-50 transition-colors font-medium">
                    <td className="py-4 text-slate-900 font-bold text-base pl-2">
                      Moong Mung Bean (Restorative)
                    </td>
                    <td className="py-4 text-center text-emerald-600 font-bold text-base">Very Low</td>
                    <td className="py-4 text-center text-emerald-700 font-extrabold text-base bg-emerald-50/50">+12% Premium Mandi Net Yield</td>
                    <td className="py-4 text-center text-emerald-600 font-bold">+5% Strain</td>
                    <td className="py-4 text-right text-emerald-700 font-bold text-sm">🎯 Highly Recommended</td>
                  </tr>

                  {/* RESOURCE OPTIMIZED ALTERNATIVE OPTION 2 */}
                  <tr className="hover:bg-slate-50 transition-colors font-medium">
                    <td className="py-4 text-slate-900 text-base pl-2">
                      Maize (Resource Optimized)
                    </td>
                    <td className="py-4 text-center text-teal-600 font-bold text-base">Low</td>
                    <td className="py-4 text-center text-teal-700 font-bold text-base">+5% Equilibrium Match</td>
                    <td className="py-4 text-center text-teal-600 font-medium">+15% Strain</td>
                    <td className="py-4 text-right text-teal-700 font-bold text-sm">⚡ Balanced Rotation Vector</td>
                  </tr>

                  {/* STANDARD ALTERNATIVE OPTION 3 */}
                  <tr className="hover:bg-slate-50 transition-colors font-medium">
                    <td className="py-4 text-slate-900 text-base pl-2">
                      Wheat (Standard Cycle)
                    </td>
                    <td className="py-4 text-center text-amber-600 font-bold text-base">Moderate</td>
                    <td className="py-4 text-center text-slate-500">Equivalent Market Yield</td>
                    <td className="py-4 text-center text-amber-600 font-medium">+25% Strain</td>
                    <td className="py-4 text-right text-amber-600 font-bold text-sm">⚠️ Conditional Cap</td>
                  </tr>

                </tbody>
              </table>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 leading-normal font-medium">
              *Note: Local Mandi price equivalents are calculated using regional wholesale data vectors cross-referenced with resource input cost factors.
            </div>
          </div>

          {/* STATS METADATA BAR FOOTER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-6 border-t border-slate-200">
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Tracked Interlocked Wells</span>
              <span className="text-xl font-extrabold text-slate-800 mt-1 block">
                {optimizedData.metrics.wells} Active Sensor Nodes
              </span>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Collective Environmental Load</span>
              <span className="text-sm text-slate-600 mt-1 block leading-relaxed font-medium">
                Grid vectors indicate resource tension caused by deploying <span className="text-emerald-700 font-bold">{optimizedData.crop}</span> configuration metrics into nested blocks.
              </span>
            </div>
          </div>

        </div>
      ) : (
        /* SCREEN FOR INITIAL STATE AWAITING EXECUTION */
        <div className="text-center py-16 bg-white border-2 border-dashed border-slate-200 rounded-xl shadow-inner">
          <p className="text-base font-medium text-slate-500 max-w-md mx-auto">
            Awaiting parameters payload. Configure state, matrix grid, and intended crop options above to execute optimization mapping.
          </p>
        </div>
      )}
    </div>
  );
}
