'use client';

import { useState } from 'react';

import { Title } from '../title';

import { OptionReceived } from './option-received';
import { PlanCard } from './plan-card';

import { Plan } from '@/types/plans';

interface PlansProps {
  plans: Plan[];
}

export function Plans({ plans }: PlansProps) {
  const [day, setDay] = useState('sameDay');
  const [selectedPlan, setSelectedPlan] = useState('tonMega');

  return (
    <section
      id="planos"
      className="flex flex-col gap-4 justify-center items-center md:items-stretch lg:items-center bg"
    >
      <div className="flex flex-col gap-4 md:gap-8 items-center">
        <Title>Conheça os planos TON</Title>

        <OptionReceived day={day} setDay={setDay} />

        <div className="grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1280px] gap-2 p-3">
          {plans.map((plan) => (
            <PlanCard
              key={plan.key}
              plan={plan}
              planIndex={plan.key}
              day={day}
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
          ))}
        </div>
      </div>

      <div className="text-person-secondary flex flex-col gap-0 px-5">
        <p className="text-center">
          Confira as{' '}
          <a
            className="underline text-ton-100"
            href="https://www.ton.com.br/planos-e-taxas/?referrer=1E2EC3CE-6F5F-485F-A96B-1C5918F667A7&utm_medium=invite_share&utm_source=revendedor"
          >
            taxas de todos os planos
          </a>
          .
        </p>

        <p className="text-center">
          Taxa 0% no Pix nos primeiros 30 dias após a primeira venda com Pix na
          maquininha.
        </p>
      </div>
    </section>
  );
}
