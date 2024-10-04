// schemas/heroSection.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heroSection',
  type: 'document',
  title: 'Hero Section',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'ID',
    }),
    defineField({
      name: 'slides',
      type: 'array',
      title: 'Hero Slides',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              type: 'localeString',
              title: 'Heading',
            },
            {
              name: 'subheading',
              type: 'localeString',
              title: 'Subheading',
            },
            {
              name: 'specialWord',
              type: 'localeString',
              title: 'Special Word',
            },
            {
              name: 'backgroundImage',
              type: 'image',
              title: 'Background Image',
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                },
              ],
            },
            {
              name: 'link',
              type: 'object',
              title: 'Link',
              fields: [
                {
                  name: 'text',
                  type: 'localeString',
                  title: 'Link Text',
                },
                {
                  name: 'url',
                  type: 'string',
                  title: 'URL',
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
