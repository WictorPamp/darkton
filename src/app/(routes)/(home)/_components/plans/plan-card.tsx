'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Plan, PlanRates } from '@/types/plans';

interface PlanCardProps {
  plan: Plan;
  planIndex: string;
  day: string;
  selectedPlan: string;
  setSelectedPlan: (selectedPlan: string) => void;
}

export function PlanCard({
  plan,
  planIndex,
  day,
  selectedPlan,
  setSelectedPlan,
}: PlanCardProps) {
  const planBg = plan.background;
  const planBorderColor = plan.borderColor;
  const planTextColor = plan.color;

  return (
    <label
      onClick={() => setSelectedPlan(planIndex)}
      className={`flex overflow-hidden flex-col rounded-2xl border cursor-pointer text-center border-${planBorderColor}`}
    >
      <div className="flex flex-col h-full cursor-pointer">
        <div
          className={cn(
            'flex flex-col gap-3 py-4 h-full justify-between',
            planBg === 'person-primary' &&
              `dark:bg-${planBg} dark:text-${planTextColor}`,
            planBg !== 'person-primary' && 'bg-white text-ton-gray',
          )}
        >
          <div className="flex gap-2 px-4">
            <div className="w-full text-left">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="selectedPlanId"
                  id={planIndex}
                  value={planIndex}
                  readOnly={true}
                  checked={selectedPlan === planIndex}
                />
                <h5 className="font-ton font-bold text-2xl">{plan.title}</h5>
              </div>
              <span className="text-left">{plan.description}</span>
            </div>

            <div className="w-[64px]">
              <Image
                alt="Taxa 0 no Pix"
                width="128"
                height="128"
                src="https://res.cloudinary.com/dunz5zfpt/f_auto,c_limit,w_256,q_auto/site-ton/taxapixqrcode"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center p-2">
            <div className="flex flex-col justify-between w-full text-center text-2xl font-ton">
              <strong className="text-center text-sm">DÉBITO</strong>

              <strong className="text-center font-ton text-ton-200 text-2xl">
                {(plan[day] as PlanRates).debit}%
              </strong>
            </div>

            <div className="flex flex-col justify-between w-full text-center text-2xl font-ton">
              <strong className="text-center text-sm">CRÉDITO</strong>

              <strong className="text-center font-ton text-ton-200 text-2xl">
                {(plan[day] as PlanRates).credit}%
              </strong>
            </div>

            <div className="flex flex-col justify-between w-full text-center text-2xl font-ton">
              <strong className="text-center text-sm white">CRÉDITO 12X</strong>

              <strong className="text-center font-ton text-ton-200 text-2xl">
                {(plan[day] as PlanRates).credit12}%
              </strong>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}
