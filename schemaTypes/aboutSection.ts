import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'aboutSection',
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
      name: 'content',
      type: 'localeText',
      title: 'Content',
    }),
  ],
})
