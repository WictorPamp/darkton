import { Machine } from '@/types/machines';
import { fetchSupabase } from './fetch-supabase';

interface RawMachineData {
  id: string;
  id_ton: string;
  title: string;
  image: string;
  assets: string[];
  frete: boolean;
  celNet: boolean;
  nfc: boolean;
  sms: boolean;
  tapton: boolean;
  TreeG: boolean;
  FourG: boolean;
  impresso: boolean;
  pix: boolean;
  batery: boolean;
  touch: boolean;
}

function convertToMachine(data: RawMachineData): Machine {
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
    const result = await fetchSupabase({
      tableName: 'machines',
      // Adicione outras opções de consulta conforme necessário
    });

    if (result && Array.isArray(result)) {
      // Asserção de tipo para informar ao TypeScript que os elementos são do tipo RawMachineData
      const machines = result as RawMachineData[];
      return machines.map((machine) => convertToMachine(machine));
    } else {
      console.error('No valid data found for machines.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching machines:', error);
    return [];
  }
}
