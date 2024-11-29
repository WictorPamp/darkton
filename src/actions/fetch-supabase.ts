'use server';

import { supabase } from '@/lib/client';

interface fetchSupabaseProps {
  tableName: string;
  columns?: string;
  where?: Record<string, any>;
  relationships?: string; // Novo parâmetro para especificar relacionamentos
}

export async function fetchSupabase({
  tableName,
  columns,
  where,
  relationships,
}: fetchSupabaseProps) {
  const selectColumns = relationships
    ? `${columns || '*'}, ${relationships}`
    : columns || '*';

  let query = supabase.from(tableName).select(selectColumns);

  if (where) {
    Object.entries(where).forEach(
      ([key, value]) => (query = query.eq(key, value)),
    );
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`Error fetching data from ${tableName}: ${error.message}`);
  }

  return data;
}
