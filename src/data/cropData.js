export const geoData = {
  Punjab: {
    Ludhiana: { depletionRate: 0.9, risk: 'Critical', yearsLeft: 15 },
    Sangrur: { depletionRate: 1.1, risk: 'Critical', yearsLeft: 12 }
  },
  Haryana: {
    Hisar: { depletionRate: 0.4, risk: 'Semi-Critical', yearsLeft: 35 },
    Karnal: { depletionRate: 0.7, risk: 'Critical', yearsLeft: 18 }
  },
  Rajasthan: {
    Ganganagar: { depletionRate: 0.5, risk: 'Semi-Critical', yearsLeft: 28 },
    Jaipur: { depletionRate: 0.8, risk: 'Critical', yearsLeft: 16 }
  }
};

export const cropBasics = {
  Rice: { yieldPerAcre: 25, inputCost: 22000, waterMultiplier: 3.2 },
  Wheat: { yieldPerAcre: 20, inputCost: 18000, waterMultiplier: 1.8 },
  Bajra: { yieldPerAcre: 12, inputCost: 8000, waterMultiplier: 0.6 },
  Maize: { yieldPerAcre: 22, inputCost: 14000, waterMultiplier: 1.2 },
  Cotton: { yieldPerAcre: 8, inputCost: 20000, waterMultiplier: 2.0 },
  "Moong Dal": { yieldPerAcre: 5, inputCost: 11000, waterMultiplier: 0.5 },
  Sugarcane: { yieldPerAcre: 350, inputCost: 45000, waterMultiplier: 3.8 }
};

// Simulated District Mandi Prices (per Quintal) to add localized variance
export const districtPrices = {
  Ludhiana: { Rice: 2200, Wheat: 2300, Bajra: 2100, Maize: 2000, Cotton: 7000, "Moong Dal": 7500, Sugarcane: 380 },
  Sangrur: { Rice: 2180, Wheat: 2300, Bajra: 2050, Maize: 1980, Cotton: 6900, "Moong Dal": 7400, Sugarcane: 380 },
  Hisar: { Rice: 2300, Wheat: 2275, Bajra: 2200, Maize: 2050, Cotton: 7200, "Moong Dal": 7600, Sugarcane: 375 },
  Karnal: { Rice: 2250, Wheat: 2300, Bajra: 2150, Maize: 2000, Cotton: 7100, "Moong Dal": 7500, Sugarcane: 380 },
  Ganganagar: { Rice: 2400, Wheat: 2250, Bajra: 2250, Maize: 2100, Cotton: 7300, "Moong Dal": 7700, Sugarcane: 370 },
  Jaipur: { Rice: 2450, Wheat: 2260, Bajra: 2300, Maize: 2150, Cotton: 7250, "Moong Dal": 7800, Sugarcane: 370 }
};
