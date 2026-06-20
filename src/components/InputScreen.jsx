import React from 'react';

// Maintained 8 Districts and 5 Target Input Crops Dataset
const regionalDatabase = {
  districts: {
    // Punjab Grids
    "Ludhiana West": { soil: "Alluvial Matrix", wells: 38, baseLoad: 50 },
    "Sangrur Central": { soil: "Heavy Clay Loam", wells: 52, baseLoad: 55 },
    "Patiala East": { soil: "Silt Alluvium", wells: 44, baseLoad: 52 },
    "Firozpur Border Grid": { soil: "Sandy Loam Matrix", wells: 29, baseLoad: 42 },
    
    // Haryana Grids
    "Kurukshetra North": { soil: "Sandy Loam Matrix", wells: 31, baseLoad: 45 },
    "Karnal Basin": { soil: "Alluvial Silt", wells: 35, baseLoad: 48 },
    "Kaithal Central": { soil: "Clay Loam", wells: 48, baseLoad: 51 },
    "Ambala Foothills": { soil: "Loamy Sand", wells: 26, baseLoad: 38 }
  },
  crops: {
    "Paddy / Rice": { waterDemand: "Critical / Flood", loadFactor: 50 },
    "Sugarcane": { waterDemand: "High Perennial", loadFactor: 42 },
    "Wheat (Standard Cycle)": { waterDemand: "Moderate Seasonal", loadFactor: 25 },
    "Maize (Resource Optimized)": { waterDemand: "Low Deficit", loadFactor: 15 },
    "Cotton": { waterDemand: "Moderate Seasonal", loadFactor: 20 }
  }
};

const inputTranslations = {
  en: { header: "Configure Parameter Matrices", labelState: "Select State Region", labelDistrict: "Select Aquifer District Grid", labelCrop: "Intended Crop Vector", button: "Execute Matrix Optimization", chooseState: "-- Choose State --", chooseDistrict: "-- Choose District --", chooseCrop: "-- Choose Target Crop --" },
  hi: { header: "पैरामीटर मैट्रिक्स कॉन्फ़िगर करें", labelState: "राज्य क्षेत्र का चयन करें", labelDistrict: "एक्विफर जिला ग्रिड चुनें", labelCrop: "लक्ष्य फसल प्रकार", button: "मैट्रिक्स अनुकूलन निष्पादित करें", chooseState: "-- राज्य चुनें --", chooseDistrict: "-- जिला चुनें --", chooseCrop: "-- फसल चुनें --" },
  pa: { header: "ਪੈਰਾਮੀਟਰ ਮੈਟ੍ਰਿਕਸ ਕੌਂਫਿਗਰ ਕਰੋ", labelState: "ਰਾਜ ਖੇਤਰ ਦੀ ਚੋਣ ਕਰੋ", labelDistrict: "ਐਕਵਾਇਰ ਜ਼ਿਲ੍ਹਾ ਗ੍ਰਿਡ ਚੁਣੋ", labelCrop: "ਲਕਸ਼ ਫਸਲ ਦਾ ਕਿਸਮ", button: "ਮੈਟ੍ਰਿਕਸ ਓਪਟੀਮਾਈਜ਼ੇਸ਼ਨ ਚਲਾਓ", chooseState: "-- ਰਾਜ ਚੁਣੋ --", chooseDistrict: "-- ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ --", chooseCrop: "-- ਫਸਲ ਚੁਣੋ --" }
};

export default function InputScreen({ onOptimize, currentLang }) {
  const [selectedState, setSelectedState] = React.useState('');
  const [selectedDistrict, setSelectedDistrict] = React.useState('');
  const [selectedCrop, setSelectedCrop] = React.useState('');

  const it = inputTranslations[currentLang || 'en'];

  const handleOptimizeClick = () => {
    const metrics = regionalDatabase.districts[selectedDistrict];
    const cropMetrics = regionalDatabase.crops[selectedCrop];

    if (!metrics || !cropMetrics) return;

    const recommendations = {
      en: `To prevent complete aquifer collapse in ${selectedDistrict}, the systemic directive recommends transitioning from high-volume ${selectedCrop} configurations over to leguminous Moong (Mung Bean). This action reduces critical cluster extraction rates immediately while securing a localized net profit increase at regional mandis.`,
      hi: `${selectedDistrict} में भूजल को पूरी तरह से नष्ट होने से बचाने के लिए, एआई निर्देश अत्यधिक पानी लेने वाली ${selectedCrop} की जगह मूंग की दाल बोने की सलाह देता है। यह कदम पानी की खपत को तुरंत कम करता है और स्थानीय मंडियों में मुनाफे को बढ़ाता है।`,
      pa: `${selectedDistrict} ਵਿੱਚ ਜ਼ਮੀਨ ਹੇਠਲੇ ਪਾਣੀ ਦੇ ਮੁਕੰਮਲ ਖਾਤਮੇ ਨੂੰ ਰੋਕਣ ਲਈ, ਏਆਈ ਨਿਰਦੇਸ਼ ਵੱਧ ਪਾਣੀ ਲੈਣ ਵਾਲੀ ${selectedCrop} ਦੀ ਬਜਾਏ ਮੂੰਗੀ ਦੀ ਦਾਲ ਬੀਜਣ ਦੀ ਸਲਾਹ ਦਿੰਦਾ ਹੈ। ਇਹ ਕਦਮ ਪਾਣੀ ਦੀ ਖਪਤ ਨੂੰ ਤੁਰੰਤ ਘਟਾਉਂਦਾ ਹੈ ਅਤੇ ਸਥਾਨਕ ਮੰਡੀਆਂ ਵਿੱਚ ਮੁਨਾਫੇ ਨੂੰ ਵਧਾਉਂਦਾ ਹੈ।`
    };

    onOptimize({
      district: selectedDistrict,
      crop: selectedCrop,
      metrics,
      cropMetrics,
      recommendations
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-blue-900 uppercase tracking-wider mb-4">{it.header}</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* STATE SELECTION */}
        <div>
          <label className="block text-sm md:text-base font-bold text-slate-700 mb-2">{it.labelState}</label>
          <select value={selectedState} onChange={(e) => { setSelectedState(e.target.value); setSelectedDistrict(''); }} className="w-full bg-slate-50 border-2 border-slate-300 text-slate-900 rounded-lg p-3 text-base font-medium focus:border-blue-500 focus:outline-none">
            <option value="">{it.chooseState}</option>
            <option value="Punjab">Punjab</option>
            <option value="Haryana">Haryana</option>
          </select>
        </div>

        {/* DISTRICT SELECTION */}
        <div>
          <label className="block text-sm md:text-base font-bold text-slate-700 mb-2">{it.labelDistrict}</label>
          <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} disabled={!selectedState} className="w-full bg-slate-50 border-2 border-slate-300 text-slate-900 rounded-lg p-3 text-base font-medium focus:border-blue-500 focus:outline-none disabled:opacity-50">
            <option value="">{it.chooseDistrict}</option>
            {selectedState === 'Punjab' && (
              <>
                <option value="Ludhiana West">Ludhiana West</option>
                <option value="Sangrur Central">Sangr
