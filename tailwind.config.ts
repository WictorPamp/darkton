import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ton: {
          100: '#C8FFC8',
          200: '#00D700',
          300: '#006e00',
          400: '#003c00',
          black: '#000',
          gray: '#1f252a',
          gray2: '#eff4f8',
          gray3: '#424a53',
        },
        person: {
          primary: '#1f252a',
          secondary: '#ffffff',
          tertiary: '#2a3239',
          quaternary: '#313c45',
          quinternary: '#0e9f0e',
        },
      },
      fontFamily: {
        ton: ['ton', 'sans-serif'],
      },
      animation: {
        'slide-left': 'slide 20s linear infinite alternate',
        'slide-left-10': 'slide 10s linear infinite  alternate',
        'slide-left-5': 'slide2 5s linear infinite  alternate',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slide2: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
