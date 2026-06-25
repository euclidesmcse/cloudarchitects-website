import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Post } from './collections/Post'
import { Media } from './collections/Media'
import { Category } from './collections/Category'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      titleSuffix: ' | Cloud Architects CMS',
    },
    routes: {
      login: '/login',
      createFirstUser: '/create-first-user',
      forgot: '/forgot',
      logout: '/logout',
      unauthorized: '/unauthorized',
    },
  },
  collections: [Post, Media, Category, Users],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, '../payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./data/payload.db',
    },
    push: true,
  }),
})
