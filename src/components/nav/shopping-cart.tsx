'use client';

import * as React from 'react';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

import * as Icons from '@/components/icons';
import {
  Button,
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
import { mobileNav } from '@/config/navConfig';
// import { docsConfig } from '@/config/docs';
// import { siteConfig } from '@/config/site';
import { cn, formatPrice } from '@/lib/cn';
import { Search } from './search';
import { UserNav } from './user-nav';

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

  const itemCount = 0;
  const fee = 2;
  const total = 69;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Icons.ShoppingCart aria-hidden className="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="pr-0">
        <SheetHeader>
          <SheetTitle>Cart ({itemCount})</SheetTitle>
        </SheetHeader>

        <SheetLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Icons.Logo className="mr-2 size-6" />
          {/* <span className="font-bold">{siteConfig.name}</span> */}
        </SheetLink>
        <ScrollArea className="my-4 h-[calc(100vh-11rem)] pb-10 pl-6">
          {itemCount > 0 ? (
            <>
              <div className="flex w-full flex-col pr-6">ItEMS</div>
              <div className="space-y-4 pr-6">
                <Separator />
                <div className="space-y-1.5 text-sm">
                  <div className="flex">
                    <span className="flex-1">Shipping</span>
                    <span className="flex-1">Free</span>
                  </div>
                  <div className="flex">
                    <span className="flex-1">Transaction Fee</span>
                    <span className="flex-1">{formatPrice(fee)}</span>
                  </div>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span className="flex-1">{formatPrice(total)}</span>
                </div>
              </div>
              <SheetFooter className="pb-2">
                <SheetLink
                  href="/"
                  className="flex items-center"
                  onOpenChange={setOpen}
                >
                  <span className="font-bold">Continue to checkout</span>
                </SheetLink>
              </SheetFooter>
            </>
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
              <div
                aria-hidden
                className="relative mb-4 h-60 w-60 text-muted-foreground"
              >
                Your cart is empty
              </div>
            </div>
          )}
        </ScrollArea>
        <SheetFooter className="pb-2">
          <SheetLink
            href="/products"
            className="flex items-center"
            onOpenChange={setOpen}
          >
            <span className="font-bold">
              Add products to your cart to checkout
            </span>
          </SheetLink>
        </SheetFooter>
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
