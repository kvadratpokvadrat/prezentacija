import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { FloatingCTA } from '@/components/FloatingCTA';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  metadataBase: new URL('https://reljkoviceva59.rs'),
  title: {
    default: 'Reljkovićeva 59 | Premium stanovi u Novom Sadu',
    template: '%s | Reljkovićeva 59'
  },
  description: 'Novogradnja premium klase u Novom Sadu. Reljkovićeva 59 donosi kvalitet gradnje, pažljivo projektovane stanove i sigurnu investiciju.',
  openGraph: {
    title: 'Reljkovićeva 59',
    description: 'Premium stanovi u Novom Sadu',
    url: 'https://reljkoviceva59.rs',
    siteName: 'Reljkovićeva 59',
    locale: 'sr_RS',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
