"use client";
import { useState } from 'react';
import { Product } from '@/lib/db';
import { useRouter } from 'next/navigation';

interface ProductFormProps {
    initialData?: Product;
    onSuccess?: () => void;
    onCancel?: () => void;
}

export default function ProductForm({ initialData, onSuccess, onCancel }: ProductFormProps) {
    const [formData, setFormData] = useState<Partial<Product>>(initialData || {
        name: '',
        description: '',
        price: 0,
        category: 'laptop',
        image: ''
    });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const url = initialData ? `/api/products/${initialData.id}` : '/api/products';
        const method = initialData ? 'PUT' : 'POST';

        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                if (onSuccess) onSuccess();
                router.refresh();
            } else {
                alert('Failed to save product');
            }
        } catch (error) {
            alert('Error saving product');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{initialData ? 'Edit Product' : 'Add New Product'}</h3>

            <div className="form-group">
                <label className="form-label">Name</label>
                <input
                    className="form-input"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
            </div>

            <div className="form-group">
                <label className="form-label">Category</label>
                <select
                    className="form-select"
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value as any })}
                >
                    <option value="laptop">Laptop</option>
                    <option value="desktop">Desktop</option>
                    <option value="accessory">Accessory</option>
                </select>
            </div>

            <div className="form-group">
                <label className="form-label">Price (₹)</label>
                <input
                    className="form-input"
                    type="number"
                    required
                    value={formData.price}
                    onChange={e => setFormData({ ...formData, price: Number(e.target.value) })}
                />
            </div>

            <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                    className="form-textarea"
                    rows={4}
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                />
            </div>

            <div className="form-group">
                <label className="form-label">Image URL</label>
                <input
                    className="form-input"
                    placeholder="/images/example.jpg or https://..."
                    value={formData.image}
                    onChange={e => setFormData({ ...formData, image: e.target.value })}
                />
                <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.2rem' }}>
                    Note: For this demo, please manually place images in public folder or use external URLs.
                </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Saving...' : 'Save Product'}
                </button>
                {onCancel && (
                    <button type="button" className="btn btn-outline" onClick={onCancel}>
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
}
