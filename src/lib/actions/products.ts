'use server';

import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';

const payload = await getPayloadHMR({
  config,
});
interface GetProductsParams {
  limit: number;
}

export async function getProducts({ limit = 10 }: GetProductsParams) {
  try {
    // TODO: make pagination here for infinite scroll
    // TODO: The products table does not show up in TS

    // TODO: also add order?

    const { docs } = await payload.find({
      collection: 'products',
      depth: 1,
      where: {
        approved_for_sale: {
          equals: 'approved',
        },
      },
      limit: limit,
    });

    return docs;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getProductById(productId: string) {
  const { docs } = await payload.find({
    collection: 'products',
    depth: 1,
    where: {
      id: { equals: productId },
      approved_for_sale: {
        equals: 'approved',
      },
    },
  });

  const [data] = docs;

  return data;
}

export async function getProductsFromCart(productIds) {
  try {
    const { docs: products } = await payload.find({
      collection: 'products',
      where: {
        id: { in: productIds },
      },
    });
    return products;
  } catch (error) {}
}
