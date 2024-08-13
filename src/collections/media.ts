import { Access, CollectionConfig } from 'payload';
import { User } from 'payload-types';

const isAdminOrHasAccessToImages =
  (): Access =>
  async ({ req }) => {
    const user = req.user as User | undefined;

    // false meaning you cannot access the image you are requesting
    if (!user) return false;
    if (user.role === 'admin') return true;

    // 👇 This is called a query constraint
    return {
      user: {
        equals: req.user?.id,
      },
    };
  };

export const MediaCollection: CollectionConfig = {
  slug: 'media',

  // hooks are like events.
  hooks: {
    // before we change these products.. do this
    beforeChange: [
      ({ req, data }) => {
        // each product data should be associated with a user
        // we don't associate it with a product, we associate it directly with a user
        // we don't want a user accessing other people's images.
        return { ...data, user: req.user?.id };
      },
    ],
  },

  // Is the user not logged in? If yes, they can see all images
  // People browsing the front of the store should be able to read all images
  // @~6h
  access: {
    read: async ({ req }) => {
      const referrer = req?.referrer;

      if (!req.user || !referrer?.includes('admin')) return true;

      return await isAdminOrHasAccessToImages()({ req });
    },
    delete: isAdminOrHasAccessToImages(),
    update: isAdminOrHasAccessToImages(),
  },
  // admin: {
  //   hidden: ({ user }) => user?.role !== 'admin',
  // },
  // this is where we want the actual product files to live
  // TODO: change them to the S3 bucket.
  upload: {
    // we optimize page loading times & image sizes in runtime (when users actually visit our app)
    imageSizes: [
      // or is it 'centre'? mispelled in the docs?
      // { name: 'thumbnail', width: 400, height: 300, position: 'center' },
      // { name: 'card', width: 768, height: 1024, position: 'center' },
      // { name: 'tablet', width: 1024, height: undefined, position: 'center' },
    ],
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
  ],
};
