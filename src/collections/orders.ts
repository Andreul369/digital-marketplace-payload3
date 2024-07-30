import { Access, CollectionConfig } from 'payload';
import { User } from 'payload-types';

const yourOwn: Access = async ({ req }) => {
  const user = req.user as User | null;

  if (user?.role === 'admin') return true;

  return {
    user: {
      equals: user?.id,
    },
  };
};

export const OrdersCollection: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'Your Orders',
    description: 'A summary of all your orders.',
  },
  access: {
    read: yourOwn,
    create: ({ req }) => req.user?.role === 'admin',
    update: ({ req }) => req.user?.role === 'admin',
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: '_isPaid',
      type: 'checkbox',
      access: {
        read: ({ req }) => req.user?.role === 'admin',
        // 👇 Those 2 are false becuase we do it through code. No one should be able to modify these 2.
        create: () => false,
        update: () => false,
      },
      admin: {
        hidden: true,
      },
      required: true,
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        hidden: true,
      },
      required: true,
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      required: true,
    },
  ],
};
