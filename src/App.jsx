import React, { useState } from 'react';
import InputScreen from './components/InputScreen';

// 🌐 Translation Dictionary Layer
const translations = {
  en: {
    title: "Aquifer.ai Groundwater Matrix",
    subtitle: "Hydraulic Resource Balancing & Market Revenue Optimizer",
    configTitle: "Configure Parameter Matrices",
    outputTitle: "Network Optimization Output",
    gridMatrix: "Aquifer Grid Matrix",
    aiDirective: "💡 Systemic AI Crop Directive",
    indexLabel: "Cluster Extraction Load Index",
    capacity: "Capacity",
    tableCrop: "Crop Vector",
    tableWater: "Water Demand",
    tableMandi: "Local Mandi Price Equivalence",
    tableStrain: "Cluster Strain Penalty",
    tableStatus: "Strategic Advisory Status",
    currentBadge: "Current",
    riskHigh: "❌ High Exhaustion Risk",
    recMoong: "🎯 Highly Recommended",
    recMaize: "⚡ Balanced Rotation Vector",
    recWheat: "⚠️ Conditional Cap",
    mandiNote: "*Note: Local Mandi price equivalents are calculated using regional wholesale data vectors cross-referenced with resource input cost factors.",
    footerWells: "Tracked Interlocked Wells",
    footerNodes: "Active Sensor Nodes",
    footerEnv: "Collective Environmental Load",
    awaiting: "Awaiting parameters payload. Configure state, matrix grid, and intended crop options above to execute optimization mapping."
  },
  hi: {
    title: "Aquifer.ai भूजल मैट्रिक्स",
    subtitle: "जल संसाधन संतुलन और बाजार राजस्व अनुकूलक",
    configTitle: "पैरामीटर मैट्रिक्स कॉन्फ़िगर करें",
    outputTitle: "नेटवर्क अनुकूलन आउटपुट",
    gridMatrix: "एक्विफर ग्रिड मैट्रिक्स",
    aiDirective: "💡 सिस्टेमिक एआई फसल निर्देश",
    indexLabel: "क्लस्टर निष्कर्षण लोड इंडेक्स",
    capacity: "क्षमता",
    tableCrop: "फसल प्रकार",
    tableWater: "पानी की मांग",
    tableMandi: "स्थानीय मंडी मूल्य समतुल्यता",
    tableStrain: "क्लस्टर तनाव नुकसान",
    tableStatus: "रणनीतिक सलाहकार स्थिति",
    currentBadge: "वर्तमान",
    riskHigh: "❌ अत्यधिक दोहन का खतरा",
    recMoong: "🎯 अत्यधिक अनुशंसित",
    recMaize: "⚡ संतुलित फसल चक्र",
    recWheat: "⚠️ सशर्त सीमा",
    mandiNote: "*नोट: स्थानीय मंडी मूल्य समतुल्य की गणना संसाधन लागत कारकों के साथ क्षेत्रीय थोक डेटा को मिलाकर की जाती है।",
    footerWells: "निगरानी किए गए जुड़े कुएं",
    footerNodes: "सक्रिय सेंसर नोड्स",
    footerEnv: "सामूहिक पर्यावरणीय भार",
    awaiting: "पैरामीटर का इंतजार है। अनुकूलन मानचित्रण निष्पादित करने के लिए ऊपर राज्य, ग्रिड और फसल विकल्प चुनें।"
  },
  pa: {
    title: "Aquifer.ai ਭੂਮੀਗਤ ਪਾਣੀ ਮੈਟ੍ਰਿਕਸ",
    subtitle: "ਪਾਣੀ ਦੇ ਸਰੋਤਾਂ ਦਾ ਸੰਤੁਲਨ ਅਤੇ ਮਾਰਕੀਟ ਮੁਨਾਫਾ ਓਪਟੀਮਾਈਜ਼ਰ",
    configTitle: "ਪੈਰਾਮੀਟਰ ਮੈਟ੍ਰਿਕਸ ਕੌਂਫਿਗਰ ਕਰੋ",
    outputTitle: "ਨੈੱਟਵਰਕ ਓਪਟੀਮਾਈਜ਼ੇਸ਼ਨ ਆਉਟਪੁੱਟ",
    gridMatrix: "ਐਕਵਾਇਰ ਗ੍ਰਿਡ ਮੈਟ੍ਰਿਕਸ",
    aiDirective: "💡 ਸਿਸਟਮਿਕ ਏਆਈ ਫਸਲ ਨਿਰਦੇਸ਼",
    indexLabel: "ਕਲਸਟਰ ਕੱਢਣ ਦਾ ਲੋਡ ਇੰਡੈਕਸ",
    capacity: "ਸਮਰੱਥਾ",
    tableCrop: "ਫਸਲ ਦਾ ਕਿਸਮ",
    tableWater: "ਪਾਣੀ ਦੀ ਮੰਗ",
    tableMandi: "ਸਥਾਨਕ ਮੰਡੀ ਕੀਮਤ ਸਮਾਨਤਾ",
    tableStrain: "ਕਲਸਟਰ ਤਣਾਅ ਨੁਕਸਾਨ",
    tableStatus: "ਰਣਨੀਤਕ ਸਲਾਹਕਾਰ ਸਥਿਤੀ",
    currentBadge: "ਮੌਜੂਦਾ",
    riskHigh: "❌ ਭਾਰੀ ਸ਼ੋਸ਼ਣ ਦਾ ਖਤਰਾ",
    recMoong: "🎯 ਬਹੁਤ ਜ਼ਿਆਦਾ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਗਈ",
    recMaize: "⚡ ਸੰਤੁਲਿਤ ਫਸਲ ਚੱਕਰ",
    recWheat: "⚠️ ਸ਼ਰਤੀਆ ਸੀਮਾ",
    mandiNote: "*ਨੋਟ: ਸਥਾਨਕ ਮੰਡੀ ਦੇ ਭਾਅ ਦੀ ਗਣਨਾ ਖਰਚੇ ਦੇ ਕਾਰਕਾਂ ਦੇ ਨਾਲ ਖੇਤਰੀ ਥੋਕ ਡੇਟਾ ਨੂੰ ਮਿਲਾ ਕੇ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
    footerWells: "ਟਰੈਕ ਕੀਤੇ ਜੁੜੇ ਖੂਹ",
    footerNodes: "ਸਰਗਰਮ ਸੈਂਸਰ ਨੋਡਸ",
    footerEnv: "ਸਾਮੂਹਿਕ ਵਾਤਾਵਰਣ ਲੋਡ",
    awaiting: "ਪੈਰਾਮੀਟਰਾਂ ਦੀ ਉਡੀਕ ਹੈ। ਓਪਟੀਮਾਈਜ਼ੇਸ਼ਨ ਮੈਪਿੰਗ ਚਲਾਉਣ ਲਈ ਉੱਪਰ ਰਾਜ, ਗ੍ਰਿਡ ਅਤੇ ਫਸਲ ਦੀ ਚੋਣ ਕਰੋ।"
  }
};

