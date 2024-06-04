// app/components/Product.tsx

import Link from 'next/link';
import React from 'react';

export interface ProductList {
    id: string;
  title: string;
  price: number;
  category: string;
}

const Product: React.FC<ProductList> = ({id, title, price, category}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Price: {price}</p>
      <p>Category: {category}</p>
      <Link href={`/category/${id}`}>View Details</Link>
    </div>
  );
};

export default Product;
