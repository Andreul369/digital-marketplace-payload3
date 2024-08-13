import React from 'react';
import Link from 'next/link';

import { getProducts } from '@/lib/actions/products';
import ProductListing from './product-listing';

interface ProductReelProps {
  title: string;
  subtitle?: string;
  href?: string;
  limit: number;
}

const ProductReel = async (props: ProductReelProps) => {
  const { title, subtitle, href, limit } = props;
  //TODO: make infinite scroll?
  const data = await getProducts({ limit });

  return (
    <section className="w-full py-12">
      <div className="mb-4 md:flex md:items-center md:justify-between">
        <div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
          {title ? (
            <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
          ) : null}

          {subtitle ? (
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>

        {href ? (
          <Link
            href={href}
            className="hidden text-sm font-medium text-primary hover:text-primary/85 md:block"
          >
            Shop the collection <span aria-disabled="true">&rarr;</span>
          </Link>
        ) : null}
      </div>
      <div className="relative">
        <div className="mt-6 flex w-full items-center">
          <div className="grid w-full grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 lg:gap-x-8">
            {data?.map((product, index) => (
              <ProductListing
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReel;
