export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
  }

export async function fetchProducts(): Promise<Product[]> {
    const response = await fetch('http://localhost:3004/product',{
        next: {revalidate: 5}
    });
    const data = await response.json();
    return data.product;
  }
