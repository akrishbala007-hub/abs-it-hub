import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function Shop({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
    const allProducts = getProducts();
    const { category } = await searchParams;

    const products = category
        ? allProducts.filter(p => p.category === category)
        : allProducts;

    return (
        <div className="container" style={{ padding: '2rem 1.5rem' }}>
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Shop</h1>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <a href="/shop" className={`btn ${!category ? 'btn-primary' : 'btn-outline'}`}>All</a>
                    <a href="/shop?category=laptop" className={`btn ${category === 'laptop' ? 'btn-primary' : 'btn-outline'}`}>Laptops</a>
                    <a href="/shop?category=desktop" className={`btn ${category === 'desktop' ? 'btn-primary' : 'btn-outline'}`}>Desktops</a>
                </div>
            </header>

            {products.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
