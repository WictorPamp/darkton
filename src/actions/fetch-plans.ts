import { Plan } from '@/types/plans';
import { fetchSupabase } from './fetch-supabase';

interface Fee {
  type: string;
  debit: number;
  credit: number;
  credit12: number;
}

interface RawPlanData {
  id: string;
  name: string;
  userTag: string;
  product: string;
  title: string;
  description: string;
  background: string;
  borderColor: string;
  color: string;
  footer: string;
  fees: Fee[];
}

function convertToPlan(data: RawPlanData): Plan {
  const oneDayFee = data.fees.find((fee) => fee.type === 'oneDay');
  const sameDayFee = data.fees.find((fee) => fee.type === 'sameDay');

  return {
    id: data.id,
    key: data.name,
    userTag: data.userTag,
    product: data.product,
    title: data.title,
    description: data.description,
    background: data.background,
    footerBackground: data.background,
    borderColor: data.borderColor,
    color: data.color,
    footer: data.footer,
    oneDay: {
      debit: oneDayFee?.debit || 0,
      credit: oneDayFee?.credit || 0,
      credit12: oneDayFee?.credit12 || 0,
    },
    sameDay: {
      debit: sameDayFee?.debit || 0,
      credit: sameDayFee?.credit || 0,
      credit12: sameDayFee?.credit12 || 0,
    },
  };
}

export async function getPlans(): Promise<Plan[]> {
  try {
    const result = await fetchSupabase({
      tableName: 'plans',
      relationships: 'fees(type, debit, credit, credit12)',
    });

    if (result && Array.isArray(result)) {
      const plans = result as RawPlanData[];
      return plans.map((plan) => convertToPlan(plan));
    } else {
      console.error('No data found for the specified link.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching site info:', error);
    return [];
  }
}
