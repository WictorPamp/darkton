import { fetchSupabase } from './fetch-supabase';

interface Infos {
  id: string;
  link: string;
  cupon: string;
  referrer: string;
  type: string;
  tap_ton: boolean;
  active: boolean;
  percent_coupon: number;
  telephone: string;
  logo: string;
}

export async function getSiteInfo(): Promise<Infos | null> {
  try {
    const site = await fetchSupabase({
      tableName: 'sites',
      where: { link: 'http://localhost:3000' },
    });

    if (site && site.length > 0) {
      return site[0] as Infos;
    } else {
      console.error('no Data found for the specified link.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching site info:', error);
    return null;
  }
}
