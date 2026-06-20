import React, { useState } from 'react';
import InputScreen from './components/InputScreen';

// 🌐 TRANSLATION DICTIONARY
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
    tableStrain: "Cluster Extraction Penalty",
    tableScore: "Credit Impact",
    tableStatus: "Strategic Advisory Status",
    currentBadge: "Current Choice",
    recBadge: "AI Recommended",
    riskHigh: "❌ High Exhaustion Risk",
    recMoong: "🎯 Highly Recommended",
    recMaize: "⚡ Balanced Rotation Vector",
    recWheat: "⚠️ Conditional Cap",
    mandiNote: "*Note: Credit scores and pricing equivalents are calculated using regional district baseloads cross-referenced with crop extraction coefficients.",
    footerWells: "Tracked Interlocked Wells",
    footerNodes: "Active Sensor Nodes",
    footerEnv: "Environmental Impact Assessment",
    envText: "Grid vectors indicate resource tension caused by deploying configuration metrics into regional nested blocks.",
    awaiting: "Awaiting parameters payload. Configure state, matrix grid, and intended crop options above to execute optimization mapping.",
    // FinTech Additions
    fintechTitle: "🏦 Institutional Credit Underwriting Ledger",
    creditScoreLabel: "AI Eco-Credit Score (Collateral Base)",
    suretyLabel: "Bank Risk Tiering",
    waterSavedLabel: "Hydraulic Reserve Asset",
    cashPayoutLabel: "Projected ESG Subsidy Credit",
    // Data Row Injectors
    cropMoong: "Moong Mung Bean",
    cropMaize: "Maize (Resource Optimized)",
    cropSugarcane: "Sugarcane",
    cropCotton: "Cotton",
    cropWheat: "Wheat (Standard Cycle)",
    waterVeryLow: "Very Low",
    waterLow: "Low",
    waterHigh: "High Perennial",
    waterMod: "Moderate Seasonal",
    mandiMoong: "+12% Premium Yield",
    mandiMaize: "+5% Equilibrium",
    mandiStandard: "Standard Pricing",
    mandiMarket: "Market Standard",
    mandiWheat: "Market Yield"
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
    tableScore: "क्रेडिट प्रभाव",
    tableStatus: "रणनीतिक सलाहकार स्थिति",
    currentBadge: "वर्तमान चयन",
    recBadge: "एआई अनुशंसित",
    riskHigh: "❌ अत्यधिक दोहन का खतरा",
    recMoong: "🎯 अत्यधिक अनुशंसित",
    recMaize: "⚡ संतुलित फसल चक्र",
    recWheat: "⚠️ सशर्त सीमा",
    mandiNote: "*नोट: क्रेडिट स्कोर और मूल्य समतुल्य की गणना क्षेत्रीय जिला बेसलोड और फसल निष्कर्षण गुणांकों के आधार पर की जाती है।",
    footerWells: "निगरानी किए गए जुड़े कुएं",
    footerNodes: "सक्रिय सेंसर नोड्स",
    footerEnv: "सामूहिक पर्यावरणीय भार",
    envText: "ग्रिड वेक्टर क्षेत्रीय ब्लॉकों में कॉन्फ़िगरेशन लागू करने के कारण होने वाले संसाधन तनाव को दर्शाते हैं।",
    awaiting: "पैरामीटर का इंतजार है। अनुकूलन मानचित्रण निष्पादित करने के लिए ऊपर राज्य, ग्रिड और फसल विकल्प चुनें।",
    fintechTitle: "🏦 संस्थागत क्रेडिट हामीदारी बही (FinTech)",
    creditScoreLabel: "एआई इको-क्रेडिट स्कोर (डिजिटल संपार्श्विक)",
    suretyLabel: "बैंक जोखिम टियरिंग",
    waterSavedLabel: "जल परिसंपत्ति संचय",
    cashPayoutLabel: "अनुमानित ईएसजी सब्सिडी क्रेडिट",
    cropMoong: "मूंग (साबुत दाल)",
    cropMaize: "मक्का (संसाधन अनुकूलित)",
    cropSugarcane: "गन्ना",
    cropCotton: "कपास (रुई)",
    cropWheat: "गेहूं (मानक चक्र)",
    waterVeryLow: "बहुत कम",
    waterLow: "कम खपत",
    waterHigh: "अत्यधिक बारहमासी",
    waterMod: "सामान्य मौसमी",
    mandiMoong: "+12% प्रीमियम लाभ",
    mandiMaize: "+5% संतुलित मैच",
    mandiStandard: "मानक बाजार मूल्य",
    mandiMarket: "बाजार मानक",
    mandiWheat: "समतुल्य बाजार उपज"
  }
};

