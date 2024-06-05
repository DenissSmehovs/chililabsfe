"use client";

import { useProduct } from '@/app/services/swrProduct.service';
import { notFound } from 'next/dist/client/components/navigation.react-server';

export default function ProductSinglePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { product, isLoading , isError } = useProduct(id);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && notFound()}
      {!isLoading && !isError && (
      <>
<div className="flex min-h-screen items-center justify-center bg-gray-100">
  <div className="flex font-sans">
    <div className="flex-none w-48 relative">
      <img src={product.image} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
    <form className="flex-auto p-6">
      <div className="flex flex-wrap">
        <h1 className="flex-auto text-xl font-semibold text-gray-900">
          {product.title}
        </h1>
        <div className="text-lg font-semibold text-black-500">
          ${product.price}
        </div>
        <div className="w-full flex-none text-sm font-medium text-black-700 mt-2">
          {product.category}
        </div>
      </div>
      <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
        <div className="space-x-2 flex text-sm">
          <label>
            {product.description}
          </label>
        </div>
      </div>
      <div className="flex space-x-4 mb-6 text-sm font-medium">
        <div className="flex-auto flex space-x-4">
          <button className="h-10 px-6 font-semibold rounded-md border border-balck-800 text-gray-900" type="button">
            Add to cart
          </button>
        </div>
        <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Favorites">
          <svg width="20" height="20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>
      <p className="text-sm text-slate-700">
        Free shipping
      </p>
    </form>
  </div>
</div>
      </>
      )}
    </div>
  )
}
