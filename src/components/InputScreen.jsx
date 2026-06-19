import React from 'react';

export default function InputScreen({ inputs, setInputs, onExecute }) {
  return (
    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl">
      <h2 className="text-sm font-mono tracking-widest text-slate-400 mb-6 uppercase">// Step 1: Scan Grid Parameters</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-mono text-cyan-400 mb-2 uppercase">Select Shared Aquifer Region</label>
          <select 
            className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-500 font-medium font-sans"
            value={inputs.region}
            onChange={(e) => setInputs({...inputs, region: e.target.value})}
          >
            <option value="Ludhiana West">Ludhiana West (Grid: LH-412)</option>
            <option value="Hisar Central">Hisar Central (Grid: HS-889)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono text-cyan-400 mb-2 uppercase">Your Planned Single-Node Crop</label>
          <select 
            className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-500 font-medium font-sans"
            value={inputs.crop}
            onChange={(e) => setInputs({...inputs, crop: e.target.value})}
          >
            <option value="Rice">Paddy / Rice (Flood-Irrigation)</option>
            <option value="Maize">Maize (Balanced Matrix)</option>
            <option value="Moong_Dal">Moong Dal (Restorative Crop)</option>
          </select>
        </div>
      </div>

      <button 
        onClick={onExecute}
        className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-mono font-bold uppercase p-4 rounded-xl transition duration-200 tracking-wider shadow-lg shadow-cyan-500/20"
      >
        Execute Grid Network Optimization →
      </button>
    </div>
  );
}
