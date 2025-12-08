import { supabase } from './supabase';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'laptop' | 'desktop' | 'accessory';
    image?: string;
}

export async function getProducts(): Promise<Product[]> {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching products:', error);
        return [];
    }

    return data || [];
}

export async function getProductById(id: string): Promise<Product | null> {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching product:', error);
        return null;
    }

    return data;
}

export async function addProduct(product: Omit<Product, 'id'>): Promise<Product | null> {
    const { data, error } = await supabase
        .from('products')
        .insert([product])
        .select()
        .single();

    if (error) {
        console.error('Error adding product:', error);
        return null;
    }

    return data;
}

export async function updateProduct(updatedProduct: Product): Promise<Product | null> {
    const { data, error } = await supabase
        .from('products')
        .update({
            name: updatedProduct.name,
            description: updatedProduct.description,
            price: updatedProduct.price,
            category: updatedProduct.category,
            image: updatedProduct.image
        })
        .eq('id', updatedProduct.id)
        .select()
        .single();

    if (error) {
        console.error('Error updating product:', error);
        return null;
    }

    return data;
}

export async function deleteProduct(id: string): Promise<boolean> {
    const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting product:', error);
        return false;
    }

    return true;
}
