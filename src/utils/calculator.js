import React, { useState } from 'react';
import { translations } from './data/translations';
import { calculateDistrictCrops } from './utils/calculator';
import InputScreen from './components/InputScreen';
import RecommendationCard from './components/RecommendationCard';
import ComparisonTable from './components/ComparisonTable';
import WaterProjectionChart from './components/WaterProjectionChart';

export default function App() {
  const [lang, setLang] = useState('en');
  const [inputs, setInputs] = useState({ state: '', district: '', crop: '' });
  const [calculatedResults, setCalculatedResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const t = translations[lang];

  const handleCalculate = () => {
    const data = calculateDistrictCrops(inputs.state, inputs.district);
    setCalculatedResults(data);
    setShowResults(true);
  };

  const handleReset = () => {
    setInputs({ state: '', district: '', crop: '' });
    setShowResults(false);
    setCalculatedResults(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-12">
      {/* Navbar with localized toggle */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-extrabold text-emerald-700 tracking-tight flex items-center gap-2">
              💧 {t.title}
            </h1>
          </div>
          <button 
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="px-4 py-1.5 border border-slate-300 rounded-lg bg-slate-100 hover:bg-slate-200 text-sm font-bold transition"
          >
            {lang === 'en' ? 'हिन्दी' : 'English'}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-8">
        {!showResults && (
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-gray-800">{t.subtitle}</h2>
          </div>
        )}

        {!showResults ? (
          <InputScreen 
            inputs={inputs} 
            setInputs={setInputs} 
            onCalculate={handleCalculate} 
            t={t} 
          />
        ) : (
          <div className="animate-fadeIn">
            {/* Back Button */}
            <button 
              onClick={handleReset}
              className="mb-6 text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              ← Change District / Crop
            </button>
            
            <RecommendationCard 
              inputs={inputs} 
              results={calculatedResults} 
              t={t} 
            />

            {/* 👇 EDIT 2: Drop the new component right here */}
            <WaterProjectionChart 
              inputs={inputs}
              results={calculatedResults}
              t={t}
            />
            
            <ComparisonTable 
              results={calculatedResults} 
              selectedCrop={inputs.crop} 
              districtName={inputs.district}
              t={t} 
            />
          </div>
        )}
      </main>
    </div>
  );
}
