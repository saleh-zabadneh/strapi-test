import {defineType, defineField} from 'sanity'

export const product = defineType({
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
      title: 'Title',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'description',
      type: 'localeText',
      title: 'Description',
      validation: (Rule) => Rule.required().error('Description is required'),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required().error('Image is required'),
    }),
    defineField({
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Link Title',
              validation: (Rule) => Rule.required().error('Link title is required'),
            }),
            defineField({
              name: 'url',
              type: 'url',
              title: 'URL',
              validation: (Rule) => Rule.required().error('URL is required'),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    }),
  ],
})
