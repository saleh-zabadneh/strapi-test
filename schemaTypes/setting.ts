import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'setting',
  type: 'document',
  title: 'Settings',
  fields: [
    defineField({
      name: 'productsNavNames',
      title: 'Product Navigation Names',
      type: 'array',
      of: [
        defineField({
          name: 'product',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'localeString',
              title: 'Title',
              validation: (Rule) => Rule.required().error('Title is required'),
            }),
            defineField({
              name: 'slug',
              type: 'slug',
              title: 'URL Path',
              options: {
                source: 'title',
                maxLength: 96,
              },
              validation: (Rule) => Rule.required().error('Slug is required'),
            }),
          ],
        }),
      ],
    }),
  ],
})
