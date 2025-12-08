"use client";
import { useEffect, useState } from 'react';
import { Product } from '@/lib/db';
import ProductForm from '@/components/ProductForm';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
    const [products, setProducts] = useState<Product[]>([]);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [isCreating, setIsCreating] = useState(false);
    const router = useRouter();

    const fetchProducts = async () => {
        const res = await fetch('/api/products');
        if (res.ok) {
            setProducts(await res.json());
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this product?')) return;

        try {
            const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });

            if (!res.ok) {
                const error = await res.json();
                alert(`Failed to delete product: ${error.error || 'Unknown error'}`);
                console.error('Delete failed:', error);
                return;
            }

            fetchProducts();
            router.refresh();
        } catch (error) {
            alert('Error deleting product. Check console for details.');
            console.error('Delete error:', error);
        }
    };

    return (
        <div className="container" style={{ padding: '2rem 1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Admin Dashboard</h1>
                <button
                    className="btn btn-primary"
                    onClick={() => { setIsCreating(true); setEditingProduct(null); }}
                    disabled={isCreating || !!editingProduct}
                >
                    Add New Product
                </button>
            </div>

            {(isCreating || editingProduct) && (
                <div style={{ marginBottom: '2rem' }}>
                    <ProductForm
                        initialData={editingProduct || undefined}
                        onSuccess={() => {
                            setIsCreating(false);
                            setEditingProduct(null);
                            fetchProducts();
                        }}
                        onCancel={() => {
                            setIsCreating(false);
                            setEditingProduct(null);
                        }}
                    />
                </div>
            )}

            <div className="card">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--border-color)', textAlign: 'left', backgroundColor: 'var(--surface-color)' }}>
                            <th style={{ padding: '1rem' }}>Image</th>
                            <th style={{ padding: '1rem' }}>Name</th>
                            <th style={{ padding: '1rem' }}>Category</th>
                            <th style={{ padding: '1rem' }}>Price</th>
                            <th style={{ padding: '1rem' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}>
                                    {product.image ? (
                                        <img src={product.image} alt="" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} />
                                    ) : '-'}
                                </td>
                                <td style={{ padding: '1rem', fontWeight: 500 }}>{product.name}</td>
                                <td style={{ padding: '1rem', textTransform: 'capitalize' }}>{product.category}</td>
                                <td style={{ padding: '1rem' }}>₹{product.price.toLocaleString('en-IN')}</td>

                                <td style={{ padding: '1rem', display: 'flex', gap: '0.5rem' }}>
                                    <button
                                        className="btn btn-outline"
                                        style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}
                                        onClick={() => { setEditingProduct(product); setIsCreating(false); }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-outline"
                                        style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem', borderColor: 'var(--error-color)', color: 'var(--error-color)' }}
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
