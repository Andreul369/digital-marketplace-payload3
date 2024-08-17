'use client';

import React, { useEffect, useState } from 'react';
import { Product } from 'payload-types';

import { useCart } from '@/hooks/use-cart';
import { Button } from './ui';

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addItem } = useCart();

  const [isSuccess, setIsSuccess] = useState(false);

  //TODO: Wouldn't it be better to do a toast?
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, [isSuccess]);

  return (
    <Button
      onClick={() => {
        addItem(product);
        setIsSuccess(true);
      }}
      className="w-full"
    >
      {isSuccess ? 'Added' : 'Add to cart'}
    </Button>
  );
};

export default AddToCartButton;
