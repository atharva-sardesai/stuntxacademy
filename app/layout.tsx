import type { Metadata } from 'next';
import { Anton, Inter } from 'next/font/google';
import './globals.css';

const display = Anton({ subsets: ['latin'], variable: '--font-display', weight: '400' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'StuntX Academy | Bike Stunt Training Pune',
  description: 'Professional bike stunt training academy in Pune.',
  openGraph: { title: 'StuntX Academy', description: 'Master the machine.', images: ['/og-image.jpg'] }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang='en' className='dark'><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
