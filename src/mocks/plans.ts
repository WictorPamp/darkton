import { Plan } from '@/types/plans';

export const plans: Plan[] = [
  {
    key: 'tonPro',
    userTag: 'tonpro_tier',
    product: 'TONPRO_TIER_',
    title: 'Ton Pro',
    description: 'Venda mais e pague menos taxas a cada mês',
    background: 'white',
    footerBackground: 'ton-gray2',
    borderColor: 'ton-gray2',
    color: 'person-primary',
    footer:
      'Taxas promocionais válidas durante 30 dias ou até vender 5 mil reais.',
    oneDay: {
      debit: 0.74,
      credit: 0.74,
      credit12: 0.74,
    },
    sameDay: {
      debit: 0.74,
      credit: 0.74,
      credit12: 8.99,
    },
  },
  {
    key: 'tonUltra',
    userTag: 'tonultra',
    product: 'TONULTRA_',
    title: 'Ton Ultra',
    description: 'Independentemente das vendas, taxa ultra baixa',
    background: 'person-primary',
    footer: 'Sem mínimo de vendas',
    footerBackground: 'ton-gray2',
    borderColor: 'ton-gray2',
    color: 'person-secondary',
    oneDay: {
      debit: 1.29,
      credit: 3.09,
      credit12: 10.99,
    },
    sameDay: {
      debit: 1.69,
      credit: 3.49,
      credit12: 11.99,
    },
  },
  {
    key: 'tonMega',
    userTag: 'megaton_tier',
    product: 'MEGATON_TIER_',
    title: 'Ton Mega',
    description: 'Pra quem vende muito à vista',
    background: 'person-primary',
    footer: 'Sem mínimo de vendas',
    footerBackground: 'ton-gray2',
    borderColor: 'ton-gray2',
    color: 'person-secondary',
    oneDay: {
      debit: 1.69,
      credit: 3.49,
      credit12: 17.99,
    },
    sameDay: {
      debit: 2.69,
      credit: 4.49,
      credit12: 18.99,
    },
  },
  {
    key: 'tonSuper',
    userTag: 'tonsuper',
    product: 'TONSUPER_',
    title: 'Ton Super',
    description: 'Maquininhas com preços super baixos',
    background: 'person-primary',
    footer: 'Sem mínimo de vendas',
    footerBackground: 'ton-gray2',
    borderColor: 'ton-gray2',
    color: 'person-secondary',
    oneDay: {
      debit: 1.98,
      credit: 4.98,
      credit12: 22.59,
    },
    sameDay: {
      debit: 1.98,
      credit: 4.98,
      credit12: 23.59,
    },
  },
];