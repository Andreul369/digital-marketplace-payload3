'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Check, Loader2, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PRODUCT_CATEGORIES } from '@/config/navConfig';
import { useCart } from '@/hooks/use-cart';
import { cn } from '@/lib/cn';
import { formatPrice } from '@/lib/formatPrice';
import { getStripe } from '@/lib/stripe/client';
import { checkoutWithStripe } from '@/lib/stripe/server';

const Cartpage = () => {
  const { items, removeItem } = useCart();

  const router = useRouter();

  //TODO: create checkout session

  const productIds = items.map(({ product }) => product.id);

  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cartTotal = items.reduce(
    (total, { product }) => total + product.price,
    0,
  );

  const fee = 1;
  const handleStripeCheckout = async (productIds) => {
    const { sessionId } = await checkoutWithStripe(productIds);
    // const stripe = await getStripe();
    // stripe?.redirectToCheckout({ sessionId });
  };

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Shopping Cart
        </h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <div
            className={cn('lg:col-span-7', {
              'rounded-lg border-2 border-dashed p-12':
                isMounted && items.length === 0,
            })}
          >
            <h2 className="sr-only">Items in your shopping cart</h2>

            {isMounted && items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center space-y-1">
                <div
                  aria-hidden="true"
                  className="relative mb-4 h-40 w-40 text-muted-foreground"
                >
                  <Image
                    src="/hippo-empty-cart.png"
                    fill
                    loading="eager"
                    alt="empty shopping cart hippo"
                  />
                </div>
                <h3 className="text-2xl font-semibold">Your cart is empty</h3>
                <p className="text-center text-muted-foreground">
                  Whoops! Nothing to show here yet.
                </p>
              </div>
            ) : null}

            <ul
              className={cn({
                'divide-y divide-gray-200 border-b border-t':
                  isMounted && items.length > 0,
              })}
            >
              {isMounted &&
                items.map(({ product }) => {
                  const label = PRODUCT_CATEGORIES.find(
                    (c) => c.value === product.category,
                  )?.label;

                  return (
                    <li key={product.id} className="flex py-6 sm:py-10">
                      <div className="flex-shrink-0">
                        <div className="relative h-24 w-24">
                          {/* {typeof image !== 'string' && image.url ? ( */}
                          <Image
                            fill
                            src={product.imageUrl}
                            alt="product image"
                            className="h-full w-full rounded-md object-cover object-center sm:h-48 sm:w-48"
                          />
                          {/* ) : null} */}
                        </div>
                      </div>

                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <Link
                                  href={`/product/${product.id}`}
                                  className="font-medium text-gray-700 hover:text-gray-800"
                                >
                                  {product.name}
                                </Link>
                              </h3>
                            </div>

                            <div className="mt-1 flex text-sm">
                              <p className="text-muted-foreground">
                                Category: {label}
                              </p>
                            </div>

                            <p className="mt-1 text-sm font-medium">
                              {formatPrice(product.price)}
                            </p>
                          </div>

                          <div className="mt-4 w-20 sm:mt-0 sm:pr-9">
                            <div className="absolute right-0 top-0">
                              <Button
                                aria-label="remove product"
                                onClick={() => removeItem(product.id)}
                                variant="ghost"
                              >
                                <X className="h-5 w-5" aria-hidden="true" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        <p className="mt-4 flex space-x-2 text-sm">
                          <Check className="h-5 w-5 flex-shrink-0 text-green-500" />

                          <span>Eligible for instant delivery</span>
                        </p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>

          <section className="mt-16 rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium">Order summary</h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm">Subtotal</p>
                <p className="text-sm font-medium">
                  {isMounted ? (
                    formatPrice(cartTotal)
                  ) : (
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  )}
                </p>
              </div>

              <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>Flat Transaction Fee</span>
                </div>
                <div className="text-sm font-medium">
                  {isMounted ? (
                    formatPrice(fee)
                  ) : (
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between border-t pt-4">
                <div className="text-base font-medium">Order Total</div>
                <div className="text-base font-medium">
                  {isMounted ? (
                    formatPrice(cartTotal + fee)
                  ) : (
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button
                // disabled={items.length === 0 || isLoading}
                onClick={() => handleStripeCheckout(productIds)}
                className="w-full"
                size="lg"
              >
                {/* {isLoading ? (
                  <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
                ) : null} */}
                Checkout
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
