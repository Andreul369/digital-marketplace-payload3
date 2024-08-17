'use client';

import * as React from 'react';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

import * as Icons from '@/components/icons';
import {
  Button,
  buttonVariants,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  ScrollArea,
  Separator,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';
import { useCart } from '@/hooks/use-cart';
import { cn } from '@/lib/cn';
import { formatPrice } from '@/lib/formatPrice';
import { Search } from './search';

const ListItem = React.forwardRef<
  React.ComponentRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export function ShoppingCart() {
  const [open, setOpen] = React.useState(false);
  const { items } = useCart();
  const fee = 2;
  const cartTotal = items.reduce(
    (total, { product }) => total + product.price,
    0,
  );

  const { removeItem } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Icons.ShoppingCart aria-hidden className="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Cart ({items.length})</SheetTitle>
        </SheetHeader>

        <SheetLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Icons.Logo className="mr-2 size-6" />
          {/* <span className="font-bold">{siteConfig.name}</span> */}
        </SheetLink>
        {items.length > 0 ? (
          <ScrollArea className="my-4 h-[calc(100vh-11rem)] pb-10">
            <div className="flex w-full flex-col gap-4">
              <Separator />

              {items.map(({ product }, index) => (
                <div
                  key={`${product.id}${index}`}
                  className="flex justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={60}
                      height={60}
                      className="aspect-square object-cover"
                    />
                    <div className="flex h-full flex-col justify-between">
                      <p className="line-clamp-1 text-sm">{product.name}</p>
                      <Button
                        variant="ghost"
                        className="h-6 justify-normal p-0 text-sm text-foreground transition-none hover:bg-transparent"
                        onClick={() => removeItem(product.id)}
                      >
                        <Icons.Close className="mr-1 size-4 text-red-500" />
                        Remove
                      </Button>
                    </div>
                  </div>

                  <p className="text-sm font-semibold">
                    {formatPrice(product.price)}
                  </p>
                </div>
              ))}
              <Separator />
            </div>

            <div className="mt-4 flex w-full flex-col justify-between space-y-4">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>
                <div className="flex justify-between">
                  <p>Transaction Fee</p>
                  <p>{formatPrice(fee)}</p>
                </div>
              </div>

              <div className="flex justify-between">
                <p>Total</p>
                <p className="font-semibold">{formatPrice(cartTotal + fee)}</p>
              </div>
            </div>
          </ScrollArea>
        ) : (
          // TODO: add this image blurred
          //   <div className="flex">
          //     <Image
          //       src="/gradient.webp"
          //       className="blur-xl"
          //       fill
          //       alt="Empty cart"
          //     />
          //   </div>
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <Icons.ShoppingCart
              className="mb-4 size-16 text-muted-foreground"
              aria-hidden="true"
            />
            <div className="text-xl font-medium text-muted-foreground">
              Your cart is empty
            </div>
            <SheetTrigger asChild>
              <Link
                aria-label="Add items to your cart to checkout"
                href="/products"
                className={cn(
                  buttonVariants({
                    variant: 'link',
                    size: 'sm',
                    className: 'text-sm text-muted-foreground',
                  }),
                )}
              >
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
        {items.length > 0 && (
          <SheetFooter className="pb-2">
            <SheetLink
              href="/cart"
              className="flex items-center"
              onOpenChange={setOpen}
            >
              <span className="font-bold">Continue to checkout</span>
            </SheetLink>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}

interface SheetLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function SheetLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: SheetLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
