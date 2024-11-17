'use client';

import { useState } from 'react';

import { Machine } from '@/types/machines';
import { Plan } from '@/types/plans';
import { Pricing } from '@/types/pricing';

import { Title } from '../title';

import { MachineCard } from './machine-card';

interface MachinesProps {
  plans: Plan[];
  machines: Machine[];
  pricing: Pricing;
  coupon: string;
  percentCoupon: number;
  referrer: boolean;
}

export function Machines({
  plans,
  machines,
  pricing,
  referrer,
  coupon,
  percentCoupon,
}: MachinesProps) {
  const [day] = useState('sameDay');
  const [selectedPlan] = useState('tonMega');

  const pricingLevel = pricing.find((level) => level.key === selectedPlan);

  const selectedPlanIndex = plans.findIndex(
    (plan) => plan.key === selectedPlan,
  );

  return (
    <section
      className="mt-8 bg-person-tertiary py-10 border-b-[1px] border-person-quaternary"
      id="planos"
    >
      <div className="flex flex-col gap-4 md:gap-8 items-center">
        <Title>Escolha sua Maquininha</Title>

        <div className="grid gap-2 md:gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1280px]">
          {machines.map((machine) => {
            const pricingMachine = pricingLevel?.machines.find(
              (pricingMachine) => pricingMachine.key === machine.key,
            );

            return (
              <MachineCard
                key={machine.key}
                machine={machine}
                plan={plans[selectedPlanIndex]}
                pricing={pricingMachine}
                day={day}
                coupon={coupon}
                percentCoupon={percentCoupon}
                referrer={referrer}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
