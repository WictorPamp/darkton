'use server';

import { supabase } from '@/lib/client';

interface FetchSupabaseProps {
  tableName: string;
  columns?: string | string[];
  where?: Record<string, any>;
  relationships?: string;
}

export async function fetchSupabase<T>({
  tableName,
  columns,
  where,
  relationships,
}: FetchSupabaseProps): Promise<T[]> {
  const selectColumns = relationships
    ? `${
        Array.isArray(columns) ? columns.join(', ') : columns || '*'
      }, ${relationships}`
    : Array.isArray(columns)
    ? columns.join(', ')
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

  return data as T[];
}
