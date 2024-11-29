'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted || !resolvedTheme) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="fixed bottom-4 right-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
