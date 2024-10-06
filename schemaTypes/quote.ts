import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'quote',
  type: 'object',
  title: 'Quote',
  fields: [
    defineField({
      name: 'text',
      type: 'localeText',
    }),
    defineField({
      name: 'author',
      type: 'localeString',
    }),
  ],
})
