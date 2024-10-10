// schemas/aboutSection.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'aboutSectionv2',
  type: 'document',
  title: 'About Section',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'Section ID',
      description: 'Unique identifier for this section',
    }),
    defineField({
      name: 'heading',
      type: 'localeString',
      title: 'Heading',
    }),
    defineField({
      name: 'specialWord',
      type: 'localeString',
      title: 'Special Word',
    }),
    defineField({
      name: 'badge',
      type: 'localeString',
      title: 'Badge Text',
    }),
    defineField({
      name: 'content',
      type: 'localeText',
      title: 'Content',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Feature Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'stats',
      type: 'array',
      title: 'Statistics',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'localeString', title: 'Label'},
            {name: 'value', type: 'number', title: 'Value'},
          ],
        },
      ],
    }),
  ],
})
