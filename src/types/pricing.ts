export interface SchoolPricingTier {
  id: string;
  name: string;
  badge?: string;
  description: string;
  priceZAR: string;
  priceUSD: string;
  period: string;
  highlighted?: boolean;
  features: string[];
  ctaLabel: string;
}

export interface RoiCalculationParams {
  learnerCount: number;
  monthlyFee: number;
  educatorCount: number;
}

export interface RoiCalculationResult {
  annualFeeRecoveryIncrease: number;
  educatorHoursSavedAnnual: number;
  printingPaperCostSaved: number;
  netAnnualValueZAR: number;
  roiMultiplier: number;
}
