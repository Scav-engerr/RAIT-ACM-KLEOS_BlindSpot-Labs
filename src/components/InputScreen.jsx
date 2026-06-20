import React, { useState } from 'react';
import { statesData, cropsData } from '../data/cropData';

export default function InputScreen({ onOptimize }) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("");

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict(""); // Reset district when state changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedState || !selectedDistrict || !selectedCrop) {
      alert("Please select all parameters to calibrate the grid optimization engine.");
      return;
    }

    // Grab configuration metrics
    const districtMetrics = statesData[selectedState][selectedDistrict];
    const cropMetrics = cropsData[selectedCrop];

    // Formulate localized dynamic recommendation text
    const aiRecommendation = `PROPOSED TRANSITION PATHWAY: Based on the ${districtMetrics.soil} profile of ${selectedDistrict}, continuing with ${selectedCrop} will push the collective strain index past sustainable caps. The game-theory optimization engine recommends transitioning this cluster vector to: ${cropMetrics.recommendation}`;

    // Pass everything up to your calculator/output screens
    onOptimize({
      state: selectedState,
      district: selectedDistrict,
      crop: selectedCrop,
      metrics: districtMetrics,
      cropMetrics: cropMetrics,
      recommendationText: aiRecommendation
    });
  };

  return (
    <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 text-slate-100">
      <h2 className="text-sm font-mono tracking-wider text-cyan-400 uppercase mb-4">// Step 1: Calibrate Node Parameters</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* STATE DROPDOWN */}
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-2">Select State Base</label>
            <select 
              value={selectedState} 
              onChange={handleStateChange}
              className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-slate-200 focus:border-cyan-400 outline-none"
            >
              <option value="">-- Choose State --</option>
              {Object.keys(statesData).map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          {/* DISTRICT DROPDOWN (Dependent on State) */}
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-2">Select Shared Aquifer Region</label>
            <select 
              value={selectedDistrict} 
              onChange={(e) => setSelectedDistrict(e.target.value)}
              disabled={!selectedState}
              className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-slate-200 focus:border-cyan-400 outline-none disabled:opacity-40"
            >
              <option value="">-- Choose District/Grid --</option>
              {selectedState && Object.keys(statesData[selectedState]).map(district => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>

          {/* CROP DROPDOWN */}
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-2">Your Planned Single-Node Crop</label>
            <select 
              value={selectedCrop} 
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-slate-200 focus:border-cyan-400 outline-none"
            >
              <option value="">-- Choose Intended Crop --</option>
              {Object.keys(cropsData).map(crop => (
                <option key={crop} value={crop}>{crop}</option>
              ))}
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full py-3 px-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono tracking-wide rounded text-center transition-colors uppercase text-sm"
        >
          Execute Grid Network Optimization &rarr;
        </button>
      </form>
    </div>
  );
}
