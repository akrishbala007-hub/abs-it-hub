import fs from 'fs';
import path from 'path';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'laptop' | 'desktop' | 'accessory';
    image?: string;
}

const dataDirectory = path.join(process.cwd(), 'data');
const productsFilePath = path.join(dataDirectory, 'products.json');

export function getProducts(): Product[] {
    if (!fs.existsSync(productsFilePath)) {
        return [];
    }
    const fileContents = fs.readFileSync(productsFilePath, 'utf8');
    return JSON.parse(fileContents);
}

export function saveProducts(products: Product[]) {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
}

export function getProductById(id: string): Product | undefined {
    const products = getProducts();
    return products.find((p) => p.id === id);
}

export function addProduct(product: Product) {
    const products = getProducts();
    products.push(product);
    saveProducts(products);
}

export function updateProduct(updatedProduct: Product) {
    let products = getProducts();
    const index = products.findIndex((p) => p.id === updatedProduct.id);
    if (index !== -1) {
        products[index] = updatedProduct;
        saveProducts(products);
    }
}

export function deleteProduct(id: string) {
    let products = getProducts();
    products = products.filter((p) => p.id !== id);
    saveProducts(products);
}
