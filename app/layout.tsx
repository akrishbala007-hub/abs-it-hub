import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { PhoneIcon, TwitterIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ABS IT Hub - Refurbished Laptops & Desktops',
  description: 'Best refurbished computers in Coimbatore',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 200px)' }}>
          {children}
        </main>
        <footer style={{ background: 'var(--secondary-color)', color: 'white', padding: '3rem 0', marginTop: 'auto' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <a href="#" style={{ color: 'white' }} aria-label="WhatsApp"><PhoneIcon size={24} /></a>
              <a href="#" style={{ color: 'white' }} aria-label="Twitter"><TwitterIcon size={24} /></a>
              <a href="#" style={{ color: 'white' }} aria-label="LinkedIn"><LinkedinIcon size={24} /></a>
              <a href="#" style={{ color: 'white' }} aria-label="Instagram"><InstagramIcon size={24} /></a>
              <a href="#" style={{ color: 'white' }} aria-label="YouTube"><YoutubeIcon size={24} /></a>
            </div>
            <p>&copy; 2025 ABS IT Hub. All rights reserved.</p>
            <p style={{ color: '#888', marginTop: '0.5rem' }}>Coimbatore, Tamil Nadu</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
