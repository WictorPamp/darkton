import { useState } from "react";
import { NumericFormat } from 'react-number-format';
import Title from "../Generic/title";
import Dropdown from "./dropdown";
import { PiggyBank } from 'lucide-react';


export default function Calculator({ plans }) {
  const currency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const [flag, setFlag] = useState('bandeira1');
  const [receipt, setReceipt] = useState('oneDay');
  const [plan, setPlan] = useState('tonPro')
  const [promotion, setPromotion] = useState('2');
  const [sale, setSale] = useState(0);
  const [value, setValue] = useState('1000');

  const tax = plan === 'tonPro' ? plans[flag][receipt][plan][promotion][sale] : plans[flag][receipt][plan][sale];

  const handleValueChange = (values) => {
    const { floatValue } = values;
    setValue(floatValue);
  };

  const calcReceive = (value, tax) => {
    let discount = value * (tax / 100);
    let receive = value - discount;
    return receive;
  };

  const calcSave = (value, tax) => {
    let someTax = plan === 'tonPro' ? 0.4 : plan === 'tonUltra' ? 1.2 : plan === 'tonMega' ? 1.52 : 1.9;
    let newTax = tax + someTax + (sale / 100);
    let discount = value * (newTax / 100);
    let receive = value - discount;
    let save = calcReceive(value, tax) - receive;
    return save;
  }

  const receive = calcReceive(value, tax);
  const save = calcSave(value, tax);

  return (
    <section className="pt-18 py-10 bg-person-tertiary" id="planos">
      <div className="flex flex-col gap-4 md:gap-8 items-center">
        <Title title="Simule as taxas das suas vendas" />
        <div className="flex flex-col md:flex-row w-full md:px-20 max-w-[1080px]">
          <div className="md:border-r-[1px] md:border-person-quaternary text-person-secondary flex-1 md:rounded-l-lg p-4">
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Selecione seu Plano Ton:</p>
              <div className="flex">
                <ul className="flex w-full">
                  {
                    plans.plansOptions.map(option => (
                      <li
                        key={option.value}
                        onClick={() => setPlan(option.value)}
                        className={`cursor-pointer flex justify-center items-center px-2 py-4 md:px-4 w-full last:rounded-r-lg first:rounded-l-lg border cursor pointer font-ton ${option.value === plan ? 'border-ton-200 text-ton-200 font-bold' : 'border-person-quinternary text-person-quinternary'}`}
                      >
                        {option.text}
                      </li>
                    ))
                  }
                </ul>
              </div>
              {
                plan === 'tonPro' && (
                  <Dropdown
                    label="Período Promocional"
                    options={plans.promotionsOptions}
                    selected={promotion}
                    onSelect={setPromotion}
                  />
                )
              }
              <div className="flex w-full flex-col md:flex-row gap-4">
                <div className="md:w-64">
                  <label>Bandeiras</label>
                  <Dropdown
                    label="Selecione uma bandeira"
                    options={plans.flagsOptions}
                    selected={flag}
                    onSelect={setFlag}
                  />
                </div>
                <div className="flex-grow">
                  <label>Tipo da Venda</label>
                  <Dropdown
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
                  <Dropdown
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
                    className="bg-person-primary border-gray-700 md:px-4 w-full border inline-flex w-full rounded border px-4 py-2 text-white font-semibold text-sm shadow-sm focus:outline-none focus:border-ton-300"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="md:hidden" />
          <div className="text-person-secondary flex-1 flex flex-col md:rounded-r-lg p-4 justify-center">
            <div className="flex justify-between p-4">
              <p className="font-semibold">Você recebe</p>
              <p className="text-lg text-ton-200 font-ton font-semibold">{currency(receive)}</p>
            </div>
            <hr />
            <div className="flex justify-between p-4 items-center gap-x-2">
              <div>
                <p className="font-semibold">Taxa <span className="text-ton-200">{plan.replace("ton", "")}</span></p>
                <p className="text-gray-500 text-sm">Taxas após período promocional de acordo com suas vendas mensais</p>
              </div>
              <div className="font-ton font-bold">
                <p>{tax}%</p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between p-4 items-center gap-x-2">
              <p className="font-semibold">Recebimento da venda</p>
              <p className="font-ton font-bold">{receipt === 'sameDay' ? 'No mesmo dia' : receipt === 'oneDay' ? '1 dia útil' : ''}</p>
            </div>
            <div className="flex justify-between items-center m-4 bg-person-primary rounded-lg p-4 gap-4">
              <div className="text-ton-200"><PiggyBank size={30} /></div>
              <div>Você economiza até <span className="text-ton-200 font-bold font-ton">{currency(save)}</span> em relação aos concorrentes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
