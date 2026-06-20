import React, { useState } from 'react';
import { getDistrictData, getCropMetrics } from '../data/cropData';

export default function InputScreen({ onOptimize }) {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');

  const handleOptimizeClick = () => {
    if (!selectedDistrict || !selectedCrop) return;

    const metrics = getDistrictData(selectedDistrict);
    const cropMetrics = getCropMetrics(selectedCrop);

    // Build the recommendation text customized for the district
    const recommendationText = `To prevent complete aquifer collapse in ${selectedDistrict}, the systemic directive recommends transitioning from high-volume ${selectedCrop} flood irrigation over to leguminous Moong (Mung Bean). This action reduces critical cluster extraction rates immediately while securing a localized net profit increase at regional mandis.`;

    onOptimize({
      district: selectedDistrict,
      crop: selectedCrop,
      metrics,
      cropMetrics,
      recommendationText
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-blue-900 uppercase tracking-wider mb-4">
        Configure Parameter Matrices
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* STATE SELECTION DROP DOWN */}
        <div>
          <label className="block text-sm md:text-base font-bold text-slate-700 mb-2">
            Select State Region
          </label>
          <select 
            value={selectedState} 
            onChange={(e) => { setSelectedState(e.target.value); setSelectedDistrict(''); }}
            className="w-full bg-slate-50 border-2 border-slate-300 text-slate-900 rounded-lg p-3 text-base font-medium focus:border-blue-500 focus:outline-none transition-colors"
          >
            <option value="">-- Choose State --</option>
            <option value="Punjab">Punjab</option>
            <option value="Haryana">Haryana</option>
          </select>
        </div>

        {/* DISTRICT SELECTION DROP DOWN */}
        <div>
          <label className="block text-sm md:text-base font-bold text-slate-700 mb-2">
            Select Aquifer District Grid
          </label>
          <select 
            value={selectedDistrict} 
            onChange={(e) => setSelectedDistrict(e.target.value)}
            disabled={!selectedState}
            className="w-full bg-slate-50 border-2 border-slate-300 text-slate-900 rounded-lg p-3 text-base font-medium focus:border-blue-500 focus:outline-none transition-colors disabled:opacity-50"
          >
            <option value="">-- Choose District --</option>
            {selectedState === 'Punjab' && (
              <>
                <option value="Ludhiana West">Ludhiana West</option>
                <option value="Sangrur Central">Sangrur Central</option>
              </>
            )}
            {selectedState === 'Haryana' && (
              <>
                <option value="Kurukshetra North">Kurukshetra North</option>
                <option value="Karnal Basin">Karnal Basin</option>
              </>
            )}
          </select>
        </div>

        {/* CROP SELECTION DROP DOWN */}
        <div>
          <label className="block text-sm md:text-base font-bold text-slate-700 mb-2">
            Intended Crop Vector
          </label>
          <select 
            value={selectedCrop} 
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="w-full bg-slate-50 border-2 border-slate-300 text-slate-900 rounded-lg p-3 text-base font-medium focus:border-blue-500 focus:outline-none transition-colors"
          >
            <option value="">-- Choose Target Crop --</option>
            <option value="Paddy / Rice">Paddy / Rice</option>
            <option value="Sugarcane">Sugarcane</option>
            <option value="Cotton">Cotton</option>
          </select>
        </div>
      </div>

      {/* BIG HIGH-VISIBILITY BUTTON */}
      <div className="pt-4 border-t border-slate-100 flex justify-end">
        <button 
          onClick={handleOptimizeClick}
          disabled={!selectedDistrict || !selectedCrop}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-3.5 rounded-lg shadow-md transition-all duration-200 disabled:opacity-40 disabled:hover:bg-blue-600"
        >
          Execute Matrix Optimization
        </button>
      </div>
    </div>
  );
}
