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
    suppressHydrationWarning: true,
    theme: 'light',
    user: 'users',
    meta: {
      titleSuffix: ' | Cloud Architects CMS',
    },
    routes: {
      login: '/login',
      createFirstUser: '/create-first-user',
      forgot: '/forgot',
      logout: '/logout',
    },
    components: {},
  },
  collections: [Users, Post, Media, Category],
  editor: lexicalEditor({}),
  secret: (() => {
    const secret = process.env.PAYLOAD_SECRET;
    if (!secret) throw new Error('PAYLOAD_SECRET é obrigatório');
    return secret;
  })(),
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || `file:${path.resolve(dirname, 'data/payload.db')}`,
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
