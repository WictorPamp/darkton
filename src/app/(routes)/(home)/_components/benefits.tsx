import { CreditCard, Fingerprint, HandCoins, IdCard } from 'lucide-react';

import { Card } from './card';

export function Benefits() {
  return (
    <section className="bg-person-primary text-person-secondary flex flex-col gap-0 justify-center items-center md:items-stretch lg:items-center rounded-b-md">
      <div className="flex flex-wrap md:flex-nowrap gap-4 xl:gap-4 md:justify-evenly m-4 md:m-8 lg:mb-8 max-w-[512px] md:max-w-[1280px]">
        <Card
          icon={HandCoins}
          title="Vendeu, Recebeu!"
          description="Receba o dinheiro na sua conta no mesmo dia"
        />

        <Card
          icon={CreditCard}
          title="Maquininha moderna!"
          description="Maquininha que aceita as principais bandeiras de cartão"
        />

        <Card
          icon={Fingerprint}
          title="Super Conta Ton"
          description="Conta digital com cartão de débito"
        />

        <Card
          icon={IdCard}
          title="CPF ou CNPJ? Tanto Faz!"
          description="A conta e a maquininha pode ser no CPF ou CNPJ"
        />
      </div>
    </section>
  );
}
