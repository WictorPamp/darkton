import {
  Barcode,
  HandCoins,
  Landmark,
  MessagesSquare,
  PiggyBank,
  Replace,
} from 'lucide-react';

import { Card } from './card';
import { Title } from './title';

export function Different() {
  const cards = [
    {
      icon: Replace,
      title: 'Troca grátis e garantia vitalícia',
      description: 'Trocamos a sua maquininha sem você precisar sair de casa',
    },
    {
      icon: PiggyBank,
      title: 'Aqui sua Maquininha não tem aluguel',
      description: 'Com o Ton você tem máquina de qualidade sem pesar no bolso',
    },
    {
      icon: HandCoins,
      title: 'As melhores taxas do mercado',
      description: 'O Ton tem as melhores disponíveis, a partir de 0,74%',
    },
    {
      icon: MessagesSquare,
      title: 'Suporte 24h, pronto para te ajudar',
      description:
        'Assistente virtual e uma equipe especializada para te atender',
    },
    {
      icon: Barcode,
      title: 'Venda mais fácil via boleto',
      description: 'Faça vendas pela internet via boleto no aplicativo da Ton',
    },
    {
      icon: Landmark,
      title: 'Aqui você não precisa de banco',
      description: 'Conta digital grátis para você receber o seu dinheiro',
    },
  ];

  return (
    <section className="mt-8 bg-person-tertiary border-b border-person-quaternary py-10">
      <div className="flex flex-col gap-4 md:gap-8 items-center">
        <Title>
          <span>
            Por que <span className="text-ton-200">o Ton é diferente</span>?
          </span>
        </Title>

        <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-[1080px] gap-2 md:gap-4 p-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
