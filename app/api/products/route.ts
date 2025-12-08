import { NextResponse } from 'next/server';
import { getProducts, addProduct } from '@/lib/db';

export async function GET() {
    const products = await getProducts();
    return NextResponse.json(products);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Basic validation
        if (!body.name || !body.price) {
            return NextResponse.json({ error: 'Name and Price are required' }, { status: 400 });
        }

        const newProduct = {
            name: body.name,
            description: body.description || '',
            price: Number(body.price),
            category: body.category || 'laptop',
            image: body.image || '/placeholder.png'
        };

        const result = await addProduct(newProduct);

        if (!result) {
            return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
        }

        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}
