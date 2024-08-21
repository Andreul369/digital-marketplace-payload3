'use server';

import { headers as getHeaders } from 'next/headers';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { User } from 'payload-types';

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

export async function getUser(): Promise<User | null> {
  const headers = getHeaders();
  return (await payload.auth({ headers })).user;
}
