"use client";

import { useProduct } from '@/app/services/swrProduct.service';
import { notFound } from 'next/dist/client/components/navigation.react-server';

export default function ProductSinglePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { product, isLoading , isError } = useProduct(id);

  if (isLoading) return <div>Loading...</div>
  if (isError) return notFound()

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}
