import { regionalAquiferGrids, agentCropImpact } from '../data/cropData';

export const optimizeAquiferEquilibrium = (region, userCropChoice) => {
  const grid = regionalAquiferGrids[region];
  const userImpact = agentCropImpact[userCropChoice];

  if (!grid || !userImpact) return null;

  const greedyWellsCount = Math.round(grid.activeBorewells * (grid.currentGreedyAgentsPercentage / 100));
  const compliantWellsCount = grid.activeBorewells - greedyWellsCount;
  
  let totalDistributedDrain = (greedyWellsCount * 3.4) + (compliantWellsCount * 0.8);
  
  if (userCropChoice === "Rice") {
    totalDistributedDrain += 2.6; 
  }

  const clusterExtractionIndex = Math.min(Math.round((totalDistributedDrain / 110) * 100), 100);

  let stabilityStatus = "";
  let operationalDirective = "";
  let clusterImpactMessage = "";

  if (clusterExtractionIndex > 75) {
    stabilityStatus = "CRITICAL: COLLAPSE RISK DETECTED";
    clusterImpactMessage = `Your shared aquifer grid (${grid.gridId}) is experiencing high-velocity depletion due to severe flood-irrigation saturation in neighboring nodes.`;
    operationalDirective = `The system has flagged your farm coordinates as a PRIME PIVOT NODE. To balance Grid ${grid.gridId} back under safe carrying thresholds, a localized 22% shift in the collective crop layout is required. Pivoting your node to a Restorative crop stabilizes the local hydraulic ecosystem pressure.`;
  } else {
    stabilityStatus = "EQUILIBRIUM: RECHARGE SUSTAINABLE";
    clusterImpactMessage = `The community extraction signature matches safe sub-surface water retention capacities.`;
    operationalDirective = "Resource footprint sustainable. The AI Engine clears your planned seasonal footprint for production without requiring cooperative node shifts.";
  }

  return {
    gridId: grid.gridId,
    activeBorewells: grid.activeBorewells,
    clusterExtractionIndex,
    stabilityStatus,
    clusterImpactMessage,
    operationalDirective
  };
};
