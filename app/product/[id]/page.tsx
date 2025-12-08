import { getProductById } from '@/lib/db';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
        return (
            <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>
                <h1>Product not found</h1>
                <Link href="/shop" style={{ color: 'var(--primary-color)' }}>Back to Shop</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#f4f4f4', padding: '2rem', borderRadius: 'var(--radius)', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {product.image ? (
                    <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '400px' }} />
                ) : (
                    <span>No Image</span>
                )}
            </div>
            <div>
                <div style={{ marginBottom: '1rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>{product.category}</div>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{product.name}</h1>
                <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--primary-color)', marginBottom: '2rem' }}>
                    ₹{product.price.toLocaleString('en-IN')}
                </div>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '2rem', color: '#444' }}>
                    {product.description}
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href={`https://wa.me/91XXXXXXXXXX?text=I am interested in ${product.name}`} target="_blank" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                        Buy via WhatsApp
                    </a>
                    <a href="/contact" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>
                        Contact Store
                    </a>
                </div>
            </div>
        </div>
    );
}
