
import React from 'react';
import Category from '@/app/category/category';

interface ProductData {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const fetchData = async (): Promise<ProductData[]> => {
  try {
    const response = await fetch('http://localhost:3004/product', {
      next: { revalidate: 10 } //Cache update. Should be set as needed.
    });

    const data: ProductData[] = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
};


const Page = async () => {
  const data = await fetchData();

  return <Category productsData={data} />;
};

export default Page;
