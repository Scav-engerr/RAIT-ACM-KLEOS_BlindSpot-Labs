// 📡 Simulated Data Streams from Multi-Platform Registries (ISRO Bhuvan & CGWB)
export const regionalAquiferGrids = {
  "Ludhiana West": { 
    gridId: "LH-412", 
    activeBorewells: 54, 
    historicalSafeCapacity: 120000, 
    currentGreedyAgentsPercentage: 82 
  },
  "Hisar Central": { 
    gridId: "HS-889", 
    activeBorewells: 38, 
    historicalSafeCapacity: 95000, 
    currentGreedyAgentsPercentage: 45 
  }
};

export const agentCropImpact = {
  Rice:      { label: "Paddy (High Strain)", waterStressWeight: 3.4, regionalPriority: "LOW" },
  Maize:     { label: "Maize (Stabilizer)",  waterStressWeight: 1.0, regionalPriority: "MEDIUM" },
  Moong_Dal: { label: "Moong (Restorative)", waterStressWeight: 0.4, regionalPriority: "CRITICAL" }
};
