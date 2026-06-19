# RAIT-ACM-KLEOS_BlindSpot-Labs
# 💧 AquaCrop Advisor — Northwest India

An automated behavioral economics platform designed to translate regional groundwater depletion metrics into localized financial reality ($₹/\text{acre}$) for Indian farmers.

---

## 🌾 The Problem

Northwest Indian farmers face severe groundwater depletion because aquifers feel "free to pump." Traditional ecological awareness data (liters consumed, water-table drop meters) fails to drive change because it lacks immediate economic weight on seasonal crop selections.

## 🚀 Our Solution: Behavioral Economics over Lectures

AquaCrop Advisor bridges the gap between public datasets and agricultural decision-making by calculating a localized **Water Penalty Matrix** to adjust crop profit estimations:

$$\text{True Net Return} = (\text{Mandi Price} \times \text{Yield per acre}) - \text{Input Cost} - \text{Water Penalty}$$

Where the core calculation introduces accountability by factoring local ecological reality directly into the ledger:

$$\text{Water Penalty} = \text{District Depletion Rate} \times \text{Base Extraction Cost (₹12,000)} \times \text{Crop Water Multiplier}$$

---

## 🛠️ Architecture & Tech Stack

This implementation utilizes an ultra-lightweight, zero-backend approach optimized for low-connectivity rural smartphone browsers:

- **Frontend:** React (JSX)
- **Styling & Animations:** Tailwind CSS
- **Localization:** Direct English / Hindi translation matrix core
- **Data Footprint:** 100% serverless client-side engine utilizing pre-compiled JSON metrics from the **Central Ground Water Board (CGWB)** and regional **Agmarknet** data sheets.

---

## 📂 Repository Structure

- `src/data/`: Hardcoded district matrices, water coefficients, and crop economics.
- `src/utils/`: Standardized algebraic engine calculating water penalties and alternate yield ranking.
- `src/components/`: Modularized view blocks (`InputScreen`, `RecommendationCard`, `WaterProjectionChart`, `ComparisonTable`).

## ⚡ Getting Started Locally

1. Clone the repository
2. Install packages: `npm install`
3. Launch development server: `npm run dev`
