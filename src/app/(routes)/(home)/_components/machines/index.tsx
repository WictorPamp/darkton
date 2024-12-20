'use client';

import { Machine } from '@/types/machines';
import { Pricing } from '@/types/pricing';

import { Title } from '../title';

import { MachineCard } from './machine-card';
import { Plan } from '@/types/plans';

interface MachinesProps {
  site: string;
  selectedPlan: string;
  day: string;
  machines: Machine[];
  pricing: Pricing;
  coupon: string | null;
  percentCoupon: number;
  referrer: string | null;
  type: string;
  plan: Plan;
}

export function Machines({
  site,
  selectedPlan,
  day,
  machines,
  pricing,
  referrer,
  coupon,
  percentCoupon,
  type,
  plan,
}: MachinesProps) {
  const pricingLevel = pricing.find((level) => level.planName === selectedPlan);

  return (
    <section
      className="mt-8 dark:bg-person-primary py-10 border-t border-gray-200 dark:border-person-quaternary"
      id="planos"
    >
      <div className="flex flex-col gap-4 md:gap-8 items-center">
        <Title>Escolha sua Maquininha</Title>

        <div className="grid gap-2 md:gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1280px]">
          {machines.map((machine) => {
            const machinePricing = pricingLevel?.machines.find(
              (pricingMachine) => pricingMachine.key === machine.key,
            );
            const userTag = plan.userTag;
            return (
              <MachineCard
                site={site}
                userTag={userTag}
                type={type}
                pricing={machinePricing}
                key={machine.key}
                machine={machine}
                day={day}
                coupon={coupon}
                percentCoupon={percentCoupon}
                referrer={referrer}
                planTitle={plan.title}
                selectedPlan={selectedPlan}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
