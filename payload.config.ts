import path from 'path';
import { fileURLToPath } from 'url';
import { postgresAdapter } from '@payloadcms/db-postgres';
import {
  AlignFeature,
  BlockquoteFeature,
  BlocksFeature,
  BoldFeature,
  ChecklistFeature,
  HeadingFeature,
  IndentFeature,
  InlineCodeFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  RelationshipFeature,
  UnorderedListFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical';
import { s3Storage } from '@payloadcms/storage-s3';
import { buildConfig } from 'payload';
import { en } from 'payload/i18n/en';
import sharp from 'sharp';

import {
  MediaCollection,
  OrdersCollection,
  PagesCollection,
  ProductFilesCollection,
  ProductsCollection,
  UsersCollection,
} from '@/collections';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  routes: {
    admin: '/admin',
  },
  editor: lexicalEditor(),
  collections: [
    MediaCollection,
    OrdersCollection,
    PagesCollection,
    ProductFilesCollection,
    ProductsCollection,
    UsersCollection,
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI || '',
    },
  }),

  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'media-folder',
        },
        product_files: {
          prefix: 'product-files',
        },
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
      },
    }),
  ],

  /**
   * Payload can now accept specific translations from 'payload/i18n/en'
   * This is completely optional and will default to English if not provided
   */
  i18n: {
    supportedLanguages: { en },
  },

  admin: {
    autoLogin: {
      email: 'dev@payloadcms.com',
      password: 'test',
      prefillOnly: false,
    },
    meta: {
      titleSuffix: '- Digital Savanna',
      // icons:
    },
  },
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    });

    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: 'dev@payloadcms.com',
          password: 'test',
          //TODO: If you delete role, there is an error. What to do with it.
          role: 'admin',
        },
      });
    }
  },
  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable
  sharp,
});
