
import React from 'react';
import Category from '@/app/category/category';

interface ProductData {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
}

const fetchData = async (): Promise<ProductData[]> => {
  const response = await fetch('http://localhost:3004/product', {
    next: { revalidate: 2 }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data: ProductData[] = await response.json();
  console.log(data);
  return data;
};

const Page = async () => {
  const data = await fetchData();

  return <Category productsData={data} />;
};

export default Page;
