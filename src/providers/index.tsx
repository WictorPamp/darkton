'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

import { LaunchScreen } from '@/components/launch-screen';
import { getTheme } from '@/actions/fetch-themes';

interface ProvidersProps {
  children: React.ReactNode;
}
export function Providers({ children }: ProvidersProps) {
  const [theme, setTheme] = useState<string | undefined>(undefined);
  useEffect(() => {
    const fetchTheme = async () => {
      const fetchedTheme = await getTheme('light');
      if (fetchedTheme) {
        setTheme(fetchedTheme.name);
        localStorage.setItem('theme', fetchedTheme.name);
      }
    };
    fetchTheme();
  }, []);

  if (theme === undefined) {
    return <LaunchScreen />;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme={theme}>
      {children}
    </ThemeProvider>
  );
}
