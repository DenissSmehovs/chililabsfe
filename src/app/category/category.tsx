'use client'

import React, { useState, useEffect } from 'react';
import Product from '../components/Product'
import ProductSinglePage from './[id]/page';

interface ProductData {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface ProductsProps {
  productsData: ProductData[];
}

const Catalog: React.FC<ProductsProps> = ({ productsData }) => {
  const [data, setData] = useState<ProductData[]>(productsData);
  const [query, setQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<ProductData[]>(productsData);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newData = data.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(newData);
    }, 2000);

    return () => clearTimeout(timer);
  }, [query, data]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Catalog</h2>
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="w-half px-4 py-2 mt-4 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredData && filteredData.length > 0 ? (
            filteredData.map(({ id, title, price, category, image }) => (
              <Product key={id} id={id} title={title} price={price} category={category} image = {image}/>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
