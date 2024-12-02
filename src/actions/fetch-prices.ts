import {
  Pricing,
  PricingLevel,
  PricingMachine,
  RawPricingData,
} from '@/types/pricing';
import { fetchSupabase } from './fetch-supabase';

export async function getPrices(): Promise<Pricing> {
  const pricingData = await fetchSupabase({
    tableName: 'prices',
    relationships: 'plans (id, name, title), machines(id)',
    // Adicione outras opções de consulta conforme necessário
  });

  const pricingMap: Record<string, PricingLevel> = {};

  (pricingData as RawPricingData[]).forEach((price) => {
    const planKey = price.plans.id;
    const planName = price.plans.name;
    const planTitle = price.plans.title;
    const machineKey = price.machines.id;

    if (!pricingMap[planKey]) {
      pricingMap[planKey] = { key: planKey, planTitle, planName, machines: [] };
    }

    pricingMap[planKey].machines.push({
      key: machineKey,
      current: price.current,
      promotion: price.promotion,
      parcel: price.parcel,
    });
  });

  return Object.values(pricingMap);
}
