// app/catalog/Category.tsx
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
    <div>
      <h1>Catalog</h1>
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search products..."
      />
      {filteredData && filteredData.length > 0 ? (
        filteredData.map(({ id, title, price,category}) => (
          <Product key={id} id = {id} title={title} price={price} category={category}/>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default Catalog;