export default function App() {
  const [optimizedData, setOptimizedData] = useState(null);
  const [lang, setLang] = useState('en'); // Default language state

  const t = translations[lang];

  const handleOptimizationSubmit = (payload) => {
    const rawCalculatedLoad = payload.metrics.baseLoad + payload.cropMetrics.loadFactor;
    const finalDynamicLoad = Math.min(rawCalculatedLoad, 100);

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
      {/* LANGUAGE TRANSLATION BUTTONS BAR */}
      <div className="flex justify-end gap-2 mb-4">
        <button onClick={() => setLang('en')} className={`px-3 py-1 text-sm font-bold rounded border ${lang === 'en' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300'}`}>English</button>
        <button onClick={() => setLang('hi')} className={`px-3 py-1 text-sm font-bold rounded border ${lang === 'hi' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300'}`}>हिन्दी</button>
        <button onClick={() => setLang('pa')} className={`px-3 py-1 text-sm font-bold rounded border ${lang === 'pa' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300'}`}>ਪੰਜਾਬੀ</button>
      </div>

      {/* HEADER SECTION */}
      <header className="mb-8 border-b border-slate-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-700 font-sans">
          {t.title}
        </h1>
        <p className="text-sm md:text-base text-slate-600 font-medium mt-2">
          {t.subtitle}
        </p>
      </header>

      {/* PARAMETER CONFIGURATION PANEL */}
      <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <InputScreen onOptimize={handleOptimizationSubmit} currentLang={lang} />
      </div>

      {/* CONDITIONALLY RENDER OUTPUT PANEL */}
      {optimizedData ? (
        <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-md transition-all duration-300">
          
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-6">
            <h3 className="text-xl font-bold text-slate-800 tracking-wide uppercase text-sm">
              {t.outputTitle}
            </h3>
            <span className={`text-sm px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider border ${optimizedData.statusColor}`}>
              {optimizedData.statusLabel}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-800 mb-6">
            {t.gridMatrix}: {optimizedData.district}
          </h2>

          {/* RECOMMENDATION CALLOUT BLOCK */}
          <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl mb-8 shadow-sm">
            <div className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-2">
              {t.aiDirective}
            </div>
            <div className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
              {optimizedData.recommendations[lang]} {/* Reads dynamic language translation text */}
            </div>
          </div>

          {/* DYNAMIC GROUNDWATER LOAD INDEX GRAPHICS */}
          <div className="mb-8 bg-slate-100 p-5 rounded-xl border border-slate-200">
            <div className="flex justify-between text-sm md:text-base font-bold text-slate-700 mb-2">
              <span>{t.indexLabel} ({optimizedData.metrics.soil})</span>
              <span className={optimizedData.calculatedLoad > 85 ? "text-red-600 font-extrabold" : "text-amber-600 font-extrabold"}>
                {optimizedData.calculatedLoad}% {t.capacity}
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

          {/* DYNAMIC COMPARISON BREAKDOWN MODULE */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-blue-800 uppercase tracking-wider">
                {t.title}
              </h4>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-sm md:text-base text-slate-700">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-slate-500 uppercase tracking-wider text-xs font-bold">
                    <th className="pb-3 font-semibold">{t.tableCrop}</th>
                    <th className="pb-3 font-semibold text-center">{t.tableWater}</th>
                    <th className="pb-3 font-semibold text-center">{t.tableMandi}</th>
                    <th className="pb-3 font-semibold text-center">{t.tableStrain}</th>
                    <th className="pb-3 font-semibold text-right">{t.tableStatus}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  
                  {/* SELECTED CROP VECTOR ROW */}
                  <tr className="bg-red-50 text-slate-900 font-medium">
                    <td className="py-4 font-bold flex items-center gap-2 text-base pl-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                      {optimizedData.crop} <span className="text-xs bg-red-100 text-red-800 border border-red-200 px-2 py-0.5 rounded-full font-bold">{t.currentBadge}</span>
                    </td>
                    <td className="py-4 text-center font-bold text-red-600 text-base">{optimizedData.cropMetrics.waterDemand}</td>
                    <td className="py-4 text-center font-medium text-slate-600">Baseline MSP</td>
                    <td className="py-4 text-center font-bold text-red-600">+{optimizedData.cropMetrics.loadFactor}%</td>
                    <td className="py-4 text-right font-bold text-red-600 text-sm">{t.riskHigh}</td>
                  </tr>

                  {/* RESTORATIVE ALTERNATIVE OPTION 1 */}
                  <tr className="hover:bg-slate-50 transition-colors font-medium">
                    <td className="py-4 text-slate-900 font-bold text-base pl-2">Moong Mung Bean</td>
                    <td className="py-4 text-center text-blue-600 font-bold text-base">Very Low</td>
                    <td className="py-4 text-center text-blue-700 font-extrabold text-base bg-blue-50/50">+12% Premium Mandi</td>
                    <td className="py-4 text-center text-blue-600 font-bold">+5%</td>
                    <td className="py-4 text-right text-blue-700 font-bold text-sm">{t.recMoong}</td>
                  </tr>

                  {/* RESOURCE OPTIMIZED ALTERNATIVE OPTION 2 */}
                  <tr className="hover:bg-slate-50 transition-colors font-medium">
                    <td className="py-4 text-slate-900 text-base pl-2">Maize</td>
                    <td className="py-4 text-center text-sky-600 font-bold text-base">Low</td>
                    <td className="py-4 text-center text-sky-700 font-bold text-base">+5% Match</td>
                    <td className="py-4 text-center text-sky-600 font-medium">+15%</td>
                    <td className="py-4 text-right text-sky-700 font-bold text-sm">{t.recMaize}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 leading-normal font-medium">
              {t.mandiNote}
            </div>
          </div>

          {/* STATS METADATA BAR FOOTER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-6 border-t border-slate-200">
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">{t.footerWells}</span>
              <span className="text-xl font-extrabold text-slate-800 mt-1 block">
                {optimizedData.metrics.wells} {t.footerNodes}
              </span>
            </div>
          </div>

        </div>
      ) : (
        <div className="text-center py-16 bg-white border-2 border-dashed border-slate-200 rounded-xl shadow-inner">
          <p className="text-base font-medium text-slate-500 max-w-md mx-auto">{t.awaiting}</p>
        </div>
      )}
    </div>
  );
}
