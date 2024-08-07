import React from 'react';
import Link from 'next/link';
import { Balancer } from 'react-wrap-balancer';

import * as Icons from '@/components/icons';
import ProductReel from '@/components/product-reel';
import {
  Button,
  buttonVariants,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui';

const perks = [
  {
    name: 'Instant Delivery',
    Icon: <Icons.ArrowDownToLine className="size-10" />,
    description:
      'Get your assets delivered to your email in seconds and download them right away.',
  },
  {
    name: 'Guaranteed Quality',
    Icon: <Icons.CheckCircle className="size-10" />,
    description:
      'Every asset on our platform is verified by our team to ensure our highest quality standards.',
    // Not happy? We offer a 30-day refund guarantee.
  },
  {
    name: 'For the Planet',
    Icon: <Icons.Leaf className="size-10" />,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

const HomePage = async () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold tracking-tight sm:text-6xl">
        <Balancer>
          Your marketplace for high-quality{' '}
          <span className="text-primary">digital assets</span>.
        </Balancer>
      </h1>
      <p className="mt-6 max-w-prose text-center text-lg text-muted-foreground">
        <Balancer>
          Welcome to DigitalSavanna. Every asset on our platform is verified by
          our team to ensure our highest quality standards.
        </Balancer>
      </p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <Link href="/products" className={buttonVariants()}>
          Browse Trending
        </Link>
        <Button variant="ghost">Our quality promise &rarr;</Button>
      </div>

      <section className="border-t">
        <div className="mt-6 flex flex-col justify-between gap-6 p-6 md:flex-row">
          {perks.map((perk) => (
            <Card key={perk.name} className="w-full md:w-1/3">
              <CardHeader>
                <CardTitle>{perk.Icon}</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">{perk.name}</h3>
                <p className="mt-2 text-muted-foreground">{perk.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <ProductReel
        title="Brand New"
        subtitle="Thisi s a subtitle"
        href="asdsdasd"
      />
    </>
  );
};

export default HomePage;
