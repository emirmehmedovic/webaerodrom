import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { LocaleProvider } from '@/components/locale-provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Međunarodni Aerodrom Tuzla',
  description: 'Službena web stranica Međunarodnog Aerodroma Tuzla. Informacije o letovima, uslugama i novostima.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bs" className={`${poppins.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <LocaleProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
              storageKey="tuzla-airport-theme"
          >
            <Header />
            {/* Restore: Remove px-4, add md:px-4 */}
            <main className="flex-grow container mx-auto py-8 md:px-4">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
