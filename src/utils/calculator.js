import { geoData, cropBasics, districtPrices } from '../data/cropData';

export const calculateDistrictCrops = (state, district) => {
  const districtInfo = geoData[state]?.[district];
  const prices = districtPrices[district];

  if (!districtInfo || !prices) return [];

  const BASE_WATER_COST = 12000;
  const depletionRate = districtInfo.depletionRate;

  return Object.keys(cropBasics).map((cropName) => {
    const crop = cropBasics[cropName];
    const mandiPrice = prices[cropName];
    
    // Core Formula execution
    const grossReturn = mandiPrice * crop.yieldPerAcre;
    const waterPenalty = Math.round(depletionRate * BASE_WATER_COST * crop.waterMultiplier);
    const netReturn = grossReturn - crop.inputCost - waterPenalty;

    return {
      name: cropName,
      grossReturn,
      inputCost: crop.inputCost,
      waterPenalty,
      netReturn
    };
  }).sort((a, b) => b.netReturn - a.netReturn); // Rank highest net return first
};
