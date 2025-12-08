import Link from 'next/link';
import { Product } from '@/lib/db';

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Link href={`/product/${product.id}`} className="card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ height: '200px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {/* Placeholder for image */}
                {product.image ? (
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                    <span style={{ color: '#888' }}>No Image</span>
                )}
            </div>
            <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {product.category}
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>{product.name}</h3>
                ₹{product.price.toLocaleString('en-IN')}

            </div>
        </Link>
    );
}
