'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from 'payload-types';

import { PRODUCT_CATEGORIES } from '@/config/navConfig';
import { cn } from '@/lib/cn';
import { formatPrice } from '@/lib/formatPrice';
import { Skeleton } from './ui';

interface ProductListingProps {
  product: Product;
  index: number;
}

const ProductListing = ({ product, index }: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);

  if (!product || !isVisible) return <ProductPlaceholder />;

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category,
  )?.label;

  if (isVisible && product) {
    return (
      <Link
        className={cn('group/main invisible h-full w-full cursor-pointer', {
          'visible animate-in fade-in-5': isVisible,
        })}
        href={`/product/${product.id}`}
      >
        <div className="flex w-full flex-col">
          <div className="relative size-48 rounded-lg">
            <Image
              alt={product.name}
              src={product.imageUrl}
              fill
              className="rounded-lg"
            />
          </div>
          <h3 className="mt-4 text-sm font-medium text-gray-700">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{label}</p>
          <p className="mt-1 text-sm font-medium text-gray-900">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    );
  }
};

// TODO: The skeleton and the loaded image have different sizes.
// You can change them by going to Slow 4G in the network tab
const ProductPlaceholder = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-zinc-100">
        <Skeleton className="h-full w-full" />
      </div>
      <Skeleton className="mt-2 h-4 w-2/3 rounded-lg" />
      <Skeleton className="mt-2 h-4 w-16 rounded-lg" />
      <Skeleton className="mt-2 h-4 w-12 rounded-lg" />
    </div>
  );
};

export default ProductListing;
