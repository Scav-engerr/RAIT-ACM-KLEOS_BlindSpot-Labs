import React from 'react';
import { geoData } from '../data/cropData';

export default function RecommendationCard({ inputs, results, t }) {
  const districtMeta = geoData[inputs.state][inputs.district];
  const selectedCropData = results.find(c => c.name === inputs.crop);
  const bestCropData = results[0]; // Highest ranked crop
  
  const isSelectedBest = selectedCropData.name === bestCropData.name;
  const alternativeCrop = isSelectedBest ? results[1] : bestCropData; 
  const rupeeGap = alternativeCrop.netReturn - selectedCropData.netReturn;

  const badgeColor = districtMeta.risk === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800';

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Risk Alert Badge banner */}
      <div className={`p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${badgeColor}`}>
        <span className="font-bold tracking-wide uppercase text-sm">⚠️ {t.risk}: {districtMeta.risk === 'Critical' ? t.critical : t.semiCritical}</span>
        <span className="text-sm font-medium">{t.yearsLeft.replace('{years}', districtMeta.yearsLeft)}</span>
      </div>

      {/* Main Choice Financial Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{inputs.crop} ({t.tableNet})</p>
          <p className={`text-3xl font-extrabold mt-1 ${selectedCropData.netReturn < 0 ? 'text-red-600' : 'text-gray-800'}`}>
            ₹{selectedCropData.netReturn.toLocaleString('en-IN')}/acre
          </p>
          <p className="text-xs text-gray-500 mt-2">{t.waterCost}: <span className="text-red-500 font-semibold">₹{selectedCropData.waterPenalty.toLocaleString('en-IN')}</span></p>
        </div>

        <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg">
            🚀 RECOMMENDED
          </div>
          <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">{alternativeCrop.name} ({t.tableNet})</p>
          <p className="text-3xl font-extrabold mt-1 text-emerald-800">
            ₹{alternativeCrop.netReturn.toLocaleString('en-IN')}/acre
          </p>
          <p className="text-xs text-emerald-600 mt-2">{t.waterCost}: ₹{alternativeCrop.waterPenalty.toLocaleString('en-IN')}</p>
        </div>
      </div>

      {/* The Punchline insight banner */}
      {rupeeGap > 0 && (
        <div className="bg-blue-600 text-white p-5 rounded-xl font-bold text-center text-lg shadow-md animate-pulse">
          {t.gapMessage.replace('{gap}', rupeeGap.toLocaleString('en-IN')).replace('{crop}', alternativeCrop.name)}
        </div>
      )}
    </div>
  );
}
