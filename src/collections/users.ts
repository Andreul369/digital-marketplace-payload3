import { CollectionConfig } from 'payload'

export const UsersCollection: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    delete: () => true,
    update: () => true,
  },
  fields: [],
}
