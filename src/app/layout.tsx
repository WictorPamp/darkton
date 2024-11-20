import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';

import './globals.css';

export const metadata: Metadata = {
  title: 'Maquininha TON',
  description:
    'Ton tem as maquininhas com as menores taxas do Brasil, o TapTon para vender pelo celular e Super Conta digital pra fazer pagamentos, tudo em um único lugar!',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
