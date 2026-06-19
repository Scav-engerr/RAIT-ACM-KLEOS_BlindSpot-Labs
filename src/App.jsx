import React, { useState } from 'react';
import { optimizeAquiferEquilibrium } from './utils/calculator';
import InputScreen from './components/InputScreen';
import RecommendationCard from './components/RecommendationCard';
import WaterProjectionChart from './components/WaterProjectionChart';
import ComparisonTable from './components/ComparisonTable';

export default function App() {
  const [inputs, setInputs] = useState({ region: 'Ludhiana West', crop: 'Rice' });
  const [aiReport, setAiReport] = useState(null);

  const handleRunAiEngine = () => {
    const report = optimizeAquiferEquilibrium(inputs.region, inputs.crop);
    setAiReport(report);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased pb-12">
      <header className="border-b border-slate-800 bg-slate-950 px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-lg font-mono font-bold tracking-wider text-cyan-400">
          📡 AQUIFER.AI // MULTI-AGENT BLOCK OPTIMIZER
        </h1>
        <span className="px-3 py-1 text-xs font-mono bg-cyan-950 text-cyan-400 border border-cyan-800 rounded">
          CORE V2.5 ACTIVE
        </span>
      </header>

      <main className="max-w-3xl mx-auto px-4 mt-12">
        <InputScreen inputs={inputs} setInputs={setInputs} onExecute={handleRunAiEngine} />

        {aiReport && (
          <div className="mt-8 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-6">
            <RecommendationCard report={aiReport} />
            <WaterProjectionChart index={aiReport.clusterExtractionIndex} />
            <ComparisonTable report={aiReport} currentCrop={inputs.crop} />
          </div>
        )}
      </main>
    </div>
  );
}
