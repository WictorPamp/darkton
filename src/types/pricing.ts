export interface PricingMachine {
  key: string;
  current: number;
  promotion: number | string;
  parcel: number;
}

export interface PricingLevel {
  key: string;
  machines: PricingMachine[];
}

export type Pricing = PricingLevel[];
