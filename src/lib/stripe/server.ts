import Stripe from 'stripe';

import { createOrder } from '../actions/orders';
import { getProductsFromCart } from '../actions/products';
import { stripe } from './config';

export async function checkoutWithStripe(productIds) {
  const cartProducts = await getProductsFromCart(productIds);

  // 👇filters products, keeping only those with a price_id that evaluates to true.
  // i.e. it's not null, undefined, or false).
  const filteredProducts = cartProducts?.filter((prod) =>
    Boolean(prod.price_id),
  );

  const filteredProductsIds = filteredProducts.map((prod) => prod.id);

  // TODO: find a way to access user id
  const order = await createOrder({ userId: 8, products: filteredProductsIds });

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  filteredProducts.forEach((product) => {
    line_items.push({
      price: product.price_id!,
      quantity: 1,
    });
  });

  // 👇 Add the $1 fee
  line_items.push({
    price: 'price_1PqGWlANHMq2sAQvVK9AKEfS',
    quantity: 1,
    adjustable_quantity: {
      enabled: false,
    },
  });

  const params: Stripe.Checkout.SessionCreateParams = {
    billing_address_collection: 'required',
    payment_method_types: ['card', 'paypal'],
    mode: 'payment',
    metadata: {
      userId: user.id,
      orderId: order.id,
    },
    line_items,
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${order.id}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/cart`,
  };

  // Create a checkout session in Stripe
  let session;

  try {
    session = stripe.checkout.sessions.create(params);
  } catch (error) {}

  // Instead of returning a Response, just return the data or error.
  if (session) {
    return { sessionId: session.id };
  } else {
    throw new Error('Unable to create checkout session.');
  }
}
