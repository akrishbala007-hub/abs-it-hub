import { NextResponse } from 'next/server';
import { getProducts, addProduct, Product } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
    const products = getProducts();
    return NextResponse.json(products);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Basic validation
        if (!body.name || !body.price) {
            return NextResponse.json({ error: 'Name and Price are required' }, { status: 400 });
        }

        const newProduct: Product = {
            id: uuidv4(),
            name: body.name,
            description: body.description || '',
            price: Number(body.price),
            category: body.category || 'laptop',
            image: body.image || '/placeholder.png'
        };

        addProduct(newProduct);
        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}
