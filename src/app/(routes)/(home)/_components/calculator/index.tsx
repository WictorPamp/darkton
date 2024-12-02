'use client';

import { PiggyBank } from 'lucide-react';
import { useState } from 'react';
import { NumericFormat } from 'react-number-format';

import { Title } from '../title';

import { CalculatorDropdown } from './calculator-dropdown';

import { Plans } from '@/types/taxs';

interface CalculatorProps {
  plans: Plans;
}

export function Calculator({ plans }: CalculatorProps) {
  function formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }

  const [flag, setFlag] = useState<'bandeira1' | 'bandeira2'>('bandeira1');
  const [receipt, setReceipt] = useState<'oneDay' | 'sameDay'>('oneDay');
  const [plan, setPlan] = useState<
    'tonPro' | 'tonUltra' | 'tonMega' | 'tonSuper'
  >('tonPro');
  const [promotion, setPromotion] = useState<'2' | '20' | 'more'>('2');
  const [sale, setSale] = useState<number>(0);
  const [value, setValue] = useState<number>(1000);

  const tax =
    plan === 'tonPro'
      ? plans[flag][receipt][plan][promotion][sale]
      : plans[flag][receipt][plan][sale];

  function handleValueChange(values: { floatValue?: number }) {
    const { floatValue } = values;

    if (floatValue !== undefined) {
      setValue(floatValue);
    }
  }

  function calculateReceive(value: number, tax: number): number {
    const discount = value * (tax / 100);
    return value - discount;
  }

  function calculateSave(value: number, tax: number): number {
    const someTax =
      plan === 'tonPro'
        ? 0.4
        : plan === 'tonUltra'
        ? 1.2
        : plan === 'tonMega'
        ? 1.52
        : 1.9;

    const newTax = tax + someTax + sale / 100;
    const discount = value * (newTax / 100);
    const receive = value - discount;
    return calculateReceive(value, tax) - receive;
  }

  const receive = calculateReceive(value, tax);
  const save = calculateSave(value, tax);

  return (
    <section
      className="pt-18 py-10 bg-white dark:bg-person-tertiary"
      id="planos"
    >
      <div className="flex flex-col gap-4 md:gap-8 items-center">
        <Title>Simule as taxas das suas vendas</Title>

        <div className="flex flex-col md:flex-row w-full md:px-20 max-w-[1080px]">
          <div className="md:border-r-[1px] md:border-person-quaternary text-ton-gray dark:text-person-secondary flex-1 md:rounded-l-lg p-4">
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Selecione seu Plano Ton:</p>
              <div className="flex">
                <ul className="flex w-full">
                  {plans.plansOptions.map((option) => (
                    <li
                      key={option.value}
                      onClick={() => setPlan(option.value)}
                      className={`cursor-pointer flex justify-center items-center px-2 py-4 md:px-4 w-full last:rounded-r-lg first:rounded-l-lg border cursor pointer font-ton ${
                        option.value === plan
                          ? 'border-ton-200 text-ton-200 font-bold'
                          : 'border-person-quinternary text-person-quinternary'
                      }`}
                    >
                      {option.text}
                    </li>
                  ))}
                </ul>
              </div>

              {plan === 'tonPro' && (
                <CalculatorDropdown
                  label="Período Promocional"
                  options={plans.promotionsOptions}
                  selected={promotion}
                  onSelect={setPromotion}
                />
              )}

              <div className="flex w-full flex-col md:flex-row gap-4">
                <div className="md:w-64">
                  <label>Bandeiras</label>
                  <CalculatorDropdown
                    label="Selecione uma bandeira"
                    options={plans.flagsOptions}
                    selected={flag}
                    onSelect={setFlag}
                  />
                </div>

                <div className="flex-grow">
                  <label>Tipo da Venda</label>
                  <CalculatorDropdown
                    label="Selecione um tipo de venda"
                    options={plans.salesOptions}
                    selected={sale}
                    onSelect={setSale}
                  />
                </div>
              </div>

              <div className="flex flex-col w-full gap-y-4">
                <div>
                  <label>Recebimento da Venda</label>
                  <CalculatorDropdown
                    label="Recebimento da venda"
                    options={plans.receiptsOptions}
                    selected={receipt}
                    onSelect={setReceipt}
                  />
                </div>

                <div>
                  <label>Valor da Venda</label>

                  <NumericFormat
                    value={value}
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix="R$ "
                    decimalScale={2}
                    fixedDecimalScale={true}
                    onValueChange={handleValueChange}
                    alt="Valor em reais"
                    className="dark:bg-person-primary border-gray-700 md:px-4 w-full border inline-flex rounded px-4 py-2 text-ton-gray dark:text-white font-semibold text-sm shadow-sm focus:outline-none focus:border-ton-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="md:hidden" />

          <div className="text-ton dark:text-person-secondary flex-1 flex flex-col md:rounded-r-lg p-4 justify-center">
            <div className="flex justify-between p-4">
              <p className="font-semibold">Você recebe</p>
              <p className="text-lg text-ton-200 font-ton font-semibold">
                {formatCurrency(receive)}
              </p>
            </div>

            <hr />

            <div className="flex justify-between p-4 items-center gap-x-2">
              <div>
                <p className="font-semibold">
                  Taxa{' '}
                  <span className="text-ton-200">
                    {plan.replace('ton', '')}
                  </span>
                </p>

                <p className="text-gray-500 dark:text-gray-200 text-sm">
                  Taxas após período promocional de acordo com suas vendas
                  mensais
                </p>
              </div>

              <div className="font-ton font-bold">
                <p>{tax}%</p>
              </div>
            </div>

            <hr />

            <div className="flex justify-between p-4 items-center gap-x-2">
              <p className="font-semibold">Recebimento da venda</p>

              <p className="font-ton font-bold">
                {receipt === 'sameDay'
                  ? 'No mesmo dia'
                  : receipt === 'oneDay'
                  ? '1 dia útil'
                  : ''}
              </p>
            </div>

            <div className="flex justify-between items-center m-4 dark:bg-person-primary p-4 text-ton-gray dark:text-white rounded-md">
              <div className="flex gap-2 items-center">
                <PiggyBank size={24} />
                <p className="font-semibold">Economize</p>
              </div>
              <p className="font-semibold">{formatCurrency(save)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
