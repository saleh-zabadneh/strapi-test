import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'localeString',
            }),
            defineField({
              name: 'subheading',
              title: 'Subheading',
              type: 'localeString',
            }),
            defineField({
              name: 'specialWord',
              title: 'Special Word',
              type: 'localeString',
            }),
            defineField({
              name: 'backgroundImage',
              title: 'Background Image',
              type: 'image',
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                },
              ],
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Text',
                  type: 'localeString',
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
})
