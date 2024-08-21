'use server';

import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { Product } from 'payload-types';

const payload = await getPayloadHMR({
  config,
});
interface createOrderParams {
  userId: string;
  filteredProductsIds: string[];
}
export async function createOrder({
  userId,
  filteredProductsIds,
}: createOrderParams) {
  const order = await payload.create({
    collection: 'orders',
    data: {
      is_paid: false,
      products: filteredProductsIds,
      user: user.id,
    },
  });

  return order;
}
