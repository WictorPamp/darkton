'use server';

import { supabase } from '@/lib/client';

interface fetchSupabaseProps {
  tableName: string;
  columns?: string;
}

export async function fetchSupabase({
  tableName,
  columns,
}: fetchSupabaseProps) {
  const { data, error } = await supabase.from(tableName).select(columns || '*');

  if (error) {
    throw new Error(`Error fetching data from ${tableName}: ${error.message}`);
  }

  return data;
}
