import { Plan } from '@/types/plans';
import { fetchSupabase } from './fetch-supabase';

function convertToPlan(data: any): Plan {
  const oneDayFee = data.fees?.find((fee: any) => fee.type === 'oneDay') || {};
  const sameDayFee =
    data.fees?.find((fee: any) => fee.type === 'sameDay') || {};

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
      debit: oneDayFee.debit,
      credit: oneDayFee.credit,
      credit12: oneDayFee.credit12,
    },
    sameDay: {
      debit: sameDayFee.debit,
      credit: sameDayFee.credit,
      credit12: sameDayFee.credit12,
    },
  };
}

export async function getPlans(): Promise<Plan[]> {
  try {
    const plans = await fetchSupabase({
      tableName: 'plans',
      relationships: 'fees(type, debit, credit, credit12)',
    });

    if (plans && plans.length > 0) {
      return plans.map((plan: any) => convertToPlan(plan));
    } else {
      console.error('no Data found for the specified link.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching site info:', error);
    return [];
  }
}
