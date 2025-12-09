import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { PhoneIcon, TwitterIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ABS IT Hub - Best Refurbished Laptops & Desktops in Coimbatore | Quality Used Computers',
  description: 'ABS IT Hub offers the best quality refurbished laptops and desktops in Coimbatore, Tamil Nadu. Affordable, certified computers with warranty. Save up to 70% on premium brands. Visit our Sowripalayam store today!',
  keywords: [
    'refurbished laptops Coimbatore',
    'refurbished desktops Coimbatore',
    'second hand laptops Coimbatore',
    'used laptops Coimbatore',
    'used desktops Coimbatore',
    'ABS IT Hub',
    'computer shop Coimbatore',
    'laptop shop Coimbatore',
    'affordable laptops Tamil Nadu',
    'certified refurbished computers',
    'warranty laptops Coimbatore',
    'Sowripalayam computer shop',
    'buy refurbished computers',
    'quality used laptops',
  ],
  authors: [{ name: 'ABS IT Hub' }],
  creator: 'ABS IT Hub',
  publisher: 'ABS IT Hub',
  openGraph: {
    title: 'ABS IT Hub - Best Refurbished Laptops & Desktops in Coimbatore',
    description: 'Quality refurbished laptops and desktops in Coimbatore with warranty. Save up to 70% on certified computers. Visit our Sowripalayam store!',
    url: 'https://abs-it-hub-coimbatore.netlify.app',
    siteName: 'ABS IT Hub',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABS IT Hub - Best Refurbished Laptops & Desktops in Coimbatore',
    description: 'Quality refurbished laptops and desktops in Coimbatore with warranty. Save up to 70%!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'googlef3bf2ffe57c88cef', // Using HTML file verification
  },
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
