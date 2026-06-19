import React from 'react';

export default function ComparisonTable({ results, selectedCrop, t, districtName }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-w-2xl mx-auto mt-8">
      <div className="p-5 bg-gray-50 border-b">
        <h3 className="font-bold text-gray-800 text-lg">{t.comparisonTitle.replace('{district}', districtName)}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-xs uppercase font-bold tracking-wider">
              <th className="p-4">{t.tableCrop}</th>
              <th className="p-4 text-right">{t.tableGross}</th>
              <th className="p-4 text-right">{t.tableInput}</th>
              <th className="p-4 text-right text-red-600">{t.tablePenalty}</th>
              <th className="p-4 text-right">{t.tableNet}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {results.map((crop) => {
              const isSelected = crop.name === selectedCrop;
              return (
                <tr key={crop.name} className={`${isSelected ? 'bg-amber-50 font-bold border-l-4 border-amber-500' : 'hover:bg-gray-50'}`}>
                  <td className="p-4 text-gray-900 flex items-center gap-1">
                    {crop.name} {isSelected && <span className="text-xs text-amber-700 bg-amber-200 px-1.5 py-0.5 rounded">(Your Pick)</span>}
                  </td>
                  <td className="p-4 text-right text-gray-600">₹{crop.grossReturn.toLocaleString('en-IN')}</td>
                  <td className="p-4 text-right text-gray-600">₹{crop.inputCost.toLocaleString('en-IN')}</td>
                  <td className="p-4 text-right text-red-500 font-medium">−₹{crop.waterPenalty.toLocaleString('en-IN')}</td>
                  <td className={`p-4 text-right font-bold ${crop.netReturn < 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                    ₹{crop.netReturn.toLocaleString('en-IN')}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
