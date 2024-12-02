export interface PlanRates {
  debit: number;
  credit: number;
  credit12: number;
}

export interface Plan {
  id: string;
  key: string;
  userTag: string;
  product: string;
  title: string;
  description: string;
  background: string;
  footerBackground: string;
  borderColor: string;
  color: string;
  footer: string;
  oneDay: PlanRates;
  sameDay: PlanRates;
  [key: string]: PlanRates | string;
}

export interface Fee {
  type: string;
  debit: number;
  credit: number;
  credit12: number;
}

export interface RawPlanData {
  id: string;
  name: string;
  userTag: string;
  product: string;
  title: string;
  description: string;
  background: string;
  borderColor: string;
  color: string;
  footer: string;
  fees: Fee[];
}
