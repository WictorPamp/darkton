import { Machine } from '@/types/machines';
import { fetchSupabase } from './fetch-supabase';

function convertToMachine(data: any): Machine {
  return {
    key: data.id, // ou use data.id_ton se preferir
    id: data.id_ton,
    title: data.title,
    image: data.image,
    assets: data.assets,
    frete: data.frete,
    celNet: data.celNet,
    nfc: data.nfc,
    sms: data.sms,
    tapton: data.tapton,
    '3g': data.TreeG, // Mapeia TreeG para 3g
    '4g': data.FourG, // Mapeia FourG para 4g
    impresso: data.impresso,
    pix: data.pix,
    batery: data.batery,
    touch: data.touch,
  };
}

export async function getMachines(): Promise<Machine[] | []> {
  try {
    const machines = await fetchSupabase({
      tableName: 'machines',
      // Adicione outras opções de consulta conforme necessário
    });

    if (machines && Array.isArray(machines)) {
      return machines.map((machine: any) => convertToMachine(machine));
    } else {
      console.error('No valid data found for machines.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching machines:', error);
    return [];
  }
}
