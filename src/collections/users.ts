import { Access, CollectionConfig } from 'payload';

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user?.role === 'admin') return true;

  return {
    id: {
      equals: user?.id,
    },
  };
};

export const UsersCollection: CollectionConfig = {
  slug: 'users',
  // TODO: check the original repo for this template and stuff and fix it
  // TODO: it does not show up
  // this is more complex
  auth: true,

  access: {
    read: adminsAndUser,
    create: () => true,
    update: ({ req }) => req.user?.role === 'admin',
    delete: ({ req }) => req.user?.role === 'admin',
  },
  admin: {
    hidden: ({ user }) => user?.role !== 'admin',
    defaultColumns: ['id'],
  },
  fields: [
    {
      name: 'products',
      label: 'Products',
      admin: {
        condition: () => false,
      },
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
    },
    {
      name: 'product_files',
      label: 'Product files',
      admin: {
        condition: () => false,
      },
      type: 'relationship',
      relationTo: 'product_files',
      hasMany: true,
    },
    {
      name: 'role',
      defaultValue: 'user',
      required: true,

      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
    },
  ],
};
