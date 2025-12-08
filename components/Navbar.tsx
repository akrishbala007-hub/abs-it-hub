"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const isAdmin = pathname.startsWith('/admin');

    return (
        <nav style={{ borderBottom: '1px solid var(--border-color)', background: 'white', position: 'sticky', top: 0, zIndex: 10 }}>
            <div className="container" style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                    ABS IT Hub
                </Link>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {!isAdmin ? (
                        <>
                            <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
                            <Link href="/shop" className={pathname === '/shop' ? 'active' : ''}>Shop</Link>
                            <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
                        </>
                    ) : (
                        <>
                            <Link href="/admin/dashboard" className={pathname.includes('dashboard') ? 'active' : ''}>Dashboard</Link>
                            <Link href="/" target="_blank">View Site</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
