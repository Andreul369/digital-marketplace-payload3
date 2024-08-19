import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AddToCartButton from '@/components/add-to-cart-button';
import * as Icons from '@/components/icons';
import ProductReel from '@/components/product-reel';
import { PRODUCT_CATEGORIES } from '@/config/navConfig';
import { getProductById, getProductByIdSA } from '@/lib/actions/products';
import { formatPrice } from '@/lib/formatPrice';

const BREADCRUMBS = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'Products', href: '/products' },
];

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(params.id);
  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product?.category,
  )?.label;

  //TODO: Make this notFound() instead of null
  if (!product) return null;

  return (
    <>
      {/* //TODO: Take breadcrumbs from Acme Corp */}
      <ol className="flex items-center space-x-2 self-start p-6">
        {BREADCRUMBS.map((breadcrumb, i) => (
          <li key={breadcrumb.href}>
            <div className="flex items-center text-sm">
              <Link
                href={breadcrumb.href}
                className="text-sm font-medium text-muted-foreground hover:text-gray-900"
              >
                {breadcrumb.name}
              </Link>
              {i !== BREADCRUMBS.length - 1 ? (
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-0 flex flex-col gap-8 sm:mt-6 md:flex-row md:gap-16">
        {/* Product images */}
        <div className="relative size-[400px]">
          <Image
            src={product.image.url}
            alt={product.name}
            fill
            className="rounded-lg"
          />
        </div>

        {/* Product Details */}
        <section>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {product.name}
          </h1>
          <div className="flex items-center">
            <p className="font-medium">{formatPrice(product.price)}</p>

            <div className="ml-4 border-l border-gray-300 pl-4 text-muted-foreground">
              {label}
            </div>
          </div>

          <div className="mt-4 space-y-6">
            <p className="text-base text-muted-foreground">
              {product?.description}
            </p>
          </div>

          <div className="mt-6 flex items-center">
            <Icons.Check className="size-5 text-green-500" />
            <p className="ml-2 text-sm text-muted-foreground">
              Eligible for instant delivery
            </p>
          </div>

          {/* add to cart part */}
          <div>
            <div className="mt-10">
              <AddToCartButton product={product} />
            </div>
            <div className="mt-6 text-center">
              <div className="text-medium inline-flex text-sm">
                <Icons.ShieldCheck
                  aria-hidden="true"
                  className="mr-2 size-5 text-gray-400"
                />
                <span className="text-muted-foreground hover:text-gray-700">
                  30 Day Return Guarantee
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ProductReel
        href="/products"
        query={{ category: product.category, limit: 4 }}
        title={`Similar ${label}`}
        subtitle={`Browse similar high-quality ${label} just like '${product.name}'`}
      />
    </>
  );
};

export default ProductPage;
