import { fetchSupabase } from './fetch-supabase';

interface Theme {
  id: string;
  name: string;
}

export async function getTheme(name: string): Promise<Theme | null> {
  try {
    const themes = await fetchSupabase<Theme>({
      tableName: 'themes',
      where: {
        name: name,
      },
    });
    if (themes) {
      const theme = themes[0];
      return theme;
    } else {
      console.error(`No data found for the theme "${name}".`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching theme:', error);
    return null;
  }
}