export default function App() {
  const [optimizedData, setOptimizedData] = useState(null);
  const [lang, setLang] = useState('en');

  const t = translations[lang] || translations.en;

  // 🧮 ANALYTICAL SCORING ENGINE
  const calculateDynamicScore = (baseLoad, cropFactor, districtName) => {
    // Add a unique "Geological Variance" based on the district name characters
    const geoVariance = (districtName.length % 7) * 4;
    const rawScore = 900 - ((baseLoad * 3.8) + (cropFactor * 5.2) + geoVariance);
    return Math.max(300, Math.min(880, Math.floor(rawScore)));
  };

  const getRiskTier = (score) => {
    if (score >= 800) return { label: "TIER 1 / ELITE CONSERVATION", color: "text-emerald-400 bg-emerald-950/50 border-emerald-800" };
    if (score >= 720) return { label: "TIER 2 / PRIME ROTATION", color: "text-blue-400 bg-blue-950/50 border-blue-800" };
    if (score >= 650) return { label: "TIER 3 / STABLE RESOURCE", color: "text-sky-400 bg-sky-950/50 border-sky-800" };
    if (score >= 550) return { label: "TIER 4 / HIGH EXTRACTION", color: "text-orange-400 bg-orange-950/50 border-orange-800" };
    return { label: "TIER 5 / CRITICAL EXHAUSTION", color: "text-red-400 bg-red-950/50 border-red-800" };
  };

  const handleOptimizationSubmit = (payload) => {
    const rawCalculatedLoad = payload.metrics.baseLoad + payload.cropMetrics.loadFactor;
    const finalDynamicLoad = Math.min(rawCalculatedLoad, 100);

    let statusLabel = "MODERATE STRAIN";
    let statusColor = "border-amber-600 text-amber-700 bg-amber-50";
    if (finalDynamicLoad > 85) {
      statusLabel = "CRITICAL: COLLAPSE RISK";
      statusColor = "border-red-600 text-red-700 bg-red-50";
    }

    // Generate specific scores for ALL crops for this district to populate the table
    const districtScores = {
      paddy: calculateDynamicScore(payload.metrics.baseLoad, 50, payload.district),
      moong: calculateDynamicScore(payload.metrics.baseLoad, 5, payload.district),
      maize: calculateDynamicScore(payload.metrics.baseLoad, 15, payload.district),
      sugarcane: calculateDynamicScore(payload.metrics.baseLoad, 42, payload.district),
      cotton: calculateDynamicScore(payload.metrics.baseLoad, 20, payload.district),
      wheat: calculateDynamicScore(payload.metrics.baseLoad, 25, payload.district),
    };

    const activeScore = calculateDynamicScore(payload.metrics.baseLoad, payload.cropMetrics.loadFactor, payload.district);
    const tier = getRiskTier(activeScore);

    const loadSaved = Math.max(0, payload.cropMetrics.loadFactor - 5);
    const waterSavedLiters = loadSaved * 12500;
    const cashPayout = Math.floor(waterSavedLiters * 0.14);

    setOptimizedData({
      ...payload,
      calculatedLoad: finalDynamicLoad,
      statusLabel,
      statusColor,
      activeScore,
      tier,
      districtScores,
      waterSavedLiters,
      cashPayout
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12 font-sans">
      
      <div className="flex justify-end gap-2 mb-4">
        <button onClick={() => setLang('en')} className={`px-4 py-1.5 text-sm font-bold rounded-lg border transition-all ${lang === 'en' ? 'bg-blue-600 text-white border-blue-600 shadow-sm' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}`}>English</button>
        <button onClick={() => setLang('hi')} className={`px-4 py-1.5 text-sm font-bold rounded-lg border transition-all ${lang === 'hi' ? 'bg-blue-600 text-white border-blue-600 shadow-sm' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}`}>हिन्दी</button>
      </div>

      <header className="mb-8 border-b border-slate-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-700">{t.title}</h1>
        <p className="text-sm md:text-base text-slate-600 font-medium mt-2">{t.subtitle}</p>
      </header>

      <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <InputScreen onOptimize={handleOptimizationSubmit} currentLang={lang} />
      </div>

      {optimizedData ? (
        <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-md">
          
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-6">
            <h3 className="text-xs font-bold text-slate-400 tracking-wide uppercase">{t.outputTitle}</h3>
            <span className={`text-sm px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider border ${optimizedData.statusColor}`}>
              {optimizedData.statusLabel}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-800 mb-6">{t.gridMatrix}: {optimizedData.district}</h2>

          <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl mb-6 shadow-sm">
            <div className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-2">{t.aiDirective}</div>
            <div className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
              {optimizedData.recommendations ? optimizedData.recommendations[lang] : ""}
            </div>
          </div>

          {/* 🏦 ADVANCED FINTECH SCORECARD (Neutral Analytic Neutrality) */}
          <div className="mb-8 bg-slate-900 text-white rounded-xl p-6 shadow-xl border border-slate-800">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-5">{t.fintechTitle}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">{t.creditScoreLabel}</span>
                <span className={`text-3xl font-black mt-2 block ${optimizedData.activeScore > 750 ? 'text-emerald-400' : optimizedData.activeScore > 650 ? 'text-blue-400' : 'text-orange-400'}`}>
                  {optimizedData.activeScore} <span className="text-xs font-normal text-slate-400">/ 900</span>
                </span>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex flex-col justify-between">
                <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">{t.suretyLabel}</span>
                <span className={`text-xs px-2.5 py-2 rounded font-bold uppercase tracking-wider border text-center mt-2 block ${optimizedData.tier.color}`}>
                  {optimizedData.tier.label}
                </span>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">{t.waterSavedLabel}</span>
                <span className="text-2xl font-black text-blue-400 mt-2 block">{optimizedData.waterSavedLiters.toLocaleString()} L</span>
                <span className="text-xs text-slate-500 block mt-0.5">Hydraulic Asset / H</span>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-emerald-950/30">
                <span className="block text-xs text-emerald-400 font-bold uppercase tracking-wider">{t.cashPayoutLabel}</span>
                <span className="text-3xl font-black text-emerald-400 mt-2 block">₹{optimizedData.cashPayout.toLocaleString()}</span>
                <span className="text-xs text-slate-400 block mt-0.5">Institutional Green Grant</span>
              </div>
            </div>
          </div>

          <div className="mb-8 bg-slate-100 p-5 rounded-xl border border-slate-200">
            <div className="flex justify-between text-sm md:text-base font-bold text-slate-700 mb-2">
              <span>{t.indexLabel} ({optimizedData.metrics.soil})</span>
              <span className={optimizedData.calculatedLoad > 85 ? "text-red-600 font-extrabold" : "text-amber-600 font-extrabold"}>
                {optimizedData.calculatedLoad}% {t.capacity}
              </span>
            </div>
            <div className="w-full bg-slate-200 h-4 rounded-full overflow-hidden">
              <div className={`h-full transition-all duration-700 ease-out ${optimizedData.calculatedLoad > 85 ? 'bg-red-600' : 'bg-amber-500'}`} style={{ width: `${optimizedData.calculatedLoad}%` }}></div>
            </div>
          </div>

          {/* DYNAMIC SYSTEM COMPARISON MATRIX (Shows individual scores for all options) */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm">
            <h4 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-4">Systemic Alternative Credit Analysis</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm md:text-base text-slate-700 min-w-[700px]">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-slate-500 uppercase tracking-wider text-xs font-bold">
                    <th className="pb-3">🧬 {t.tableCrop}</th>
                    <th className="pb-3 text-center">📊 {t.tableScore}</th>
                    <th className="pb-3 text-center">💧 {t.tableWater}</th>
                    <th className="pb-3 text-center">📈 {t.tableStrain}</th>
                    <th className="pb-3 text-right">📋 {t.tableStatus}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {/* Current Active User Selection Row */}
                  <tr className="bg-slate-50 font-medium">
                    <td className="py-4 font-bold flex items-center gap-2 pl-2">
                      {optimizedData.crop} <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-bold">{t.currentBadge}</span>
                    </td>
                    <td className="py-4 text-center font-black text-slate-900">{optimizedData.activeScore}</td>
                    <td className="py-4 text-center">{optimizedData.cropMetrics.waterDemand}</td>
                    <td className="py-4 text-center font-bold text-slate-600">+{optimizedData.cropMetrics.loadFactor}%</td>
                    <td className="py-4 text-right text-xs uppercase font-bold">{optimizedData.calculatedLoad > 85 ? t.riskHigh : "STANDARD"}</td>
                  </tr>
                  {/* Moong AI Target */}
                  <tr className="bg-blue-50/50">
                    <td className="py-4 font-bold text-blue-900 pl-2">{t.cropMoong} <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">{t.recBadge}</span></td>
                    <td className="py-4 text-center font-black text-emerald-600">{optimizedData.districtScores.moong}</td>
                    <td className="py-4 text-center text-blue-700 font-bold">{t.waterVeryLow}</td>
                    <td className="py-4 text-center font-bold text-blue-700">+5%</td>
                    <td className="py-4 text-right text-emerald-600 text-xs font-bold">{t.recMoong}</td>
                  </tr>
                  {/* Other Alternates with District-Specific calculated scores */}
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 pl-2">{t.cropMaize}</td>
                    <td className="py-4 text-center font-black text-blue-500">{optimizedData.districtScores.maize}</td>
                    <td className="py-4 text-center">{t.waterLow}</td>
                    <td className="py-4 text-center">+15%</td>
                    <td className="py-4 text-right text-blue-600 text-xs font-bold">{t.recMaize}</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 pl-2">{t.cropWheat}</td>
                    <td className="py-4 text-center font-black text-sky-600">{optimizedData.districtScores.wheat}</td>
                    <td className="py-4 text-center">{t.waterMod}</td>
                    <td className="py-4 text-center">+25%</td>
                    <td className="py-4 text-right text-sky-600 text-xs font-bold">{t.recWheat}</td>
                  </tr>
                  <tr className="hover:bg-slate-50 opacity-60">
                    <td className="py-4 pl-2">{t.cropSugarcane}</td>
                    <td className="py-4 text-center font-black text-orange-600">{optimizedData.districtScores.sugarcane}</td>
                    <td className="py-4 text-center">{t.waterHigh}</td>
                    <td className="py-4 text-center">+42%</td>
                    <td className="py-4 text-right text-orange-600 text-xs font-bold">HIGH RISK</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">{t.mandiNote}</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-6 border-t border-slate-200">
            <div><span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">{t.footerWells}</span><span className="text-xl font-extrabold text-slate-800 mt-1 block">{optimizedData.metrics.wells} {t.footerNodes}</span></div>
            <div><span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">{t.footerEnv}</span><span className="text-sm text-slate-600 mt-1 block leading-relaxed font-medium">{t.envText}</span></div>
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
