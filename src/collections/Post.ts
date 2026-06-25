import type { CollectionConfig } from 'payload'

export const Post: CollectionConfig = {
  slug: 'posts',
  admin: {
    group: 'Conteúdo',
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedDate', 'status'],
    description: 'Artigos do blog Cloud Architects',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título',
      required: true,
      localized: true,
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
      name: 'excerpt',
      type: 'textarea',
      label: 'Resumo',
      admin: {
        description: 'Breve resumo para aparecer nas listagens',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Conteúdo',
      required: true,
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagem de Capa',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      label: 'Categoria',
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Data de Publicação',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Estado',
      defaultValue: 'draft',
      options: [
        {
          label: 'Rascunho',
          value: 'draft',
        },
        {
          label: 'Publicado',
          value: 'published',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
