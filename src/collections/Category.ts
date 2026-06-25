import type { CollectionConfig } from 'payload'

export const Category: CollectionConfig = {
  slug: 'categories',
  admin: {
    group: 'Conteúdo',
    useAsTitle: 'title',
    description: 'Categorias para os artigos do blog',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Nome',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug (URL)',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descrição',
    },
  ],
}
