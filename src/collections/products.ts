import { CollectionConfig } from 'payload';

import { PRODUCT_CATEGORIES } from '@/config/navConfig';

export const ProductsCollection: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  // access: {},
  // fields that the table will have
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
      admin: { condition: () => false },
    },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'price',
      label: 'Price in USD',
      min: 0,
      max: 1000,
      type: 'number',
      required: true,
    },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      options: PRODUCT_CATEGORIES.map(({ label, value }) => ({ label, value })),
      required: true,
    },
    {
      name: 'product_files',
      label: 'Product file(s)',
      type: 'relationship',
      required: true,
      relationTo: 'product_files',
      // each product has one product file
      hasMany: false,
    },
    {
      name: 'approved_for_sale',
      label: 'Product Status',
      type: 'select',
      defaultValue: 'pending',
      required: true,
      // only admins are able to change the options
      access: {
        create: ({ req }) => req.user?.role === 'admin',
        read: ({ req }) => req.user?.role === 'admin',
        update: ({ req }) => req.user?.role === 'admin',
      },
      options: [
        {
          label: 'Pending verification',
          value: 'pending',
        },
        {
          label: 'Approved',
          value: 'approved',
        },
        {
          label: 'Denied',
          value: 'denied',
        },
      ],
    },
    {
      name: 'price_id',
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
      type: 'text',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'stripe_id',
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
      type: 'text',
      admin: {
        hidden: true,
      },
    },
    //TODO: This does not show up as an array of images in supabase, so I will go for single image at the moment
    {
      name: 'image',
      label: 'Product image',
      type: 'relationship',
      relationTo: 'media',
    },
  ],
};
