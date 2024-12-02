'use client';

import { Machine } from '@/types/machines';
import { Plan } from '@/types/plans';
import { useState } from 'react';
import { Plans } from './plans';
import { Machines } from './machines';
import { PricingLevel } from '@/types/pricing';

interface ClientComponentProps {
  site: string;
  plans: Plan[];
  machines: Machine[];
  pricing: PricingLevel[];
  coupon: string;
  percentCoupon: number;
  referrer: string;
  initialDay: string;
  initialSelectedPlan: string;
  type: string;
}

export function ClientComponent({
  site,
  plans,
  machines,
  pricing,
  coupon,
  percentCoupon,
  referrer,
  initialDay,
  initialSelectedPlan,
  type,
}: ClientComponentProps) {
  const [day, setDay] = useState<string>(initialDay);
  const [selectedPlan, setSelectedPlan] = useState<string>(initialSelectedPlan);
  const plan = plans.find((plan) => plan.key === selectedPlan);
  if (!plan) {
    // Lide com o caso em que o plano não é encontrado
    console.error('Plano não encontrado');
    return null; // ou qualquer outro valor de fallback apropriado
  }
  return (
    <>
      <Plans
        plans={plans}
        day={day}
        setDay={setDay}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />

      <Machines
        site={site}
        selectedPlan={selectedPlan}
        plan={plan}
        type={type}
        day={day}
        machines={machines}
        pricing={pricing}
        coupon={coupon}
        percentCoupon={percentCoupon}
        referrer={referrer}
      />
    </>
  );
}
