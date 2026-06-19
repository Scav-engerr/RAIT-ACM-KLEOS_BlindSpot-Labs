import React from 'react';
import { geoData, cropBasics } from '../data/cropData';

export default function InputScreen({ inputs, setInputs, onCalculate, t }) {
  const states = Object.keys(geoData);
  const districts = inputs.state ? Object.keys(geoData[inputs.state]) : [];
  const crops = Object.keys(cropBasics);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md mx-auto border border-gray-100">
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.state}</label>
        <select 
          className="w-full p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
          value={inputs.state}
          onChange={(e) => setInputs({ ...inputs, state: e.target.value, district: '' })}
        >
          <option value="">-- Select --</option>
          {states.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.district}</label>
        <select 
          className="w-full p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
          disabled={!inputs.state}
          value={inputs.district}
          onChange={(e) => setInputs({ ...inputs, district: e.target.value })}
        >
          <option value="">-- Select --</option>
          {districts.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.crop}</label>
        <select 
          className="w-full p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
          disabled={!inputs.district}
          value={inputs.crop}
          onChange={(e) => setInputs({ ...inputs, crop: e.target.value })}
        >
          <option value="">-- Select --</option>
          {crops.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <button
        onClick={onCalculate}
        disabled={!inputs.state || !inputs.district || !inputs.crop}
        className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition dynamic-shadow disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {t.btnCalculate}
      </button>
    </div>
  );
}
