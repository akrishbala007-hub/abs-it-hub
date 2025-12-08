import { NextResponse } from 'next/server';
import { getProductById, updateProduct, deleteProduct, Product } from '@/lib/db';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const product = getProductById(id);
    if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json(product);
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const body = await request.json();
        const { id } = await params;
        const existingProduct = getProductById(id);

        if (!existingProduct) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        const updatedProduct: Product = {
            ...existingProduct,
            ...body,
            id: id // Ensure ID remains immutable
        };

        updateProduct(updatedProduct);
        return NextResponse.json(updatedProduct);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const existingProduct = getProductById(id);
    if (!existingProduct) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    deleteProduct(id);
    return NextResponse.json({ message: 'Product deleted' });
}
