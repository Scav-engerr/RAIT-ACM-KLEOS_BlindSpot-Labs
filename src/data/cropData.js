export const statesData = {
  "Punjab": {
    "Ludhiana West (Grid: LH-412)": {
      wells: 54,
      soil: "Alluvial / Sandy Loom",
      baseLoad: 92,
      riskLevel: "CRITICAL"
    },
    "Amritsar South (Grid: AS-109)": {
      wells: 42,
      soil: "Clay Loam",
      baseLoad: 78,
      riskLevel: "HIGH"
    },
    "Patiala Central (Grid: PC-304)": {
      wells: 65,
      soil: "Silty Clay",
      baseLoad: 96,
      riskLevel: "CRITICAL"
    }
  },
  "Haryana": {
    "Kurukshetra North (Grid: KN-202)": {
      wells: 48,
      soil: "Loamy Sand",
      baseLoad: 89,
      riskLevel: "HIGH"
    },
    "Karnal South (Grid: KS-501)": {
      wells: 57,
      soil: "Rich Alluvial",
      baseLoad: 94,
      riskLevel: "CRITICAL"
    }
  }
};

export const cropsData = {
  "Paddy / Rice (Flood-Irrigation)": { 
    waterDemand: "Very High", 
    loadFactor: 45,
    type: "heavy",
    recommendation: "Basmati Rice (DSR method) or Maize to slash hydraulic strain by 60%." 
  },
  "Sugarcane (High Intensity)": { 
    waterDemand: "Very High", 
    loadFactor: 50,
    type: "heavy",
    recommendation: "Sorghum (Jowar) or Pearl Millet (Bajra) to preserve shallow aquifer matrices." 
  },
  "Wheat (Standard Cycle)": { 
    waterDemand: "Moderate", 
    loadFactor: 25,
    type: "moderate",
    recommendation: "Mustard or Chickpeas to introduce nitrogen-fixing soil stability." 
  },
  "Maize (Resource Optimized)": { 
    waterDemand: "Low", 
    loadFactor: 15,
    type: "restorative",
    recommendation: "Excellent choice! Maintain crop rotation to restore natural water levels." 
  },
  "Moong Mung Bean (Restorative)": { 
    waterDemand: "Very Low", 
    loadFactor: 5,
    type: "restorative",
    recommendation: "Optimal restorative node. No pivoting required; eligible for conservation credits." 
  }
};
