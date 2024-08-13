import { BeforeChangeHook } from 'node_modules/payload/dist/collections/config/types';
import { Access, CollectionConfig } from 'payload';
import { User } from 'payload-types';

const addUser: BeforeChangeHook = ({ req, data }) => {
  const user = req.user as User | null;
  return { ...data, user: user?.id };
};

const yourOwnAndPurchased: Access = async ({ req }) => {
  const user = req.user as User | null;

  if (user?.role === 'admin') return true;
  if (!user) return false;

  const { docs: products } = await req.payload.find({
    collection: 'products',
    depth: 0,
    where: {
      user: {
        equals: user.id,
      },
    },
  });

  const ownProductFileIds = products.map((prod) => prod.product_files).flat();

  const { docs: orders } = await req.payload.find({
    collection: 'orders',
    depth: 2,
    where: {
      user: {
        equals: user.id,
      },
    },
  });

  const purchasedProductFileIds = orders
    .map((order) => {
      return order.products.map((product) => {
        if (typeof product === 'string')
          return req.payload.logger.error(
            'Search depth not sufficient to find purchased file IDs',
          );

        // TODO: This may need fixing. Can't test it now because there aren't any orders?
        return typeof product.product_files === 'number'
          ? product.product_files
          : product.product_files.id;
      });
    })
    .filter(Boolean)
    .flat();

  return {
    id: {
      in: [...ownProductFileIds, ...purchasedProductFileIds],
    },
  };
};

export const ProductFilesCollection: CollectionConfig = {
  slug: 'product_files',
  admin: {
    hidden: ({ user }) => user.role !== 'admin',
  },
  hooks: {
    beforeChange: [addUser],
  },
  access: {
    read: yourOwnAndPurchased,
  },
  upload: {
    mimeTypes: ['image/*', 'font/*', 'application/postscript'],
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
      // we don't want users to see this info in the admin dash
      admin: {
        condition: () => false,
      },
    },
  ],
};
