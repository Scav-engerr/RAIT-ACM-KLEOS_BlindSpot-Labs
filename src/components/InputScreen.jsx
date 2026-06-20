import React from 'react';

const regionalDatabase = {
  districts: {
    "Ludhiana West": { soil: "Alluvial Matrix", wells: 38, baseLoad: 50 },
    "Sangrur Central": { soil: "Heavy Clay Loam", wells: 52, baseLoad: 55 },
    "Kurukshetra North": { soil: "Sandy Loam Matrix", wells: 31, baseLoad: 45 },
    "Karnal Basin": { soil: "Alluvial Silt", wells: 35, baseLoad: 48 }
  },
  crops: {
    "Paddy / Rice": { waterDemand: "Critical / Flood", loadFactor: 50 },
    "Sugarcane": { waterDemand: "High Perennial", loadFactor: 42 },
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

    // Multilingual AI Text Output Bundle
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
        <div>
          <label className="block text-sm md:text-base font-bold text-slate-700 mb-2">{it.labelState}</label>
          <select value={selectedState} onChange={(e) => { setSelectedState(e.target.value); setSelectedDistrict(''); }} className="w-full bg-slate-50 border-2 border-slate-300 text-slate-900 rounded-lg p-3 text-base font-medium focus:border-blue-500 focus:outline-none">
            <option value="">{it.chooseState}</option>
            <option value="Punjab">Punjab</option>
            <option value="Haryana">Haryana</option>
          </select>
        </div>

        <div>
          <label className="block text-sm md:text-base font-bold text-slate-700 mb-2">{it.labelDistrict}</label>
          <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} disabled={!selectedState} className="w-full bg-slate-50 border-2 border-slate-300 text-slate-900 rounded-lg p-3 text-base font-medium focus:border-blue-500 focus:outline-none disabled:opacity-50">
            <option value="">{it.chooseDistrict}</option>
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

        <div>
          <label className="block text-sm md:text-base font-bold text-slate-700 mb-2">{it.labelCrop}</label>
          <select value={selectedCrop} onChange={(e) => setSelectedCrop(e.target.value)} className="w-full bg-slate-50 border-2 border-slate-300 text-slate-900 rounded-lg p-3 text-base font-medium focus:border-blue-500 focus:outline-none">
            <option value="">{it.chooseCrop}</option>
            <option value="Paddy / Rice">Paddy / Rice</option>
            <option value="Sugarcane">Sugarcane</option>
            <option value="Cotton">Cotton</option>
          </select>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex justify-end">
        <button onClick={handleOptimizeClick} disabled={!selectedDistrict || !selectedCrop} className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-3.5 rounded-lg shadow-md transition-all duration-200 disabled:opacity-40">
          {it.button}
        </button>
      </div>
    </div>
  );
}
